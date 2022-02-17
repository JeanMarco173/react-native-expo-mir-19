import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },

  header__container: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },

  header__text: {
    marginLeft: 50,
    fontSize: 24,
    fontWeight: '600',
  },

  body__container: {
    width: '100%',
    height: '100%',
    marginTop: 10
  },

  text__container: {
    paddingHorizontal: 20,
  },

  author__text: {
    fontSize: 16,
    textAlign: 'justify'
  },

  comments__container: {
    width: '100%',
    height: '70%',
    paddingHorizontal: 20
  },

  comments__title__text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },

  comments__scroll: {
    height: '100%',
    paddingBottom: 10,
    paddingHorizontal: 5
  }

})

export default styles;
