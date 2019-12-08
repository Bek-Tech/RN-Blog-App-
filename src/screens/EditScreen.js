import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {
  const {state} = useContext (Context);
  const BlogPost = state.find (blog => blog.id === navigation.getParam ('id'));
  const [Title, setTitle] = useState (BlogPost.title);
  const [Content, setContent] = useState (BlogPost.content);

  return <BlogPostForm />;
};

const styles = StyleSheet.create ({});

export default EditScreen;
