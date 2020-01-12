import * as React from 'react';
import {Input} from 'react-native-elements';
import Colors from '../../../styles/colors';

type Props = {
  placeholder?: string,
  label?: string,
  labelStyle?: object,
  children?: React.Node,
  inputStyle?: object,
};

const CustomInput = (props: Props) => {
  const {
    placeholder,
    label,
    labelStyle,
    children,
    inputStyle,
    ...others
  } = props;
  const labelStyles = {...defaultLabelStyle, ...labelStyle};
  const inputStyles = {...defaultInputStyle, ...inputStyle};

  return (
    <Input
      placeholder={placeholder}
      label={label}
      labelStyle={labelStyles}
      inputStyle={inputStyles}
      {...others}>
      {children}
    </Input>
  );
};

CustomInput.defaultProps = {
  placeholder: '',
  disabled: false,
  label: '',
};

const defaultLabelStyle = {
  fontWeight: '300',
  color: Colors.default,
};

const defaultInputStyle = {
  color: Colors.interactive,
};

export default CustomInput;
