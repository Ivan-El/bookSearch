import { RouteProps } from 'react-router-dom';
import { BookPage } from 'pages/BookPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { BookSearchPage } from 'pages/BookSearchPage';

export enum AppRoutes {
  BOOKS = 'books',
  BOOK_PAGE = 'book_page',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.BOOKS]: '/bookSearch',
  [AppRoutes.BOOK_PAGE]: '/bookSearch/books/',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.BOOKS]: {
    path: RoutePath.books,
    element: <BookSearchPage />,
  },
  [AppRoutes.BOOK_PAGE]: {
    path: `${RoutePath.book_page}:id`,
    element: <BookPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
