import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {checkBoxIcon, deleteIcon} from '../common/Icons';

const ShoppingItem = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* Checked icon */}

      <Pressable>{checkBoxIcon}</Pressable>

      {/* Shopping text */}
      <Text style={styles.title}>Bread</Text>
      {/* delete button */}
      <Pressable>{deleteIcon}</Pressable>
    </View>
  );
};

export default ShoppingItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
  },
});
