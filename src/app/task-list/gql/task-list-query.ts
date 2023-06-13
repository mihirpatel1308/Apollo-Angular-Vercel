import { gql } from "apollo-angular";

export const GET_TaskList = gql`
query{
    allPosts{
      id
      title
      hours
    }
  }
`;



export const UPDATE_TaskList = gql`
query{
    allPosts{
      id
      title
      hours
      department
      designation
    }
  }
`;

export const GET_BookList = gql`
query{
  books{
    title,
    author
  }
}
`;

