export interface SearchDataProps {
  title?: string;
  description?: string;
  link?: string;
  location?: string;
  typeOfResidence?: string;
  coordinates?: string;
  room?: {
    gte: number;
    lte: number;
  };
  area?: {
    gte: number;
    lte: number;
  };
  price?: {
    gte: number;
    lte: number;
  };

  [key: string]: string | number | { gte?: number; lte?: number } | undefined;
}