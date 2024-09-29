import { createConnection } from 'typeorm';

export const connectDB = async () => {
  await createConnection();
  console.log('Database connected');
};






// import { DataSource } from 'typeorm';

// const AppDataSource = new DataSource({
//   type: 'mysql', // or your database type
//   host: 'localhost',
//   port: 3306,
//   username: 'test',
//   password: 'test',
//   database: 'test',
//   entities: [],
//   synchronize: true,
//   logging: false,
// });

// export const connectDB = async () => {
//   await AppDataSource.initialize();
//   console.log('Database connected');
// };