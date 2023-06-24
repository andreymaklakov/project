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

export const LoginModal: FC<LoginModalProps> = ({
  className,
  onClose,
  ...props
}) => {
  const cls = classNames(styles.LoginModal, {}, [className]);

  return (
    <Modal onClose={onClose} lazy {...props} className={cls}>
      <LoginForm onClose={onClose} />
    </Modal>
  );
};
