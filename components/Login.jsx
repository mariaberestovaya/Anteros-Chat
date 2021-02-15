import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getUserLogin } from "../redux/user_reducer";
import { Grid, Form, Button } from "semantic-ui-react";

import { InputComponent } from "./common/FormControls";

function LoginForm({ handleSubmit }) {
  return (
    <Grid.Column>
      <Form onSubmit={handleSubmit}>
        <Field
          name="user"
          type="text"
          component={InputComponent}
          icon="user"
          iconPosition="left"
          label="Username"
          placeholder="Username"
        />
        <Field
          name="pass"
          type="text"
          component={InputComponent}
          icon="lock"
          iconPosition="left"
          label="Password"
          type="password"
        />
        <Button type="submit" content="Login" primary />
      </Form>
    </Grid.Column>
  );
}

const LoginReduxForm = reduxForm({
  form: "connection",
})(LoginForm);

const userLogin = (props) => {
  // const onSubmit = async (value) => {
  //   console.log(value);
  // };
  const onSubmit = async (value) => {
    props.login(value);
    // const res = await fetch(`http://localhost:3000/api/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(value),
    // });

    // const data = res.json();
    console.log(value);
  };

  return <LoginReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (name, pass) => dispatch(getUserLogin(name, pass)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(userLogin);
