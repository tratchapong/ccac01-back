const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { username : 'andy', password, email: 'andy@ggg.mail' },
  { username : 'bobby', password, email: 'bobby@ggg.mail' },
  { username : 'candy', password, email: 'candy@ggg.mail' },
]

const todoData = [
  { title:'Learn HTML', duedate: new Date(), user_id: 1 },
  { title:'Learn CSS', duedate: new Date(), user_id: 1 },
  { title:'Learn JS', duedate: new Date(), user_id: 2 },
  { title:'Learn React', duedate: new Date(), user_id: 3 },

]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
  await prisma.todo.createMany({
    data : todoData
  })
}

run()
