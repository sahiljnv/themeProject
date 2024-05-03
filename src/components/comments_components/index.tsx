import {View, Text, FlatList, TextInput} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import React from 'react';
import {style} from './style';
import CommentContainer from '../comment_container';
import AddIcon from 'react-native-vector-icons/Ionicons';
import {CommentListModel, Data} from '../../data_model/comment_list_model';
import {AxiosError} from 'axios';
import {useMutation} from '@tanstack/react-query';
import {
  AddCommentRequest,
  addMainComment,
  commentList,
  likeMainComment,
} from '../../api';
import {AddMainComment} from '../../data_model/add_main_comment_model';
import {LikeData} from '../../data_model/like_main_comment_model';

const CommentsComponent = () => {
  const [comment, setComment] = React.useState<string>('');
  const [data, setData] = React.useState<Data[]>([]);
  const [replyComment, setReplyComment] = React.useState<boolean>(false);
  const [id, setId] = React.useState<number>(0);
  // const [modalVisible, setModalVisible] = React.useState(false);
  const ref = React.useRef<TextInput>(null);
  const refList = React.useRef<FlatList>(null);
  // const request: CommentListRequest = {
  //   page: 1,
  //   pageSize: 15,
  // };
  const {mutateAsync: hitAddMainLike} = useMutation({
    mutationFn: likeMainComment,
    onSuccess: async (response: LikeData) => {
      console.log('LIke Response :::::::> ', response);
      hitCommentListApi();
    },
    onError: (error: AxiosError<any>) => {
      const msg: string = error.message;
      console.log('Error::::::::::::::> ', msg);
    },
    onSettled: () => {},
  });
  const {mutateAsync: hitAddMainCommentApi} = useMutation({
    mutationFn: addMainComment,
    onSuccess: async (response: AddMainComment) => {
      console.log('ADD Main Comment response :::::::: > ', response?.data);
      hitCommentListApi();
    },
    onError: (error: AxiosError<any>) => {
      const msg: string = error.message;
      console.log('Error::::::::::::::> ', msg);
    },
    onSettled: () => {},
  });

  const {mutateAsync: hitCommentListApi} = useMutation({
    mutationFn: commentList,
    onSuccess: async (response: CommentListModel) => {
      setData(response?.data);
    },
    onError: (error: AxiosError<any>) => {
      const msg: string = error.message;
      console.log('Error::::::::::::::> ', msg);
    },
    onSettled: () => {},
  });
  // const {mutate: hitCommentList} = useComments({
  //   onSuccess: async (response: CommentListModel) => {
  //     setData(response?.data);
  //   },
  //   onError: (error: AxiosError<any>) => {
  //     const msg: string = error.message;
  //     console.log('Error::::::::::::::> ', msg);
  //   },
  //   onSettled: () => {},
  // });
  React.useEffect(() => {
    hitCommentListApi();
  }, []);
  // React.useEffect(() => {
  //   if (comment === '@') {
  //     setModalVisible(true);
  //   } else {
  //     setModalVisible(false);
  //   }
  // }, [comment]);
  // React.useEffect(() => {
  //   if (modalVisible) {
  //   }
  // }, [modalVisible]);
  const addLikeHandle = React.useCallback((userId: string) => {
    console.log('add like handle useCallback');

    hitAddMainLike({comment_id: userId});
  }, []);
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
      // console.log('id  h yhaa', data[id]);
      // const newReplyComment = {
      //   comment: comment,
      //   id: 12 + Math.random() * 12,
      //   image: require('../../assets/sahilImage.jpeg'),
      //   likeCount: 0,
      //   timeLine: '12h',
      //   userName: 'Sahil Rawat',
      //   isVerified: false,
      // };
      // let onCommented = data[id - 1];
      // onCommented.replies?.push(newReplyComment);
      // data[id - 1] = onCommented;
      // setData(data);
    } else {
      console.log('inside in without id add');
      refList.current?.scrollToIndex({
        index: data.length - 1,
        animated: true,
      });
      const addNewComment: AddCommentRequest = {
        text: comment,
        content_id: '65b4bd4cca34a381c20a4c40',
      };
      hitAddMainCommentApi(addNewComment);
      // setData(pre => {
      //   return [
      //     ...pre,
      //     {
      //       comment: comment,
      //       id: 12 + Math.random() * 12,
      //       image: require('../../assets/sahilImage.jpeg'),
      //       likeCount: 0,
      //       timeLine: '12h',
      //       userName: 'Sahil Rawat',
      //       isVerified: false,
      //       reply: [],
      //     },
      //   ];
      // });
    }
    setReplyComment(false);
    setId(0);
  };
  // const tagHandler = (name: string) => {
  //   setModalVisible(!modalVisible);
  //   setComment(pre => {
  //     return pre + name + ' ';
  //   });
  // };
  return (
    <View style={style.mainContainer}>
      <View style={style.headerContainer}>
        <Text style={style.header}>Comments</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        initialScrollIndex={id}
        style={style.listStyle}
        data={data}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => (
          <CommentContainer
            addReply={addReply}
            index={index + 1}
            {...item}
            addLikeHandler={addLikeHandle}
          />
        )}
      />
      <View style={style.inputContainer}>
        <TextInput
          placeholder="write comment..."
          placeholderTextColor={'rgba(0,0,0,.5)'}
          style={style.inputText}
          onChangeText={setComment}
          ref={ref}
          value={comment}
        />
        <AddIcon
          name="add"
          size={50}
          color={'black'}
          onPress={() => (replyComment ? addComment(id) : addComment())}
        />
      </View>
      <KeyboardSpacer />
    </View>
  );
};

export default CommentsComponent;
