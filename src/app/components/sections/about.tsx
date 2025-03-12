import { client } from '@/sanity/lib/client';
import { ABOUT_QUERY } from '@/sanity/lib/queries';
import ImageHelper from '../helpers/imageHelper';

export default async function About() {
  const aboutData = await client.fetch(ABOUT_QUERY);


  // console.log('about data', aboutData)

  if (!aboutData) {
    return <p className="text-center text-red-500">No about data found.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center text-center bg-primarylight my-[8rem] mb-[6rem] lg:mt-0 dark-section" id='about'>
      <div className='flex flex-col items-center justify-center gap-4 lg:gap-8 mx-[2rem] lg:pt-[6rem]'>
       <div className="mx-[6rem] lg:mb-[3rem]">
          <ImageHelper 
            img={aboutData.image?.asset?.url} 
            alt={aboutData.image?.alt || 'About Image'} 
            width={350} 
            height={250} 
          />
        </div>
        <div>
          <h2 className="mb-2 mt-2 title">{aboutData.title}</h2>
        </div>
        <div className="max-w-2xl">
          <p className="">{aboutData.blurb}</p>
        </div>
      </div>
    </div>
  );
}
