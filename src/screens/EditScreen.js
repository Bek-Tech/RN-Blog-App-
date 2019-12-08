import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const EditScreen = ({navigation}) => {
  const {state} = useContext (Context);
  const BlogPost = state.find (blog => blog.id === navigation.getParam ('id'));

  return (
    <View>
      <Text>{BlogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({});

export default EditScreen;
