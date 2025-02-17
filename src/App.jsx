import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { forceChakraDarkTheme } from './utils/utils';
import { toastStyles } from './utils/customTheme';

import Header from './components/navs/Header';
import Sidebar from './components/navs/Sidebar';

import LandingPage from './pages/LandingPage';
import CategoryPage from './pages/CategoryPage';
import ShowcasePage from './pages/ShowcasePage';
import SplitTextDemo from './demo/TextAnimations/SplitTextDemo';

// Splash Screen Component
const SplashScreen = () => (
  <div className="flex items-center justify-center h-screen bg-black text-white text-4xl font-bold">
    <SplitTextDemo/>
  </div>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    forceChakraDarkTheme();

    // Set favicon dynamically
    const setFavicon = (iconPath) => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = iconPath;
    };

    setFavicon("/favicon.png"); // Change path if needed

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show splash for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return loading ? (
    <SplashScreen />
  ) : (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/showcase" element={<ShowcasePage />} />
        <Route
          path="/:category/:subcategory"
          element={
            <main className="app-container">
              <Header />
              <section className="category-wrapper">
                <Sidebar />
                <CategoryPage />
              </section>
              <Toaster toastOptions={toastStyles} position="bottom-right" visibleToasts={1} />
            </main>
          }
        />
      </Routes>
    </Router>
  );
}
