import { Form } from "semantic-ui-react";

export const FromControls = ({ children }) => {
  // error label
  return <div className="m-2">{children}</div>;
};

export const InputComponent = (props) => {
  const { meta, child, ...restProps } = props;
  return (
    <FromControls {...props}>
      <Form.Input {...restProps} />
    </FromControls>
  );
};
