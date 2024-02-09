export interface CommentListModel {
  status: number;
  message: string;
  data: Data[];
}

export interface Data {
  _id: string;
  text: string;
  userId: string;
  total_likes: number;
  createdAt: string;
  replies: Reply[];
  userCommentLike: number;
  commentingUser: CommentingUser;
}

export interface Reply {
  _id: string;
  text: string;
  userId: string;
  createdAt: string;
  total_likes: number;
  replyingUsers: ReplyingUser[];
  replyLikes: number;
}

export interface ReplyingUser {
  firstName: string;
  image: string;
}

export interface CommentingUser {
  firstName: string;
  image: string;
}
