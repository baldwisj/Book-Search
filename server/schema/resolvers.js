const { User, Book } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { sign } = require('jsonwebtoken');

const resolvers = {
        Query: {
            me: async (parent, args, context) => {
                if (context.user) {
                    return await User.findOne({ _id: context.user._id });
                }
                throw new AuthenticationError;
            },
        },
        Mutation: {
            addUser: async ({ username, email, password }) => {
                const user = await User.create({ username, email, password });
                const token = signToken(user);
                return { token, user };

            },
            login: async (parent, { email, password }) => {
                const user = await User.findOne({ email });

                if (!user) {
                    throw AuthenticationError;
                }

                const correctPw = await user.isCorrectPassword(password);

                if (!correctPw) {
                    throw AuthenticationError;
                }

                const token = signToken(user);

                return { token, user };
            },
            saveBook: async (parent, { book }, context) => {
                if (context.user) {
                    return User.findOneAndUpdate(
                        { id: context.user._id },
                        { $addToSet: { savedBooks: book }},
                        {
                            new: true,
                            runValidators: true
                        },
                    )
                }
                throw AuthenticationError;
            },
            removeBook: async (parent, { book }, context) => {
                if (context.user) {
                    return User.findOneAndUpdate(
                        { _id: context.user._id },
                        { $pull: { savedBooks: book } },
                        {
                            new: true,
                            runValidators: true
                        }
                    )
                }
                throw AuthenticationError;
            },
        },
};
module.exports = resolvers;