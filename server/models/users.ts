import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/sequelize';

const User = sequelize.define('users_data', {
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
  schema: 'auth',
  // Other model options go here
});

// Sync the model with the database
(async () => {
  await sequelize.sync({ alter: true });
  console.log("The table for the User model was just (re)created!");

  // Enable Row-Level Security (RLS) for the table
  await sequelize.query(`
    ALTER TABLE auth.users_data
    ENABLE ROW LEVEL SECURITY;
  `);
  console.log("Row-Level Security (RLS) has been enabled for the User table.");
  
})();

export default User;