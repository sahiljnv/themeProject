import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {style} from './style';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import NestedComment from './nested_comment_container';
import {Data} from '../../data_model/comment_list_model';
type CommentContainerProps = Data & {
  addReply: (id: number) => void;
  addLikeHandler: (userId: string) => void;
  index: number;
};
const CommentContainer = (DataItem: CommentContainerProps) => {
  const [isLike, setLike] = React.useState<boolean>(false);

  const nestedReplyHandler = () => {
    DataItem.addReply(DataItem.index);
  };

  React.useEffect(() => {
    console.log('userCommentLike ====== > ', DataItem.userCommentLike);

    if (DataItem.userCommentLike === 1) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [DataItem]);
  return (
    <View style={style.mainContainer}>
      <View style={style.imgComponent}>
        <Image
          source={{uri: DataItem.commentingUser.image}}
          style={style.img}
        />
      </View>
      <View style={style.commentContainer}>
        <Text style={style.comment}>
          <Text style={style.userName}>
            {DataItem.commentingUser.firstName}
          </Text>{' '}
          {DataItem.text}
        </Text>
        <View style={style.likeAndTimeContainer}>
          <Text style={style.text}>{DataItem.createdAt}</Text>
          <Text style={style.text}>{DataItem.total_likes} likes</Text>
          <Text
            style={style.text}
            onPress={() => DataItem.addReply(DataItem.index)}>
            Reply
          </Text>
        </View>
        {DataItem.replies ? (
          <FlatList
            data={DataItem.replies}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <NestedComment
                {...item}
                nestedReplyHandler={nestedReplyHandler}
              />
            )}
          />
        ) : (
          <View />
        )}
      </View>
      <View style={style.iconContainer}>
        <HeartIcon
          name={isLike ? 'heart' : 'heart-o'}
          size={15}
          color={isLike ? 'red' : 'black'}
          onPress={() => DataItem.addLikeHandler(DataItem._id)}
        />
      </View>
    </View>
  );
};

export default CommentContainer;
