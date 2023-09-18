import { useEffect, useState } from 'react';

import { Work } from '@/lib/types';

export const useFetch = (url: string) => {
  const [data, setData] = useState<Work[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await fetch(url)).json();
      setData(() => data.docs);
    };

    fetchData();
  }, [url]);

  return { data };
};
