import * as React from 'react';
import {Text} from 'react-native-elements';

type Props = {
  type: string,
  customStyles?: object,
};

const Heading = (props: Props) => {
  const {type, customStyles, children, ...others} = props;
  let heading;
  switch (type) {
    case 'h1':
      heading = (
        <Text h1 h1Style={{...defaultH1Styles, ...customStyles}} {...others}>
          {children}
        </Text>
      );
      break;
    case 'h2':
      heading = (
        <Text h2 h2Style={{...defaultH2Styles, ...customStyles}} {...others}>
          {children}
        </Text>
      );
      break;
    case 'h3':
      heading = (
        <Text h3 h3Style={{...defaultH3Styles, ...customStyles}} {...others}>
          {children}
        </Text>
      );
      break;
    default:
      heading = null;
  }

  return heading;
};

const defaultH1Styles = {
  fontSize: 30,
  lineHeight: 36,
};

const defaultH2Styles = {
  fontSize: 22,
  lineHeight: 26,
};

const defaultH3Styles = {
  fontSize: 16,
  lineHeight: 18,
};

Heading.defaultProps = {
  type: 'h1',
};

export default Heading;
