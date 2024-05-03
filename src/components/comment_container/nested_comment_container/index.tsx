import {View, Text, Image} from 'react-native';
import React from 'react';
import {style} from '../style';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import {Reply} from '../../../data_model/comment_list_model';
type NestedCommentProps = Reply & {
  nestedReplyHandler: () => void;
};
const NestedComment = (item: NestedCommentProps) => {
  const [isReplyLike, setReplyLike] = React.useState<boolean>(false);

  return (
    <View style={style.mainContainer}>
      <View style={style.imgComponent}>
        <Image source={{uri: item.replyingUsers[0].image}} style={style.img} />
      </View>
      <View style={style.commentContainer}>
        <Text style={style.comment}>
          <Text style={style.userName}>{item.replyingUsers[0].firstName}</Text>
          {item.text}
        </Text>
        <View style={style.likeAndTimeContainer}>
          <Text style={style.text}>{item.createdAt}</Text>
          {item.total_likes > 0 ? (
            <Text style={style.text}>
              {item.total_likes} {item.total_likes === 1 ? 'like' : 'likes'}
            </Text>
          ) : (
            <></>
          )}
          <Text style={style.text} onPress={() => item.nestedReplyHandler()}>
            Reply
          </Text>
        </View>
      </View>
      <View style={style.iconContainer}>
        <HeartIcon
          name={isReplyLike ? 'heart' : 'heart-o'}
          size={15}
          color={isReplyLike ? 'red' : 'black'}
          onPress={() => setReplyLike(!isReplyLike)}
        />
      </View>
    </View>
  );
};

export default NestedComment;
