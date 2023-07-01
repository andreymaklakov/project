import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";

import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";

import styles from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const cls = classNames(styles.ProfileCard, {}, [className]);

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  const { t } = useTranslation("profile");

  return (
    <div className={cls}>
      <div className={styles.header}>
        <Text title={t("Profile")} />

        <Button variant={ButtonVariant.OUTLINE} className={styles.editBtn}>
          {t("Change")}
        </Button>
      </div>

      <div className={styles.data}>
        <Input
          className={styles.input}
          value={data?.first}
          placeholder={t("Your name")}
        />

        <Input
          className={styles.input}
          value={data?.lastname}
          placeholder={t("Your lastname")}
        />
      </div>
    </div>
  );
};
