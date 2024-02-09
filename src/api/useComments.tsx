import {MutateOptions, useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {axiosInstance} from './api_instance';
import {CommentListModel} from '../data_model/comment_list_model';

export type CommentListRequest = {
  page: number;
  pageSize: number;
};

const comment = async () => {
  const response = await axiosInstance.get(
    '/v1/contents/comments/65b4bd4cca34a381c20a4c40?page=1&pageSize=15',
    // {
    //   headers: {
    //     Authorization:
    //       'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNodWJoYW1uZWdpNzc2NkB5b3BtYWlsLmNvbSIsImlhdCI6MTcwNzQ1NTI4MywiZXhwIjoxNzA3NTQxNjgzLCJhdWQiOiI2NTcwYjA3ZDc4MTM5M2Y0NTM1NmY5MTkifQ.Unjutb_GdTgnYZIQ2coeUxlbEi9Y_xgqdQjj9U8Bkn9vCcBFyFYUhXCJXgW7zR_BSjYbf2eKEmn85Ly89YTOcvyIQ7ldQjoIfq9R9YhhWTtCqjD7Uyc-CBFZb12ZkZBqslan468gSzvApyGKZLOdoIYuehjWYyEWL-cgpmzU-84FbJUVR1b-Y5-X7BVWErhyONXtkaJne2_FrVUt2AVtWgIAWoroCJKWWZZwG3tqI8CwYOaAdjnDX0LEEl95z356sibcidhi62nC2Zu5s60JILevM57eEwlEeuQ4ramLHgRq7e1LeOUm8o6yxPVM9EvyWY5p-7W555BGvBQtfwUHekeYCJarFhq3pj7ng-3UDJHy9DJcBCRDqRUFn3bAe3W3nDd0xTVOwo9RsZgXL4GQBlfgsuXXXoE_DN7YWvlWWL5Ll4o3vKw3g1xCbCB09YgTTE-Gl5AdQ4prLaFXzz8EC8yRROGau4YBPHMCFp2WaFZ2DUyGswZ6wGn6h3N9qvDUyB5AkEMHd4M0CIJ0tnrOvo4Zj2sACj0WbmC1Qk57VcUsTlW9F-DeqB0qqaqCeWyLr1JBHLt13DRA6qOeW5ZoWeUYpf3gsvx_SChylUvEeskxyGUmgxpPdQFeA76upOJaRF002LbNB3N5xGUcFzJBgUBJXZjIOL4PoQTz-BYV-tU',
    //   },
    // },
  );
  return response.data;
};

export const useComments = (
  config?: MutateOptions<CommentListModel, AxiosError>,
) => {
  return useMutation(() => comment(), {
    ...config,
    retry: false,
  });
};
