import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity
      key={skill}
      style={styles.buttonSkill}
      activeOpacity={0.7}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}
