import { Slot } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '@/styles/global-styles';

const RootLayout = () => {
  return (
    <View style={globalStyles.background}>
      <Slot/>
      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;