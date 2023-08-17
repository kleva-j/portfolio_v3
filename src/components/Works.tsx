import { FeaturedCard } from '@/components/FeaturedCard';
import { SectionWrapper } from '@/components/hoc/SectionWrapper';
import { ProjectList } from '@/components/ProjectList';
import { useFetch } from '@/libs/hooks';

const url = `${import.meta.env.VITE_API_URL}/api/Projects/`;

export const Works = SectionWrapper(
  () => {
    const { data: works } = useFetch(url);

    return (
      <div>
        <h2 className="relative flex items-center before:relative [counter-increment:section] before:[content:'0'counter(section)'.'] before:text-teal-500 before:mr-[5px] mt-[10px] mb-[40px] whitespace-nowrap text-2xl before:font-mono font-semibold text-[#ccd6f6] after:content-[''] after:ml-[10px] after:w-full after:max-w-[300px] after:h-px after:relative after:block after:bg-[#233554]">
          Some Things I&rsquo;ve Built
        </h2>
        <ul>
          {works.slice(1, 4).map((item) => (
            <FeaturedCard key={item.title} {...item} />
          ))}
        </ul>
        <ProjectList works={works} />
      </div>
    );
  },
  'work',
  'mx-auto py-[60px] sm:py-[80px] md:py-[100px] w-full max-w-[1000px]'
);
