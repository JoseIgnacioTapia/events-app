import { createContext, useState } from 'react';

export const NotificationContext = createContext();

const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState();

  function showNotificationHandler(notification) {
    setActiveNotification(notification);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
