import { useState } from "react";
import User from "./User";



function Show() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [regId, setRegId] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Reg ID"
        value={regId}
        onChange={(e) => setRegId(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setShow(true)}>
        Show
      </button>

      <hr />

      {show && (
        <User
          name={name}
          regId={regId}
          email={email}
          city={city}
        />
      )}
    </>
  );
}

export default Show;