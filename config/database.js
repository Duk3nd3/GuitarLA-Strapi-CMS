module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce16quta4996ndsvbj6g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_ylyn'),
      user: env('DATABASE_USERNAME', 'duk3nd3'),
      password: env('DATABASE_PASSWORD', 'aHvNbh7QDTCjTCW0c1bkecsN3ewU4rvi'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
