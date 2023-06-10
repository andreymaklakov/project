import { Suspense } from "react";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  const cls = classNames("app", {}, [theme]);

  return (
    <div className={cls}>
      <Suspense fallback="">
        <Navbar />
        <div className="contentPage">
          <Sidebar />

          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
