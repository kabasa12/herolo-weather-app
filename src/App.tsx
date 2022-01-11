import { AppHeader } from './components/appHeader/AppHeader';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage/HomePage';

export const App = () => {
  return (
    <section>
      <header>
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </section>
  );
}
