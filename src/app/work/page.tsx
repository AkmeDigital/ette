import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/types"; 
import HeaderText from '@/app/components/HeaderText'
import SecondaryFooter from "../components/secondaryFooter";

export default async function WorkPage() {
  const posts: Post[] = await client.fetch(POSTS_QUERY);

  return (
    <>

    <div className="p-4">
      <HeaderText text="My Workssss" /> {/* Set header text */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Link
            href={`/work/${post.slug.current}`}
            key={post._id}
            className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {post.mainImage && post.mainImage.asset && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                width={500}
                height={300}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
              {post.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
     <SecondaryFooter />
     </>
  );
  
}
