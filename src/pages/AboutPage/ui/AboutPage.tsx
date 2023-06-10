import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return <p>{t("О сайте")}</p>;
};

export default AboutPage;
