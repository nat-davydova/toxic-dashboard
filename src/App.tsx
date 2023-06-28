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

// 1.2 add notification if no user id

// 1.3 add preloader

// 2. Add avatar into API
// 3. render avatar from API

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
