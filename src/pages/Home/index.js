import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';
import {styles} from './styles';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(state => [...state, newSkill]);
    setNewSkill('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo, Matheus!</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova habilidade"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />
      <Button onPress={handleAddNewSkill}>Adicionar</Button>
      <Text style={[styles.title, {marginVertical: 48}]}>
        Minhas Habilidades
      </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
