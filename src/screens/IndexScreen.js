import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = () => {
  const {state, addBlogPost} = useContext (Context);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button onPress={addBlogPost} title="ADD" />
      <FlatList
        data={state}
        keyExtractor={state => state.title}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.title}</Text>

            </View>
          );
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create ({});

export default IndexScreen;
