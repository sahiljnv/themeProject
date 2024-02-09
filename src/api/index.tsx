import {axiosInstance} from './api_instance';
export type AddCommentRequest = {
  content_id: string;
  text: string;
};

export const addMainComment = async (user: AddCommentRequest) => {
  const response = await axiosInstance.post('/v1/contents/comments', user);
  console.log('response ::::::::::> ', response);

  return response.data;
};

export const commentList = async () => {
  const response = await axiosInstance.get(
    '/v1/contents/comments/65b4bd4cca34a381c20a4c40?page=1&pageSize=15',
  );
  return response.data;
};

export type LikeMainCommentRequest = {
  comment_id: string;
};
export const likeMainComment = async (user: LikeMainCommentRequest) => {
  const response = await axiosInstance.patch(
    '/v1/contents/comments/' + user.comment_id + '/likes',
    user,
  );
  return response.data;
};
