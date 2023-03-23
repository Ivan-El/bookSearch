import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  return (
    <>
      <Suspense fallback="">
        <Navbar />
        <AppRouter />
      </Suspense>
    </>
  );
};

export default App;
