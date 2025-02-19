import React from "react";
import { useRecoilValue } from "recoil";
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./Atoms";

function Notification() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotifications = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      <button>My Network {networkCount}</button>
      <button>Jobs {jobsCount}</button>
      <button>Message {messageCount}</button>
      <button>Notification {notificationCount}</button>
      <button>Me {totalNotifications}</button>
    </div>
  );
}

export default Notification;
