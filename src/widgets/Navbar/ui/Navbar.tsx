import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const cls = classNames(styles.Navbar, {}, [className]);

  const { t } = useTranslation();

  const toggleOpenModal = useCallback(() => {
    setIsOpenAuthModal((prevState) => !prevState);
  }, []);

  return (
    <div className={cls}>
      <Button
        variant={ButtonVariant.CLEAR_INVERTED}
        className={styles.links}
        onClick={toggleOpenModal}
      >
        {t("Log In")}
      </Button>

      <LoginModal isOpen={isOpenAuthModal} onClose={toggleOpenModal} />
    </div>
  );
};
