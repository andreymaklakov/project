import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo(function MainPage() {
  const { t } = useTranslation("main");

  return (
    <>
      <p>{t("Главная страница")}</p>
    </>
  );
});

export default MainPage;
