import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';


const useDeleteReview = () => {

    const [mutate, result] = useMutation(DELETE_REVIEW);

    const deletereview = async ({ id }) => {

      const { data } = await mutate({
        variables: { deleteReviewId: id }
      })

      return data
    }
  
    return [deletereview, result]
  };

export default useDeleteReview;
