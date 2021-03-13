import { connect } from "react-redux";
import { loginUser } from "./../redux/user-reducer";
import LoginForm from "./../components/Login/Login";
import Profile from "./../components/Profile";

function Login(props) {
  if (props.isAuth) {
    return <Profile data={props} />;
  }

  const loginForm = (event) => {
    event.preventDefault();
    props.loginUser(event.target.user.value, event.target.pass.value);
  };

  return <LoginForm loginForm={loginForm} />;
}

const mapStateToProps = (state) => {
  return state.user;
};

export default connect(mapStateToProps, { loginUser })(Login);
