import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPhone,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Data = ({ list }) => {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center">
          <span className="star">
            <FontAwesomeIcon icon={faStar} color="orange" />
          </span>

          <div className="d-flex flex-column">
            <span>{list.fullName}</span>
            <div className="d-flex flex-row align-items-center time-text">
              <small className="d-flex justify-content-between">
                <FontAwesomeIcon icon={faPhone} />
                {list.phone}
              </small>
              <small>
                <FontAwesomeIcon icon={faEnvelope} />
                {list.email}
              </small>
            </div>
          </div>
        </div>

        <span className="content-text-1">
          <FontAwesomeIcon icon={faFile} />
          {list.policyNo}
        </span>
      </div>
    </div>
  );
};

export default Data;
