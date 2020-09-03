export type Repository = Readonly<{
  description: string;
  stars: number;
  forks: number;
  topics: string[];
  uniqueName: string;
  url: string;
  watchers: number;
}>;
