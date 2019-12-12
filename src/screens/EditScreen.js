import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {
  const id = navigation.getParam ('id');
  const {state, editBlogPost} = useContext (Context);

  const BlogPost = state.find (blog => blog.id === id);

  return (
    <BlogPostForm
      initialValues={{title: BlogPost.title, content: BlogPost.content}}
      onSubmit={(Title, Content, id) => {
        editBlogPost (
          Title,
          Content,
          BlogPost.id,
          // navigation.navigate ('Show')
          () => navigation.pop () // pop() function  returns back screen
        );
      }}
    />
  );
};

const styles = StyleSheet.create ({});

export default EditScreen;
