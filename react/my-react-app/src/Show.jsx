import { useState } from "react";
import User from "./User";
import Form from "./component/Form";
import "./Show.css";

function Show() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [regId, setRegId] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="container">
      <h1>Student Details Form</h1>

      <Form
        name={name}
        setName={setName}
        regId={regId}
        setRegId={setRegId}
        email={email}
        setEmail={setEmail}
        city={city}
        setCity={setCity}
        setShow={setShow}
      />

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