import { ErrorBoundary } from 'react-error-boundary';

import { Header } from '@/components/layout/Header';
import { MainContent } from '@/components/MainContent';

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Header />
      <MainContent />
    </ErrorBoundary>
  );
}

export default App;
