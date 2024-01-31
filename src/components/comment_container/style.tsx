import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  mainContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  userName: {
    fontWeight: 'bold',
    color: 'black',
  },
  comment: {
    color: 'black',
  },
  imgComponent: {
    width: 60,
  },
  commentContainer: {
    width: '70%',
  },
  likeAndTimeContainer: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: 10,
  },
  iconContainer: {
    width: '10%',
    alignItems: 'flex-end',
    paddingTop: 5,
  },
  text: {
    color: 'black',
    opacity: 0.5,
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    width: '100%',
  },

  inputText: {
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 50,
    paddingLeft: 10,
    // flexGrow: 1,
    color: 'black',
    width: '85%',
    fontSize: 15,
  },
});
