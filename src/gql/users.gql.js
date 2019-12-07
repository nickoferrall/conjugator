import gql from 'graphql-tag';

const CANCEL_SUBSCRIPTION = gql`
  mutation($id: String!) {
    cancelSubscription(data: $id)
  }
`;

const CREATE_USER = gql`
  mutation(
    $name: String!
    $email: String!
    $password: String!
    $stripeSource: String!
  ) {
    createUser(
      data: {
        name: $name
        email: $email
        password: $password
        premium: true
        stripeSource: $stripeSource
      }
    ) {
      user {
        name
        email
      }
      token
    }
  }
`;

const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;

const GET_MY_INFO = gql`
  query {
    me {
      id
      name
      email
      stripeSubId
      logs {
        id
        verbInfinitive
        tense
        correctAnswer
        userAnswer
        verbPerson
        correct
        createdAt
      }
    }
  }
`;

export { CANCEL_SUBSCRIPTION, CREATE_USER, LOGIN, GET_MY_INFO };
