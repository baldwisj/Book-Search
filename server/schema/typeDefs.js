const typeDefs=
`type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
}

type Book {
    _id: ID!
    authors: String
    description: String
    bookId: String
    image: String
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

Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    deleteBook(userId:ID!, bookId: String!): User
}`

module.export = typeDefs;