import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';
import SplashScreen from './components/SplashScreen';
import useCopy from './hooks/useCopy';
import MainPage from './pages/MainPage';

// lazy loaded pages
const Radi = lazy(() => import('./pages/Radi'));
const Raaza = lazy(() => import('./pages/Raaza'));
const Meta = lazy(() => import('./pages/Meta'));
const ExAugments = lazy(() => import('./pages/ExAugments'));

function App() {
  const { toastMessage, copy } = useCopy(1500);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />

      <Suspense fallback={<div className="pt-24 p-6">Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/radi" element={<Radi onCopy={copy} />} />
          <Route path="/raaza" element={<Raaza onCopy={copy} />} />
          <Route path="/meta" element={<Meta onCopy={copy} />} />
          <Route path="/ex-augments" element={<ExAugments onCopy={copy} />} />
        </Routes>
      </Suspense>

      <Footer />
      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
}

export default App;
