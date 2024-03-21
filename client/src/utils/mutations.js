import { gql } from "@apollo/client";

//This sets up the structure for the login_user mutation and what information needs to be called/provided to log a user in
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;
//This sets up the structure for the add_user mutation and what information needs to be called/provided to create a new user through sign-up
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;
//This sets up the structure for the save_book mutation and what information needs to be called/provided to save a book to the db
export const SAVE_BOOK = gql`
mutation saveBook($bookData: BookData) {
  saveBook(bookData: $bookData) {
    _id
    bookCount
    email
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
    username
  }
}
`;
//This sets up the structure for the remove_book mutation and what information needs to be called/provided to remove a selected book from the users saved books
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID) {
  removeBook(bookId: $bookId) {
    _id
    email
    username
    bookCount
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;