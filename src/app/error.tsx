'use client';

import { Button } from '@/components/ui/Button';
import { useEffect } from 'react';

import Image from 'next/image';

type ErrorProps = { error: Error; reset: () => void };

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-[500px] min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-[400px]">
        <Image width={400} height={400} src={'/scarecrow.png'} alt="404-Scarecrow" />
      </div>
      <div className="bg-[#0a182e]/50 p-8 flex flex-col items-center gap-8">
        <h2 className="text-white text-3xl font-medium text-center">Something went wrong</h2>
        <p className="text-white text-sm font-mono text-center">
          The resource you are looking for might be removed or is temporarily
          unavailable
        </p>
        <Button variant="secondary" onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
}
