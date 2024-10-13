import './index.css';
import WelcomePage from '../src/WelcomePage.js'
import LoginPage from '../src/LoginPage.js'
import Home from '../src/Home.js';
import { CookiesProvider, useCookies } from 'react-cookie'

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
    </header>
    <Home />
    </div>
  );
}

export default App;
