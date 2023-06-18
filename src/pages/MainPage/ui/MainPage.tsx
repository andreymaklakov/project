import { useTranslation } from "react-i18next";

// import { Counter } from "entitiess/Counter";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <>
      <p>{t("Главная страница")}</p>

      {/* <Counter /> */}
    </>
  );
};

export default MainPage;
