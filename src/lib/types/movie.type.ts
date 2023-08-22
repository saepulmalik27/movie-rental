export type TMovie = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  created: string;
  edited: string;
  url: string;
  image: {
    cover: string;
    thumbnail: string;
  };
  price: number;
};
