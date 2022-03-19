const { GraphQLScalarType } = require('graphql')

const userResolvers = {
    RolesType: {
        ESTUDANTE: 'Estudante',
        DOCENTE: 'Docente',
        COORDENACAO: 'Coordenação'
    },

    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
    }),

    Query: {
        users: (root, args, {dataSources}) => dataSources.
            userAPI.getUsers(),

        user: (root, {id}, {dataSources}) => dataSources.
            userAPI.getUserById(id)
    },

    Mutation: {
        adicionaUser: (root, {user}, {dataSources}) => dataSources.
            userAPI.adicionaUser(user),

        atualizaUser: (root, novosDados, {dataSources}) => dataSources.
            userAPI.atualizaUser(novosDados),

        deletaUser: (root, {id}, {dataSources}) => dataSources.
            userAPI.deletaUser(id)
    }
}

module.exports = userResolvers