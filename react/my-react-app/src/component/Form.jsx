function Form({
  name,
  setName,
  regId,
  setRegId,
  email,
  setEmail,
  city,
  setCity,
  setShow,
}) {
  return (
    <>
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
    </>
  );
}

export default Form;