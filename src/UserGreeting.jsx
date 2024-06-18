function UserGreeting(props) {
  return props.isLoggedIn
    ? "Welcome back, " + props.username
    : "Please sign up.";
}
export default UserGreeting;
