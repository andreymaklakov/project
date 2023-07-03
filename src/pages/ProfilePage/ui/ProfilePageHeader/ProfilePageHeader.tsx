import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entitiess/Profile";

import styles from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo(function ProfilePageHeader({
  className,
}: ProfilePageHeaderProps) {
  const cls = classNames(styles.ProfilePageHeader, {}, [className]);

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const { t } = useTranslation("profile");

  const handleAllowChange = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelChanges = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSaveChanges = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={cls}>
      <Text title={t("Profile")} />

      {readonly ? (
        <Button
          onClick={handleAllowChange}
          variant={ButtonVariant.OUTLINE}
          className={styles.editBtn}
        >
          {t("Change")}
        </Button>
      ) : (
        <div className={styles.formatBtns}>
          <Button
            onClick={handleCancelChanges}
            variant={ButtonVariant.OUTLINE_RED}
          >
            {t("Cancel")}
          </Button>

          <Button onClick={handleSaveChanges} variant={ButtonVariant.OUTLINE}>
            {t("Save")}
          </Button>
        </div>
      )}
    </div>
  );
});
