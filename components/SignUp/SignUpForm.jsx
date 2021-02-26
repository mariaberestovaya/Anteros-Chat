import { Form } from "semantic-ui-react";

const SignUpForm = ({ setEvent }) => {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input fluid label="First name" placeholder="First name" />
        <Form.Input fluid label="Last name" placeholder="Last name" />
        <Form.Select fluid label="Gender" placeholder="Gender" />
      </Form.Group>
      <Form.Group inline>
        <label>Size</label>
        <Form.Radio label="Small" value="sm" />
        <Form.Radio label="Medium" value="md" />
        <Form.Radio label="Large" value="lg" />
      </Form.Group>
      <Form.TextArea label="About" placeholder="Tell us more about you..." />
      <Form.Checkbox label="I agree to the Terms and Conditions" />
      <Form.Button onClick={() => setEvent(false)}>Submit</Form.Button>
    </Form>
  );
};

export default SignUpForm;
