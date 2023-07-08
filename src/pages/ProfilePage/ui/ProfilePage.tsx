import { FC, memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextVariant } from "shared/ui/Text/Text";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";

import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateError,
  profileActions,
  ProfileCard,
  profileReducer,
  getProfileForm,
  ValidateProfileError,
} from "entitiess/Profile";
import { Countries } from "entitiess/Country";
import { Currency } from "entitiess/Currency";

import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className = "" }) => {
  const cls = classNames("", {}, [className]);

  const data = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const validateError = useSelector(getProfileValidateError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  const { t } = useTranslation("profile");

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t("Server error"),
    [ValidateProfileError.NO_DATA]: t("Data not found"),
    [ValidateProfileError.INCORRECT_AGE]: t("Age is incorrect"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("Country is incorrect"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      "Firstname and secondname are required"
    ),
  };

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchProfileData());
  });

  const handleChangeFirstname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value }));
    },
    [dispatch]
  );

  const handleChangeLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch]
  );

  const handleChangeAge = useCallback(
    (value: string) => {
      let validatedValue = value.replace(/\D+/gm, "");

      if (Number(validatedValue) > 100) {
        validatedValue = "100";
      }

      dispatch(profileActions.updateProfile({ age: Number(validatedValue) }));
    },
    [dispatch]
  );

  const handleChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch]
  );

  const handleChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch]
  );

  const handleChangeCountry = useCallback(
    (value: Countries) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  const handleChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducer={initialReducers} removeAfterUnmount>
      <div className={cls}>
        <ProfilePageHeader />

        {validateError?.length
          ? validateError.map((error) => (
              <Text
                key={error}
                variant={TextVariant.ERROR}
                text={validateErrorTranslates[error]}
              />
            ))
          : null}

        <ProfileCard
          readonly={readonly}
          data={data}
          error={error}
          isLoading={isLoading}
          onChangeFirstname={handleChangeFirstname}
          onChangeLastname={handleChangeLastname}
          onChangeAge={handleChangeAge}
          onChangeCity={handleChangeCity}
          onChangeAvatar={handleChangeAvatar}
          onChangeUsername={handleChangeUsername}
          onChangeCountry={handleChangeCountry}
          onChangeCurrency={handleChangeCurrency}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
