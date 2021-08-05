
import knex from 'knex';

export abstract class BaseDatabase {
	private connectionData = {
		host: process.env.HOST,
		port: 3306,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DB
	};

	protected connection = knex({
		client: 'mysql',
		connection: this.connectionData,
    migrations: {
      directory: __dirname + '/src/data/migrations'
    }
	});
}
