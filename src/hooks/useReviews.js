import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (id) => {

  const { data, loading } = useQuery(GET_REVIEWS, {variables: { id }, fetchPolicy: "cache-and-network"});

  var reviews = {}
  
  if (!loading) {
    return { reviews: data.repository.reviews.edges, loading, refetch: useQuery(GET_REVIEWS, {variables: { id }, fetchPolicy: "cache-and-network"}) }
  }

  return { reviews, loading, refetch: useQuery(GET_REVIEWS, {variables: { id }, fetchPolicy: "cache-and-network"}) };
};

export default useReviews;
