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

]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
}

run()
