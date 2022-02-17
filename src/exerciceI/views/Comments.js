import React from 'react';
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'iconoir-react-native';

import Comment from '../components/comment/Comment.js';
import styles from '../styles/comments.style.js'

const Comments = ({route, navigation}) => {

  const { item } = route.params;
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header__container}>
      <TouchableOpacity onPress={ () => navigation.goBack()}>
        <ArrowLeft color="black" height={24} width={24}  />
      </TouchableOpacity>
        <Text style={styles.header__text}>
          By {item.author}
        </Text>
      </View>
      <View style={styles.body__container}>
        <View style={styles.text__container}>
          <Text style={styles.author__text}>
            {item.about}
          </Text>
        </View>
        <View style={styles.comments__container}>
          <Text style={styles.comments__title__text}>Comments</Text>
          <ScrollView style={styles.comments__scroll}>
            {
              item.comments.length && item.comments.map( (element) => (
                <Comment
                  key={element.id}
                  comment={element.comment}
                />
              ))
            }
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Comments;
