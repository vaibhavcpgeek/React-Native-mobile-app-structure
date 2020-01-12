import * as React from 'react';
import {Card} from 'react-native-elements';
import PropTypes from 'prop-types';
import Colors from '../../../styles/colors';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

type Props = {
  cardType: string,
  children?: React.node,
  cardStyles?: object,
};

const CustomCard = (props: Props) => {
  const {children, cardStyles, ...others} = props;
  return (
    <Card
      containerStyle={{...defaultCardStyles, ...cardStyles}}
      wrapperStyle={{borderRadius: 12}}
      {...others}>
      {children}
      <View style={angleStyles}></View>
    </Card>
  );
};

const defaultCardStyles = {
  backgroundColor: Colors.white,
  borderRadius: 12,
  paddingHorizontal: 24,
  paddingVertical: 17,
  paddingRight: 0,
  height: 150,
  position: 'relative',
  overflow: 'hidden',
};

const angleStyles = {
  backgroundColor: Colors.interactive,
  color: Colors.white,
  position: 'absolute',
  height: 127,
  width: 42,
  right: -20,
  top: 15,
  transform: [{rotate: '18.25deg'}],
};

CustomCard.defaultProps = {
  cardType: 'product',
};

export default CustomCard;
