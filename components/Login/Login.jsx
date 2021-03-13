import { Fragment } from "react";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { loginUser } from "../../redux/user-reducer";
import Profile from "./../Profile";

function LoginForm(props) {
  if (props.isAuth) {
    return <Profile data={props} />;
  }

  const loginForm = (event) => {
    event.preventDefault();

    props.loginUser(event.target.user.value, event.target.pass.value);
  };

  return (
    <Fragment>
      <div className={styles.login}>
        <div className={styles.container}>
          <h1>Login</h1>
          <form onSubmit={loginForm} className={styles.login__form}>
            <input name="user" type="text" placeholder="login" />
            <input name="pass" type="password" placeholder="password" />

            <div className={styles.login__form__buttons}>
              <button disabled>Regiter</button>
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return state.user;
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
