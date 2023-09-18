import { getProjects } from '@/lib/utils';

import App from '@/components/App';

export default async function Home() {
  const data = await getProjects();
  return <App data={data.docs} />;
}
