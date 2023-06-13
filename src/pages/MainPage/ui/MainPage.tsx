import { useTranslation } from "react-i18next";

import { BugButton } from "app/providers/ErrorBoundary";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <>
      <p>{t("Главная страница")}</p>

      <BugButton />
    </>
  );
};

export default MainPage;
