import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: [path.join(__dirname, "./entities/**.{js,ts}")],
        migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
      }
    : process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: path.join(__dirname, "../test.sqlite"),
        entities: [path.join(__dirname, "./entities/**.{js,ts}")],
        synchronize: true,
        logging: true,
      }
    : {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [path.join(__dirname, "./entities/**.{js,ts}")],
        migrations: [path.join(__dirname, "./migrations/**.{js,ts}")],
      }
);

export default AppDataSource;
