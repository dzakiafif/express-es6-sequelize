import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

class Author extends Model { }

Author.init({
  id: {
    unique: true,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: DataTypes.STRING,
  gender: {
    type: DataTypes.ENUM,
    values: ['m', 'f'],
  },
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  timestamps: false,
  sequelize: db,
  tableName: 'author',
});

export default Author;
