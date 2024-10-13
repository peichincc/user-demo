import WelcomePage from '../src/WelcomePage.js'
import LoginPage from '../src/LoginPage.js'
import { CookiesProvider, useCookies } from 'react-cookie'
import Link from 'next/link';

function App() {
  const [cookies, setCookie] = useCookies(['user'])

  function handleLogin(user) {
    setCookie('user', user, { path: '/' })
  }

  function handleLogout() {
    setCookie('user', '', { path: '/' })
  }

  return (
    <div className="App">
      <header className="App-header">
    <CookiesProvider>
      <div>
        {cookies.user ? <WelcomePage user={cookies.user} handleLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
      </div>
    </CookiesProvider>
    <ol>
        <li>
          <Link href={'/jwt-home'} className="no-link-style">JWT Home</Link>
        </li>
        <li>
          <Link href={'/jwt-safehouse'} className="no-link-style">JWT Safe house</Link>
        </li>
      </ol>
    </header>
    </div>
  );
}

export default App;
