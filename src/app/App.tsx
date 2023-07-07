import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { getUserInited, userActions } from "entitiess/User";

import { AppRouter } from "./providers/router";

import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const App = () => {
  const cls = classNames("app", {}, []);

  const inited = useSelector(getUserInited);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cls}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />

          {inited ? <AppRouter /> : null}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
