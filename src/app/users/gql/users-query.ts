import { gql } from "apollo-angular";

// export const GET_USERS = gql`
// query{
//     allUsers{
//         id
//       name
//     }
//   }
// `;

export const GET_USERS = gql`
query{
  books{
    title,
    author
  }
}
`;
