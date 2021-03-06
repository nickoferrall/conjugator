import gql from 'graphql-tag';

const CREATE_FEEDBACK = gql`
  mutation($text: String!, $email: String!) {
    createFeedback(data: { text: $text, email: $email }) {
      id
      email
      text
      user {
        id
        name
      }
    }
  }
`;

export { CREATE_FEEDBACK };
