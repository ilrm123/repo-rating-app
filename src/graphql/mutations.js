import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
    mutation Authenticate($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`

export const REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput) {
        createReview(review: $review) {
            text
            rating
            repositoryId
        }
    }
`
export const SIGNUP = gql`
    mutation SignUp($user: CreateUserInput) {
        createUser(user: $user) {
        id
        username
        }
    }
`
export const DELETE_REVIEW = gql`
    mutation DeleteReview($deleteReviewId: ID!) {
        deleteReview(id: $deleteReviewId)
    }
`
