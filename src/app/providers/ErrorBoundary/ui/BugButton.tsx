import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "shared/ui/Button/Button";

export const BugButton: FC = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw Error();
    }
  }, [error]);

  return <Button onClick={throwError}>{t("Throw Error")}</Button>;
};
