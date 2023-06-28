import "./App.css";
import { useEffect, useState } from "react";

import { IUser } from "./api/user.ts";
import { Footer } from "./components/Footer/Footer.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";
import {
  Notification,
  NotificationType,
} from "./components/UI/Notification/Notification.tsx";

// Plan:

// 0 add prop text to Notifications, add close, add icon
// 1 add notification if user fetch fails
// 2 add preloader
// 3 Add avatar into API
// 4 render avatar from API

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    // getUser()
    //   .then((user) => setUser(user))
    //   .catch((error) => console.log(error));

    setUser(null);
  }, []);

  return (
    <div className="app">
      {!user && <Notification type={NotificationType.ERROR} />}
      {user && (
        <>
          <Sidebar user={user} />
          <div className="container">
            <div className="topBar"></div>
            <div className="content"></div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
