import React from 'react';
import {
  View,
  Image,
  Text,
} from 'native-base';
import style from './style';

export default ({ name, image, styles }) => (
  <View style={[style.avatar, styles]}>
    {
      image
        ? <Image source={image} style={style.image} resizeMode="cover" />
        : <Text style={style.textAvatar}>{name.charAt(0).toUpperCase()}</Text>
    }
  </View>
);
