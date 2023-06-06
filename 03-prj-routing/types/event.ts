export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  description?: string;
  isFeatured?: boolean;
}
