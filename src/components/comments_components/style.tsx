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
  centeredView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginEnd: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    margin: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
