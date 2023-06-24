import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { userActions } from "entitiess/User";

import { AppRouter } from "./providers/router";

import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const cls = classNames("app", {}, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
