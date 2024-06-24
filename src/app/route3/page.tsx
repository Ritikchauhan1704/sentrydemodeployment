'use client';

import * as Sentry from '@sentry/nextjs';

export default function Route3() {
  const throwError = () => {
    try {
      throw Error('Dummy error');
    } catch (error) {
      Sentry.captureException('Dummy error');
    }
  };
  return (
    <>
      <div>Route3</div>
      <button onClick={throwError}>Throw error</button>
    </>
  );
}
