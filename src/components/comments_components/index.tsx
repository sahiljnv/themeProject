import {View, Text, FlatList, TextInput} from 'react-native';
import React from 'react';
import {style} from './style';
import {CommentProps, Comments} from '../../assets/comment_data';
import CommentContainer from '../comment_container';
import AddIcon from 'react-native-vector-icons/Ionicons';

const CommentsComponent = () => {
  const [comment, setComment] = React.useState<string>('');
  const [data, setData] = React.useState<CommentProps[]>(Comments);
  const [replyComment, setReplyComment] = React.useState<boolean>(false);
  const [id, setId] = React.useState<number>(0);

  const ref = React.useRef<TextInput>(null);
  const refList = React.useRef<FlatList>(null);

  const addReply = React.useCallback((index: number) => {
    ref.current?.focus();
    refList.current?.scrollToIndex({
      index: index - 1,
      animated: true,
    });
    setId(index);
    setReplyComment(true);
    console.log('id: :::::::::::::::::::::::: ', index);
  }, []);
  const addComment = (id?: number) => {
    ref.current?.clear();
    ref.current?.blur();
    if (id) {
      console.log('id  h yhaa', data[id]);
      const newReplyComment = {
        comment: comment,
        id: 12 + Math.random() * 12,
        image: require('../../assets/sahilImage.jpeg'),
        likeCount: 0,
        timeLine: '12h',
        userName: 'Sahil Rawat',
        isVerified: false,
      };

      let onCommented = data[id - 1];
      onCommented.reply?.push(newReplyComment);
      data[id - 1] = onCommented;
      setData(data);
      // setData(prevData => {
      //   return prevData.map(element => {
      //     if (element.id === id) {
      //       console.log('element :::::::::::::;;> ', element);

      //       return {
      //         ...element,
      //         reply: [
      //           ...element.reply,
      //           {
      //             comment: comment,
      //             id: 12 + Math.random() * 12,
      //             image: require('../../assets/sahilImage.jpeg'),
      //             likeCount: 0,
      //             timeLine: '12h',
      //             userName: 'Sahil Rawat',
      //             isVerified: false,
      //           },
      //         ],
      //       };
      //     } else {
      //       return element;
      //     }
      //   });
      // });
    } else {
      refList.current?.scrollToIndex({
        index: data.length - 1,
        animated: true,
      });
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
    setId(0);
  };
  return (
    <View style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Text style={style.header}>Comments</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        ref={refList}
        initialScrollIndex={id}
        style={style.listStyle}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <CommentContainer {...item} addReply={addReply} index={index + 1} />
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
