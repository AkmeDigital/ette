// src/types/post.ts

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: {
    alt?: string;
    asset: {
      url: string;
    };
  };
  body?: {
    _key: string;
    children: {
      _key: string;
      text: string;
    }[];
  }[];
  imageGallery?: {
    _key: string;
    alt?: string;
    position?: string;
    image: {
      asset: {
        url: string;
      };
    };
  }[];
}

