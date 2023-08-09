import { FC } from 'react';

import { Socials } from '@/components/ui/Socials';

export const Footer: FC = () => {
  return (
    <footer className="bg-[#0a182ed9] text-center p-4 w-full">
      <div className="md:hidden">
        <Socials />
      </div>
      <span className="font-mono text-[13px] text-[#8892B0] hover:text-teal-500 cursor-pointer">
        Built by kasmickleva
      </span>
    </footer>
  );
};
