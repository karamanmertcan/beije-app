import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Logo from '../../assets/icons/logo.png';
import Cart from '../../assets/icons/cart.png';
import Burger from '../../assets/icons/burger.png';
import User from '../../assets/icons/user.png';

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Image source={Cart} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={User} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Burger} style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 42,
    justifyContent: 'space-between',
  },
  logo: {
    width: 54,
    height: 27,
    resizeMode: 'contain',
  },
  rightContainer: {
    flexDirection: 'row',
  },
  icons: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 16,
  },
});

export default Header;
