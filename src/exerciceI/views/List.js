import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ItemList from '../components/itemList/ItemList.js';

import data from '../data/data.js';

const List = ({navigation}) => {
  return(
    <SafeAreaView>
      <ScrollView>
        {
          data.length && data.map( (item) => (
            <ItemList
              key={item.id}
              picture={item.picture}
              author={item.author}
              about={item.about}
              tags={item.tags}
              comments={item.comments}
              goTo={() => navigation.navigate('CommentsView', { item: item }) }
            />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default List;
