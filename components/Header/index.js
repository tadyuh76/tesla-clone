import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/images/menu.png')}
        style={styles.menu}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    top: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 30,
  },
  menu: {
    width: 25,
    height: 25,
  },
});
