import { Fragment } from "react";
import styles from "./Login.module.css";

export default function LoginForm({ loginForm }) {
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
