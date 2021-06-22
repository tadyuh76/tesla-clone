import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

import CustomButton from '../CustomButton';

export default function CarItem(props) {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} reizeMode="cover" />

      <View style={styles.textBox}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.tagline}>
          {tagline} {''}
          <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.btnBox}>
        <CustomButton content="Custom Order" type="primary" />
        <CustomButton content="Existing Inventory" type="secondary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('screen').height
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  textBox: {
    top: '30%',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  tagline: {
    color: 'gray',
    fontSize: 16,
  },
  taglineCTA: {
    textDecorationLine: 'underline',
  },
  btnBox: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    paddingHorizontal: 10
 }
});
