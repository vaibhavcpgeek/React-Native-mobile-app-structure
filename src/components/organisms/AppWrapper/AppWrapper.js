import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import CustomButton from '../../../shared/components/atoms/Button/';
import CustomInput from '../../../shared/components/atoms/Input/';
import Heading from '../../../shared/components/atoms/Heading/';
import Card from '../../../shared/components/molecules/Card/';

import PropTypes from 'prop-types';

const AppWrapper = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView style={{fontFamily: 'SenticoSansDT'}}>
          <Text style={{textAlign: 'center'}}>App works</Text>
          <View style={{marginBottom: 40}}></View>
          <CustomInput
            label="Email Address"
            labelStyle={{color: '#000', fontWeight: '400'}}></CustomInput>
          <View style={{marginBottom: 40}}></View>
          <CustomButton title="Sign-In" type="solid" />
          <View style={{marginBottom: 40}}></View>
          <CustomButton title="Sign-In" type="outline" raised={true} />
          <View style={{marginBottom: 40}}></View>
          <Heading type="h1">Heading 1</Heading>
          <View style={{marginBottom: 40}}></View>
          <Heading type="h2">Heading 1</Heading>
          <View style={{marginBottom: 40}}></View>
          <Heading type="h3">Heading 1</Heading>
          <View style={{marginBottom: 40}}></View>
          <Card type="product">
            <View>
              <Text>Card Content</Text>
              <Text>Card Content</Text>
              <Text>Card Content</Text>
              <Text>Card Content</Text>
              <Text>Card Content</Text>
            </View>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

AppWrapper.propTypes = {};

export default AppWrapper;
