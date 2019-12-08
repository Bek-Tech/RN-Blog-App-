import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const IndexScreen = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost} = useContext (Context);
  return (
    <View>

      <FlatList
        data={state}
        keyExtractor={state => state.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate ('Show', {id: item.id})}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}-{item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost (item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />

    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate ('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create ({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 18,
  },
});

export default IndexScreen;
