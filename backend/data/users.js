import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Popescu Ion',
    email: 'popescu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Stefan Andrei',
    email: 'stefan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
