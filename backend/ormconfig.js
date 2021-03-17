module.exports = {
  type: "mongodb",
  host: process.env.DB_HOST, //localhost para fora do docker
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  authSource: "admin",
  useUnifiedTopology: true,
  synchronize: true,
  logging: false,
  entities: ["./src/typeorm/entities/*.ts"],
  migrations: ["./src/typeorm/migrations/*.ts"],
  cli: {
    migrationsDir: "./src/typeorm/migrations",
  },
};
