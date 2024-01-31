import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {CommentProps} from '../../assets/comment_data';
import {style} from './style';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import NestedComment from './nested_comment_container';
type CommentContainerProps = CommentProps & {
  addReply: (id: number) => void;
};
const CommentContainer = (DataItem: CommentContainerProps) => {
  const [isLike, setLike] = React.useState<boolean>(false);
  const [data, setData] = React.useState<CommentProps>({
    comment: '',
    id: 0,
    image: '',
    isVerified: false,
    likeCount: 0,
    timeLine: '0h',
    userName: '',
    reply: [],
  });
  React.useState(() => {
    setData(DataItem);
  }, []);
  const nestedReplyHandler = () => {
    DataItem.addReply(data.id);
  };
  return (
    <View style={style.mainContainer}>
      <View style={style.imgComponent}>
        <Image source={data.image} style={style.img} />
      </View>
      <View style={style.commentContainer}>
        <Text style={style.comment}>
          <Text style={style.userName}>{data.userName}</Text> {data.comment}
        </Text>
        <View style={style.likeAndTimeContainer}>
          <Text style={style.text}>{data.timeLine}</Text>
          <Text style={style.text}>
            {isLike ? data.likeCount + 1 : data.likeCount} likes
          </Text>
          <Text style={style.text} onPress={() => DataItem.addReply(data.id)}>
            Reply
          </Text>
        </View>
        {data.reply ? (
          <FlatList
            data={data.reply}
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
