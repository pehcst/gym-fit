// Apaga todos os usuários e histórico de usuários do banco de dados quando executado
exports.seed = async function (knex) {
  await knex('users').del()
  await knex('history').del()
};