import * as classNames from "classnames";

import styles from "./Notification.module.css";

export enum NotificationType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  INFO = "info",
}

interface INotificationProps {
  type: NotificationType;
}

export function Notification({ type }: INotificationProps) {
  const notificationClassNames = classNames({
    [`${styles.notification}`]: true,
    [`${styles.error}`]: type === NotificationType.ERROR,
    [`${styles.warning}`]: type === NotificationType.WARNING,
    [`${styles.success}`]: type === NotificationType.SUCCESS,
    [`${styles.info}`]: type === NotificationType.INFO,
  });

  return <div className={notificationClassNames}>I am notification</div>;
}
