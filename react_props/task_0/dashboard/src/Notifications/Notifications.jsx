import closeIcon from "../assets/close-button.png";
import './Notifications.css';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="notification-items">
      <p>Here is the list of notifications</p>

      <button data-testid="boutonNotification"
        style={{
          top: 30,
          right: 14,
          position: "absolute",
          background: "transparent",
          border: "none",
          cursor: "pointer"
        }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="close icon" style={{ width: "1rem", height: "1rem" }} />
      </button>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
