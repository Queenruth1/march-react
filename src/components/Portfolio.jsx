import "./Portfolio.css";

import { FaCheckCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";


function Portfolio() {
  return (
    <div className="card">

      <img
        src="/profile.png"
        alt="QueenRuth"
        className="profile-image"
      />

      <div className="card-content">

        <h2>
          Ejikeme Ruth
          <FaCheckCircle className="verified" />
        </h2>

        <p>
          Fullstack Developer who focuses
          <br/>
          on simplicity & usability.
        </p>

        <div className="bottom">

          <div className="stats">

            <div className="stat">
              <FiUser className="icon" />
              <span>312</span>
            </div>

            <div className="stat">
              <HiOutlineDocumentDuplicate className="icon" />
              <span>48</span>
            </div>

          </div>

          <button className="follow-btn">
            Follow +
          </button>

        </div>

      </div>

    </div>
  );
}

export default Portfolio;