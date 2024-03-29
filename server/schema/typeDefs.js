const typeDefs=
`type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
}

type Book {
    authors: [String]
    description: String
    bookId: ID!
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
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookData): User
    removeBook(bookId: ID): User
}`;

module.exports = typeDefs;