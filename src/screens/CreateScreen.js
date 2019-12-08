import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext (Context);
  const [Title, setTitle] = useState ('');
  const [Content, setContent] = useState ('');

  return (
    <View>
      <Text style={styles.text}>Title:</Text>
      <TextInput style={styles.Input} onChangeText={text => setTitle (text)} />
      <Text style={styles.text}>Content:</Text>
      <TextInput
        style={styles.Input}
        onChangeText={text => setContent (text)}
      />
      <Button
        onPress={() => {
          //   while working with local storage  can use this
          // addBlogPost (Title, Content);
          // navigation.navigate ('Index');

          // while working with Api use this and give 3th argument as callback  (in my  case  look to the  addBlogPost  function in BlogContext )
          // it makes navigation not immediately  but after  we get response from Api //142
          addBlogPost (Title, Content, () => navigation.navigate ('Index'));
        }}
        title="Add Blog Post"
      />
    </View>
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
