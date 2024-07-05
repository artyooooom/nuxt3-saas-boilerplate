import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/sequelize';

const User = sequelize.define('User', {
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  customer_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subscription: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  is_account_created: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  // Other model options go here
});

// Sync the model with the database
(async () => {
  await sequelize.sync({ alter: true });
  console.log("The table for the User model was just (re)created!");
})();

export default User;