import { Suspense } from "react";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { AppRouter } from "./providers/router";

import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const cls = classNames("app", {}, []);

  return (
    <div className={cls}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />

          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
