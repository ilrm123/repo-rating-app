import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchKeyword) => {

  const { data, loading } = useQuery(GET_REPOSITORIES, {fetchPolicy: "cache-and-network", variables: { orderBy: orderBy, orderDirection: orderDirection, searchKeyword: searchKeyword }});

  var repos = {}

  if (!loading) {
    return { repositories: data.repositories, loading, refetch: useQuery(GET_REPOSITORIES, {fetchPolicy: "cache-and-network", variables: { orderBy: orderBy, orderDirection: orderDirection, searchKeyword: searchKeyword }}) }
  }

  return { repos, loading, refetch: useQuery(GET_REPOSITORIES, {fetchPolicy: "cache-and-network", variables: { orderBy: orderBy, orderDirection: orderDirection, searchKeyword: searchKeyword }}) };
};

export default useRepositories;
