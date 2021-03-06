import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [Title, setTitle] = useState (initialValues.title);
  const [Content, setContent] = useState (initialValues.content);
  return (
    <View>
      <Text style={styles.text}>Title:</Text>
      <TextInput
        style={styles.Input}
        value={Title}
        onChangeText={text => setTitle (text)}
      />
      <Text style={styles.text}>Content:</Text>
      <TextInput
        style={styles.Input}
        value={Content}
        onChangeText={text => setContent (text)}
      />
      <Button
        onPress={() => onSubmit (Title, Content)}
        title="Save Blog Post"
      />
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create ({
  Input: {
    fontSize: 18,
    borderColor: 'grey',
    borderWidth: 2,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default BlogPostForm;
