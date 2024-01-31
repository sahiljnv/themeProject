import {View, Text, FlatList, TextInput} from 'react-native';
import React from 'react';
import {style} from './style';
import {CommentProps, Comments} from '../../assets/comment_data';
import CommentContainer from '../comment_container';
import AddIcon from 'react-native-vector-icons/Ionicons';

const CommentsComponent = () => {
  const [comment, setComment] = React.useState<string>('');
  const [data, setData] = React.useState<CommentProps[]>([]);
  const [replyComment, setReplyComment] = React.useState<boolean>(false);
  const [id, setId] = React.useState<number>(0);
  React.useState(() => {
    setData(Comments);
  }, []);
  const ref = React.useRef<TextInput>(null);
  const addReply = React.useCallback((id: number) => {
    ref.current?.focus();
    setId(id);
    setReplyComment(true);
    console.log('id: :::::::::::::::::::::::: ', id);
  }, []);
  const addComment = (id?: number) => {
    ref.current?.clear();
    ref.current?.blur();
    if (id) {
      console.log('id  h yhaa');
      setData(prevData => {
        return prevData.map(element => {
          if (element.id === id) {
            console.log('element :::::::::::::;;> ', element);

            return {
              ...element,
              id: element.id + Math.random() * 11,
              reply: [
                ...element.reply,
                {
                  comment: comment,
                  id: 12 + Math.random() * 12,
                  image: require('../../assets/sahilImage.jpeg'),
                  likeCount: 0,
                  timeLine: '12h',
                  userName: 'Sahil Rawat',
                  isVerified: false,
                },
              ],
            };
          } else {
            return element;
          }
        });
      });
    } else {
      setData(pre => {
        return [
          ...pre,
          {
            comment: comment,
            id: 12 + Math.random() * 12,
            image: require('../../assets/sahilImage.jpeg'),
            likeCount: 0,
            timeLine: '12h',
            userName: 'Sahil Rawat',
            isVerified: false,
            reply: [],
          },
        ];
      });
    }
    setReplyComment(false);
  };
  return (
    <View style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Text style={style.header}>Comments</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={style.listStyle}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CommentContainer {...item} addReply={addReply} />
        )}
      />
      <View style={style.inputContainer}>
        <TextInput
          placeholder="write comment..."
          placeholderTextColor={'rgba(0,0,0,.5)'}
          style={style.inputText}
          onChangeText={setComment}
          ref={ref}
        />
        <AddIcon
          name="add"
          size={50}
          color={'black'}
          onPress={() => (replyComment ? addComment(id) : addComment())}
        />
      </View>
    </View>
  );
};

export default CommentsComponent;
