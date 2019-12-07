import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
  const {state} = useContext (Context);
  //  find   - method loops through array of obj  and find  what you need
  const BlogPost = state.find (blog => blog.id === navigation.getParam ('id'));
  return (
    <View>
      <Text>{BlogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({});

export default ShowScreen;
