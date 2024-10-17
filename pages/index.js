import WelcomePage from "../src/WelcomePage.js";
import LoginPage from "../src/LoginPage.js";
import { CookiesProvider, useCookies } from "react-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [showMeme, setShowMeme] = useState(false);
  const [visitTime, setVisitTime] = useState(0);
  const [showJwtLogin, setShowJwtLogin] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (token) {
      setShowJwtLogin(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedVisitTime = sessionStorage.getItem("visit time");
      const initialVisitTime = storedVisitTime
        ? parseInt(storedVisitTime, 10)
        : 0;
      setVisitTime(initialVisitTime);
      // Increment visitTime and store it in sessionStorage
      setVisitTime((prevVisitTime) => {
        const newVisitTime = prevVisitTime + 1;
        sessionStorage.setItem("visit time", newVisitTime);
        return newVisitTime;
      });
    }
  }, []);

  function handleLogin(user) {
    setCookie("user", user, { path: "/" });
  }

  function handleLogout() {
    setCookie("user", "", { path: "/" });
  }

  const onHide = () => {
    localStorage.setItem("meme", "dismissed");
    setShowMeme(false);
  };

  useEffect(() => {
    if (localStorage.getItem("meme") !== "dismissed") {
      setShowMeme(true);
    }
  }, []);

  const onShow = () => {
    localStorage.removeItem("meme");
    setShowMeme(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="session-container">
          You've visited this page {visitTime} times 🎉
        </div>
        <CookiesProvider>
          <div>
            {cookies.user ? (
              <WelcomePage user={cookies.user} handleLogout={handleLogout} />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )}
          </div>
        </CookiesProvider>
        {showMeme ? (
          <div className="modal">
            <div className="image-container">
              <img src="/assets/img.png" width="400px" alt="meme" />
              <span className="close-icon" onClick={onHide}>
                x
              </span>
            </div>
          </div>
        ) : (
          <div className="pikachu" onClick={onShow}>
            ⭐Bring back the pikachu please⭐
          </div>
        )}
        <div className="jwt-container">
          {showJwtLogin && (
            <Link href={"/jwt-home"} className="no-link-style">
              JWT Login
            </Link>
          )}
          <br />
          <Link href={"/jwt-safehouse"} className="no-link-style">
            JWT Safe house
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
