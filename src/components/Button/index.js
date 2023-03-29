import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export function Button({children, onPress, ...rest}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.7}
      {...rest}>
      <Text style={styles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
}
