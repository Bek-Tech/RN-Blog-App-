import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ShowScreen = ({navigation}) => {
  const {state} = useContext (Context);
  //  find   - method loops through array of obj  and find  what you need
  const BlogPost = state.find (blog => blog.id === navigation.getParam ('id'));
  return (
    <View>
      <Text>{BlogPost.title}</Text>
      <Text>{BlogPost.content}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate ('Edit', {id: navigation.getParam ('id')})}
      >
        <Feather name="edit" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create ({});

export default ShowScreen;
