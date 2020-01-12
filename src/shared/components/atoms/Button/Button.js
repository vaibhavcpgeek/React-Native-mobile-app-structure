import * as React from 'react';
import {Button} from 'react-native-elements';
import Colors from '../../../styles/colors';

type Props = {
  title?: string,
  buttonStyle?: object,
  type: string,
  children?: React.Node,
  disabled?: boolean,
};

const CustomButton = (props: Props) => {
  const {title, children, buttonStyle, type, disabled, ...others} = props;

  const overrideStyles =
    type === 'solid' ? {...solidButtonStyles} : {...outlineButtonStyles};
  const buttonStyles = {...defaultStyles, ...overrideStyles, ...buttonStyle};
  return (
    <Button
      title={title}
      titleStyle={type === 'outline' ? {color: Colors.interactive} : ''}
      disabled={disabled}
      type={type}
      buttonStyle={buttonStyles}
      {...others}>
      {children}
    </Button>
  );
};

const defaultStyles = {
  borderRadius: 32,
  paddingVertical: 21,
};

const solidButtonStyles = {
  backgroundColor: Colors.interactive,
};

const outlineButtonStyles = {
  borderColor: Colors.interactive,
  backgroundColor: Colors.white,
};

CustomButton.defaultProps = {
  type: 'solid',
  disabled: false,
  title: '',
};

export default CustomButton;
