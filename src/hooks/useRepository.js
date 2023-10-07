import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {

  const { data, loading } = useQuery(GET_REPOSITORY, {variables: { id }, fetchPolicy: "cache-and-network"});

  var repository = {}
  
  if (!loading) {
    return { repository: data.repository, loading, refetch: useQuery(GET_REPOSITORY, {variables: { id }, fetchPolicy: "cache-and-network"}) }
  }

  return { repository, loading, refetch: useQuery(GET_REPOSITORY, {variables: { id }, fetchPolicy: "cache-and-network"}) };
};

export default useRepository;
