import { View, Text } from 'react-native';

import styles from './tag.style.js';

const TagComponent = (props) => {

  const { title } = props;

  return (
    <View style={styles.tag__container}>
      <Text style={styles.tag__text}>{title.toUpperCase()}</Text>
    </View>
  );
}

export default TagComponent;
