export interface AddMainComment {
  status: number;
  message: string;
  data: Data;
}

export interface Data {
  text: string;
  userId: string;
  content_id: string;
  total_likes: number;
  total_replies: number;
  status: boolean;
  deletedAt: any;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
