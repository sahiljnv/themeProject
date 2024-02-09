export interface LikeMainCommentModel {
  status: number;
  message: string;
  data: LikeData;
}

export interface LikeData {
  userId: string;
  comment_id: string;
  status: boolean;
  deletedAt: any;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
