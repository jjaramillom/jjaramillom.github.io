import React from 'react';

import { NotFoundPage } from '@/components';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.
const GlobalNotFound = () => {
  return <NotFoundPage />;
};
export default GlobalNotFound;
