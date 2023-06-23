import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

import styles from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, ...props }) => {
  const cls = classNames(styles.LoginModal, {}, [className]);

  return (
    <Modal lazy {...props} className={cls}>
      <LoginForm />
    </Modal>
  );
};
