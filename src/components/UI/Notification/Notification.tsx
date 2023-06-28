import * as classNames from "classnames";

import styles from "./Notification.module.css";

export enum NotificationType {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

interface INotificationProps {
  type: NotificationType;
}

export function Notification({ type }: INotificationProps) {
  const notificationClassNames = classNames({
    [`${styles.notification}`]: true,
    [`${styles.error}`]: type === NotificationType.ERROR,
  });

  return <div className={notificationClassNames}>I am notification</div>;
}
