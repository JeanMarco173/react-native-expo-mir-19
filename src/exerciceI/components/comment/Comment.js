import { View, Text } from 'react-native';

import styles from './comment.style.js';

const Comment = (props) => {

  const { comment } = props;

  return(
    <View style={styles.container}>
      <Text style={styles.comment__text}>{comment}</Text>
    </View>
  )
}

export default Comment;
