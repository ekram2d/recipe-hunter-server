const express = require('express')
const app = express()
const cors=require("cors");
const port = process.env.PORT || 5000;
const chef=require('./data/chef.json')
const items=require('./data/items.json')
app.use(cors());
app.get('/', (req, res) => {
      res.send('Recipe Hunter is running')
})
app.get('/chef',(req,res) =>{
      res.send(chef);

})
app.get('/items/:id',(req,res)=>{
      const _id=req.params.id;
      // console.log(id);
      const newItems=items.filter((item) =>item.id==_id)
      res.send(newItems);
})

app.listen(port, () => {
      console.log(`recipe hunter is  on port ${port}`)
    })