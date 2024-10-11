import React from "react";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoTopButton = ({ scrollToHeader, showGoTop }) => {
  return (
    <div className={showGoTop === false ? "button-scroll" : "hidden"}>
      <button
        onClick={scrollToHeader}
        type="button"
        className="bn632-hover bn221"
      >
        <span>
          <FontAwesomeIcon className="header-icon" icon={faCircleUp} />
        </span>
      </button>
    </div>
  );
};

export default GoTopButton;
