import { profileReducer } from "entitiess/Profile";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const cls = classNames("", {}, [className]);

  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducer={initialReducers} removeAfterUnmount>
      <div className={cls}>{t("PROFILE PAGE")}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
