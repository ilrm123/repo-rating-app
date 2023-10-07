import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query Repositories($orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!, $searchKeyword: String) {
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
            edges {
                node {
                id
                fullName
                description
                language
                stargazersCount
                forksCount
                reviewCount
                ratingAverage
                ownerAvatarUrl
                }
        }
    }
}
`;

export const GET_REPOSITORY = gql`
    query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      ownerAvatarUrl
      url
    }
  }
`

export const GET_REVIEWS = gql`
  query Reviews($id: ID!) {
  repository(id: $id) {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`

export const GET_USER_REVIEWS = gql`
query Me {
  me {
    reviews {
      edges {
        node {
          id
          text
          userId
          repositoryId
          repository {
            fullName
          }
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`
