import {View, Text, Image} from 'react-native';
import React from 'react';
import {style} from '../style';
import {CommentProps} from '../../../assets/comment_data';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
type NestedCommentProps = CommentProps & {
  nestedReplyHandler: () => void;
};
const NestedComment = (item: NestedCommentProps) => {
  const [isReplyLike, setReplyLike] = React.useState<boolean>(false);

  return (
    <View style={style.mainContainer}>
      <View style={style.imgComponent}>
        <Image source={item.image} style={style.img} />
      </View>
      <View style={style.commentContainer}>
        <Text style={style.comment}>
          <Text style={style.userName}>{item.userName}</Text> {item.comment}
        </Text>
        <View style={style.likeAndTimeContainer}>
          <Text style={style.text}>{item.timeLine}</Text>
          <Text style={style.text}>
            {isReplyLike ? item.likeCount + 1 : item.likeCount} likes
          </Text>
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
