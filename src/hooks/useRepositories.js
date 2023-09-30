import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

  const { data, loading } = useQuery(GET_REPOSITORIES, {fetchPolicy: "cache-and-network"});

  var repos = {}

  if (!loading) {
    return { repositories: data.repositories, loading, refetch: useQuery(GET_REPOSITORIES, {fetchPolicy: "cache-and-network"}) }
  }

  return { repos, loading, refetch: useQuery(GET_REPOSITORIES, {fetchPolicy: "cache-and-network"}) };
};

export default useRepositories;
