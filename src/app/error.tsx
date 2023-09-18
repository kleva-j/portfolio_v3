'use client';

import * as React from 'react';

type ErrorProps = { error: Error; reset: () => void };

export default function Error({ error }: ErrorProps) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Oh no, something went wrong... maybe refresh?</p>
    </div>
  );
}
