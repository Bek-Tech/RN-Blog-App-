import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost, getBlogPosts} = useContext (Context);
  // if you run getBlogPost  without useEffect it causes  infinite rendering   (158)
  useEffect (() => {
    getBlogPosts ();
    // this solves problem with refetching    160
    const Listener = navigation.addListener ('didFocus', () => {
      getBlogPosts ();
    });
    return () => {
      Listener.remove ();
    };
  }, []);

  return (
    <View>

      <FlatList
        data={state}
        keyExtractor={state => state.title}
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => navigation.navigate ('Show', {id: item.id})}
              >
                <View>
                  <Text style={styles.title}>{item.title}-{item.id}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost (item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>

            </View>
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
    borderBottomWidth: 1,
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
