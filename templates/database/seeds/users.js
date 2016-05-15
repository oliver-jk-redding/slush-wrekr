
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      username: 'Tom Jones',
      email: 'tjones@email.com',
      password: 'S3CR37',
    })
  );
};
