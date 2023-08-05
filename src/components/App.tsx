import { ErrorBoundary } from 'react-error-boundary';

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <section className="">
        <Header />
        <Footer />
      </section>
    </ErrorBoundary>
  );
}

export default App;
