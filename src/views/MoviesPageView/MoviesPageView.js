import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router';

export default function MoviesPageView() {
  const match = useRouteMatch();

  return `<h1>Movie Page: ${match.bookId}</h1>`;
}
