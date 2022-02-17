import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Message } from 'iconoir-react-native';

import styles from './itemList.style.js';
import Tag from '../tag/Tag.js';

const itemList = (props) => {

  const { picture, author, about, tags, comments, goTo } = props;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.image__container}>
          <Image
            style={styles.image}
            source={{
              uri: picture,
            }}
          />
        </View>
        <View style={styles.detail__container}>
          <Text style={styles.title__text} numberOfLines={2}>{about}</Text>
          <Text style={styles.author__text}>{author}</Text>
          <View style={styles.tags__container}>
            <ScrollView style={styles.tags__scroll}>
            {
              tags.map( (item, index) => (
                <Tag key={index} title={item} />
              ))
            }
            </ScrollView>
          </View>
          <TouchableOpacity 
            style={styles.comment__button}
            onPress={goTo}
            >
            <Message color="silver" height={24} width={24} />
            <Text style={styles.comment__text}>{comments.length} Comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default itemList;
