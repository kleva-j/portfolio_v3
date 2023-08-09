import { Socials } from '@/components/ui/Socials';

export const LeftFloatBar = () => (
  <div className="hidden md:block fixed left-5 lg:left-10 right-auto w-10 bottom-0 z-10">
    <div className=" flex flex-col justify-center gap-y-8 after:relative after:content-[''] after:block after:w-px after:h-[90px] after:mx-auto after:bg-[#a8b2d1]">
      <Socials />
    </div>
  </div>
);
