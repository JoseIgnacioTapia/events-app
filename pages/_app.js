import { useContext } from 'react';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import '../styles/globals.css';
import Notification from '../components/ui/notification';
import NotificationContextProvider from '../context/NotificationContext';
import { NotificationContext } from '../context/NotificationContext';

function MyApp({ Component, pageProps }) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="NextJS Events" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        {activeNotification && (
          <Notification
            title={activeNotification.title}
            message={activeNotification.message}
            status={activeNotification.status}
          />
        )}
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
