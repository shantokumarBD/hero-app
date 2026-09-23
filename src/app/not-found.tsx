import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 px-4">
      <div className="text-center space-y-5">
        <h1 className="text-7xl font-extrabold tracking-tight lg:text-9xl text-zinc-900 dark:text-white">
          404
        </h1>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Page not found
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>
        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 h-10 px-8 py-2"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage