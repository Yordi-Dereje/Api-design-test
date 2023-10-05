import * as dotenv from 'dotenv'
dotenv.config()
import config from './config'
import app from './server'

app.listen(config.port, () => {
  console.log(`Hello from http://localhost:${config.port}`)
})

//how to change the mode in the cli...
//STAGE... the name we gave it
//STAGE=production npm run dev
