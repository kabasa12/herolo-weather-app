import { AppHeader } from './components/appHeader/AppHeader';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage/HomePage';
import { FavoritePage } from './pages/favoritePage/FavoritePage';

export const App = () => {
  return (
    <section>
      <header>
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </main>
    </section>
  );
}
