const typeDefs=
`type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
}

type Book {
    _id: ID!
    authors: String
    description: String
    bookId: String!
    image: String
    link: String
    title: String
}
input BookData {
    authors: [String]
    description: String
    bookId: String,
    image: String,
    link: String
    title: String
  }

type Auth {
    user: User,
    token: ID!
}

type Query {
    getUsers: [User]
    user(email: String): User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    deleteBook(userId:ID!, bookId: String!): User
    removeBook(book: BookData): User
}`;

module.exports = typeDefs;