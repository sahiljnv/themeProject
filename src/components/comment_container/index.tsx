import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {CommentProps} from '../../assets/comment_data';
import {style} from './style';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import NestedComment from './nested_comment_container';
type CommentContainerProps = CommentProps & {
  addReply: (id: number) => void;
  index: number;
};
const CommentContainer = (DataItem: CommentContainerProps) => {
  const [isLike, setLike] = React.useState<boolean>(false);
  const nestedReplyHandler = () => {
    DataItem.addReply(DataItem.index);
  };
  return (
    <View style={style.mainContainer}>
      <View style={style.imgComponent}>
        <Image source={DataItem.image} style={style.img} />
      </View>
      <View style={style.commentContainer}>
        <Text style={style.comment}>
          <Text style={style.userName}>{DataItem.userName}</Text>{' '}
          {DataItem.comment}
        </Text>
        <View style={style.likeAndTimeContainer}>
          <Text style={style.text}>{DataItem.timeLine}</Text>
          <Text style={style.text}>
            {isLike ? DataItem.likeCount + 1 : DataItem.likeCount} likes
          </Text>
          <Text
            style={style.text}
            onPress={() => DataItem.addReply(DataItem.index)}>
            Reply
          </Text>
        </View>
        {DataItem.reply ? (
          <FlatList
            data={DataItem.reply}
            keyExtractor={item => item.id.toString()}
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
          onPress={() => setLike(!isLike)}
        />
      </View>
    </View>
  );
};

export default CommentContainer;
