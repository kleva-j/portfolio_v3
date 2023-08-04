import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Count is: {count}
      </button>
    </div>
  );
}

export default App;
