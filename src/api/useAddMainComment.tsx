import {MutateOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {axiosInstance} from './api_instance';
import {CommentListModel} from '../data_model/comment_list_model';

export type AddCommentRequest = {
  content_id: string;
  text: string;
};

const addMainComment = async (user: AddCommentRequest) => {
  const response = await axiosInstance.post('/v1/contents/comments', user);
  return response.data;
};

export const useAddMainComment = (
  config?: MutateOptions<CommentListModel, AxiosError, AddCommentRequest>,
) => {
  return useMutation((args: AddCommentRequest) => addMainComment(args), {
    ...config,
    retry: false,
  });
};
