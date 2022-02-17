import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: 'row',
    borderBottomWidth: 1
  },

  image__container: {
    width: '40%',
    height: '100%'
  },

  image:{
    maxWidth: '100%',
    height: '100%'
  },

  detail__container: {
    width: '60%',
    height: '100%',
    paddingLeft: 10
  },
  title__text:{
    color: '#000',
    fontSize: 18,
    fontWeight: '600'
  },

  author__text:{
    marginTop: 1,
    color: 'silver',
    fontSize: 15,
    fontWeight: '500'
  },

  tags__container: {
    marginTop: 10,
    width:'100%',
    height: 40
  },

  tags__scroll: {
    width:'100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  comment__button: {
    position: 'absolute',
    bottom: 0,
    left: 15,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },

  comment__text: {
    marginLeft: 10,
    color: 'silver',
    fontSize: 14,
    fontWeight: '600' 
  },

});

export default styles;
