function User(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Reg ID: {props.regId}</p>
      <p>Email: {props.email}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

export default User;