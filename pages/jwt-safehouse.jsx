import { useEffect, useState } from "react";
import Link from "next/link";

export default function SafeHouse() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [value, setValue] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    setToken(token);
    fetch("/api/safehouse", {
      headers: {
        "jwt-token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  function logout() {
    setToken("");
    localStorage.removeItem("jwt-token");
  }

  if (!token) {
    return (
      <>
        <main style={{ padding: "50px" }}>
          <p>You Shall Not Pass</p>
          <Link href={"/jwt-home"}>Go to jwt login</Link>
          <br />
          <br />
          <Link href={"/"}>or cookies 🍪</Link>
        </main>
      </>
    );
  }

  const xss_content1 = '&lt;img src/onerror=alert(&#39;Hi&#39;)&gt;';
  const xss_content2 = '&lt;img src/onerror=alert(window.JSON.stringify(localStorage.getItem("jwt-token")))&gt;';

  return (
    <>
      <main style={{ padding: "50px" }}>
        <h1>Safehouse </h1>
        <p>
          You Safehouse key is{" "}
          <strong>{userData?.safehouseKey || "Loading..."}</strong>
        </p>
        <button onClick={logout}>Logout</button>
        <br />
        <br />
        <Link href={"/"}>Back to cookies 🍪</Link>
        <br />
        <br />
        <h2>Is it safe enough? Let's try something else here 😏</h2>
        <input
          type="text"
          placeholder="XSS vulnerable Input"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <span dangerouslySetInnerHTML={{ __html: value }} />
        <br />
        <br />
        <h3>Try these badbois:</h3>
        <div dangerouslySetInnerHTML={{ __html: xss_content1 }} />
        <div dangerouslySetInnerHTML={{ __html: xss_content2 }} />
        {/* <img src/onerror=alert('Hi') /> */}
        {/* <img src/onerror=alert(window.JSON.stringify(localStorage.getItem("jwt-token"))) /> */}
      </main>
    </>
  );
}
