import { db, DataTypes } from '@Application/database';

export default db.define('book', {
	email: DataTypes.STRING,
	auth0Id: DataTypes.STRING,
});

