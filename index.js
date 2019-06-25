const express =  require('express')
const bodyParser =  require('body-parser')

const app = express()
app.use(express.static('static'))
app.use(bodyParser.json())

app.get('/',(req,res) => {
  res.send('hello knex')
})

app.listen(3030,()=>{
  console.log('app start on port 3000')
})