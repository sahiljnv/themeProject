import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  headerContainer: {
    backgroundColor: '#fafafa',
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
  },
  listStyle: {
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
});
