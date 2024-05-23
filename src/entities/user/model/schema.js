import { db, DataTypes } from '@Application/database';

export default db.define('user', {
	email: DataTypes.STRING,
	auth0Id: DataTypes.STRING,
});

