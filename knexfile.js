// Update with your config settings.
// for Knex cli

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'cockroachdb',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
      migrations: {
        directory: './migrations',
      }
  },

};
