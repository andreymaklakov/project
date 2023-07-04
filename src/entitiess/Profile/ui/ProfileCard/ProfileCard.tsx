import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextAlign, TextVariant } from "shared/ui/Text/Text";
import { Currency, CurrencySelect } from "entitiess/Currency";
import { Countries, CountrySelect } from "entitiess/Country";

import { Profile } from "../../model/types/profile";

import styles from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCountry?: (value: Countries) => void;
  onChangeCurrency?: (value: Currency) => void;
}

export const ProfileCard = memo(function ProfileCard({
  className,
  data,
  error,
  isLoading,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCountry,
  onChangeCurrency,
}: ProfileCardProps) {
  const cls = classNames(
    styles.ProfileCard,
    {
      [styles.loading]: isLoading,
      [styles.error]: !!error,
      [styles.editing]: !readonly,
    },
    [className]
  );

  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div className={cls}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cls}>
        <Text
          align={TextAlign.CENTER}
          variant={TextVariant.ERROR}
          title={t("Error ocured during loading profile info")}
          text={t("Try to refresh web page")}
        />
      </div>
    );
  }

  return (
    <div className={cls}>
      <div className={styles.data}>
        {data?.avatar ? <Avatar src={data.avatar} /> : null}

        <Input
          readonly={readonly}
          value={data?.first}
          placeholder={t("Your name")}
          onChange={onChangeFirstname}
        />

        <Input
          readonly={readonly}
          value={data?.lastname}
          placeholder={t("Your lastname")}
          onChange={onChangeLastname}
        />

        <Input
          readonly={readonly}
          value={data?.age}
          placeholder={t("Age")}
          onChange={onChangeAge}
        />

        <Input
          readonly={readonly}
          value={data?.city}
          placeholder={t("City")}
          onChange={onChangeCity}
        />

        <Input
          readonly={readonly}
          value={data?.username}
          placeholder={t("Username")}
          onChange={onChangeUsername}
        />

        <Input
          readonly={readonly}
          value={data?.avatar}
          placeholder={t("Avatar")}
          onChange={onChangeAvatar}
        />

        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />

        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
      </div>
    </div>
  );
});
