import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData, userActions } from "entitiess/User";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);

  const dispatch = useDispatch();

  const cls = classNames(styles.Navbar, {}, [className]);

  const { t } = useTranslation();

  const toggleOpenModal = useCallback(() => {
    setIsOpenAuthModal((prevState) => !prevState);
  }, []);

  const handleLogOut = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (userAuthData) {
    return (
      <div className={cls}>
        <Button
          variant={ButtonVariant.CLEAR_INVERTED}
          className={styles.links}
          onClick={handleLogOut}
        >
          {t("Log Out")}
        </Button>
      </div>
    );
  }

  return (
    <div className={cls}>
      <Button
        variant={ButtonVariant.CLEAR_INVERTED}
        className={styles.links}
        onClick={toggleOpenModal}
      >
        {t("Log In")}
      </Button>

      {isOpenAuthModal ? (
        <LoginModal isOpen={isOpenAuthModal} onClose={toggleOpenModal} />
      ) : null}
    </div>
  );
};
