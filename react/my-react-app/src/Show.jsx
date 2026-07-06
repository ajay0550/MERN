import { useState } from "react";
import User from "./User";
import "./Show.css";

function Show() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [regId, setRegId] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="container">
      <h1>User Details Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Registration ID"
        value={regId}
        onChange={(e) => setRegId(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => setShow(true)}>
        Show Details
      </button>

      {show && (
        <div className="user-card">
          <User
            name={name}
            regId={regId}
            email={email}
            city={city}
          />
        </div>
      )}
    </div>
  );
}

export default Show;