import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext (Context);

  return (
    <BlogPostForm
      onSubmit={(Title, Content) => {
        //   while working with local storage  can use this
        // addBlogPost (Title, Content);
        // navigation.navigate ('Index');

        // while working with Api use this and give 3th argument as callback  (in my  case  look to the  addBlogPost  function in BlogContext )
        // it makes navigation not immediately  but after  we get response from Api //142
        addBlogPost (Title, Content, () => navigation.navigate ('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create ({
  Input: {
    fontSize: 18,
    borderColor: 'grey',
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default CreateScreen;
