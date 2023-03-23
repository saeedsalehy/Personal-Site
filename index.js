const express = require('express')
const app = new express();
const path = require('path')


app.use(express.static('public'))

app.get('/',(req , res)=>  {
    res.render('index');
})
app.get('/about',(req , res)=>  {
    res.sendFile(path.resolve(__dirname , "pages/about.html"))
})
app.get('/post',(req , res)=>  {
    res.sendFile(path.resolve(__dirname , "pages/post.html"))
})
app.get('/contact',(req , res)=>  {
    res.sendFile(path.resolve(__dirname , "pages/contact.html"))
})

const expressEdge = require('express-edge');

app.use(expressEdge);
app.set('views', __dirname + '/views');


app.listen(3000 , ()=>{
    console.log("localhost started")
})