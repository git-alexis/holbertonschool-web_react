import Notifications from './Notifications.jsx';
import { getCurrentYear, getFooterCopy } from './utils.js';
import './App.css';
import holbertonLogo from './assets/holberton-logo.jpg';

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" className="App-logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>Copyright {getCurrentYear()} - {getFooterCopy(false)}</p>
      </div>
    </>
  );
}

export default App
