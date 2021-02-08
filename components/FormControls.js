import { Input } from "semantic-ui-react";

export const FromControls = ({ children }) => {
  // error
  return <div>{children}</div>;
};

export const InputComponent = (props) => {
  const { meta, child, ...restProps } = props;
  return (
    <FromControls {...props}>
      <Input {...restProps} />
    </FromControls>
  );
};
