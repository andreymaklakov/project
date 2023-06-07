import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const cls = classNames("app", {}, [theme]);

  return (
    <div className={cls}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>

      <button onClick={toggleTheme}>Theme</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />

          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
