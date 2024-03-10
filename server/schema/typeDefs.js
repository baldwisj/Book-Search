type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
}

type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type Auth {
    user: User,
    token: ID
}

Query {
    getUsers: [User]
}

Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
}
// deleteBook(userId:ID!, bookId: String!): User