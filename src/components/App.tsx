import { ErrorBoundary } from 'react-error-boundary';

import { Header } from '@/components/layout/Header';
import { LeftFloatBar } from '@/components/LeftFloatBar';
import { MainContent } from '@/components/MainContent';
import { RightFloatBar } from '@/components/RightFloatBar';

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Header />
      <MainContent />
      <LeftFloatBar />
      <RightFloatBar />
    </ErrorBoundary>
  );
}

export default App;
