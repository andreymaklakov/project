import { FC, Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync as LoginForm } from "../LoginForm/LoginForm.async";

import styles from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  className,
  onClose,
  ...props
}) => {
  const cls = classNames(styles.LoginModal, {}, [className]);

  return (
    <Modal onClose={onClose} lazy {...props} className={cls}>
      <Suspense fallback={<Loader />}>
        <LoginForm onClose={onClose} />
      </Suspense>
    </Modal>
  );
};
