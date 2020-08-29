const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'dist';

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [rootDir + '/**/*.entity{.js,.ts}'],
  migrations: [rootDir + '/migrations/*{.js,.ts}'],
  cli: {
    migrationsDir: rootDir + '/migrations',
  },
};
