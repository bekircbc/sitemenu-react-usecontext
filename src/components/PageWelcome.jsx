import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
  const { siteStatus, toggleStatus } = useContext(AppContext);

  return (
    <div>
      <h2>This is the welcome page.</h2>
      <p>
        The current status is: <span className="highlight">{siteStatus}</span>
      </p>
      <p>
        <button onClick={toggleStatus}>Toggle Status</button>
      </p>
    </div>
  );
};
