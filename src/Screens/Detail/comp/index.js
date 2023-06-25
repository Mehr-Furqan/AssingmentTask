import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../Constants/color';
import {cWidth} from '../../../Constants/helper';

const Property = ({label, value}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  value: {
    fontSize: 20,
    fontWeight: '300',
    color: colors.Black,
    paddingLeft: cWidth(0.05),
    paddingTop: '2%',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue,
    paddingLeft: cWidth(0.05),
    paddingTop: '2%',
  },
});

export default Property;
