import { useQuery } from '@apollo/client';
import { GET_USER_REVIEWS } from '../graphql/queries';

const useUserReviews = () => {

  const { data, loading } = useQuery(GET_USER_REVIEWS, {fetchPolicy: "cache-and-network"});

  var reviews = {}
  
  if (!loading) {
    return { reviews: data.me.reviews.edges, loading, refetch: useQuery(GET_USER_REVIEWS, {fetchPolicy: "cache-and-network"}) }
  }

  return { reviews, loading, refetch: useQuery(GET_USER_REVIEWS, {fetchPolicy: "cache-and-network"}) };
};

export default useUserReviews;
