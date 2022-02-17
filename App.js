import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { Message } from 'iconoir-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListView from './src/exerciceI/views/List.js';
import CommentsView from './src/exerciceI/views/Comments.js'
import data from './src/exerciceI/data/data.js';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {
        data.map( (item) => (
          <Text key={item.id}>{item.author}</Text>
        ))
      }
    </View>
  );
}


function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListView" component={ListView} options={{ headerShown: false }}/>
        <Stack.Screen name="CommentsView" component={CommentsView} options={{ headerShown: false }} initialParams={{ item: {} }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
