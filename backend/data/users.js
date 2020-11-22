import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('bismillah', 10),
    isAdmin: true,
  },
  {
    name: 'Ivan Boginski',
    email: 'aisivan36@gmail.com',
    password: bcrypt.hashSync('bismillah', 10),
  },
  {
    name: 'Ais Ivan',
    email: 'aisivan34@gmail.com',
    password: bcrypt.hashSync('bismillah', 10),
  },
]

export default users
