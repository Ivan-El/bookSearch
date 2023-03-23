export interface IBookImageViewLink {
  extraLarge: string;
  large: string;
  medium: string;
  small: string;
  smallThumbnail: string;
  thumbnail: string;
}

export interface IBook {
  id: string;
  volumeInfo: {
    imageLinks?: IBookImageViewLink;
    title: string;
    description: string;
    categories?: string[];
    authors?: string[];
  };
}

export interface IBookList {
  items: IBook[];
  totalItems: number;
}
