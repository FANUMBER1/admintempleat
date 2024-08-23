const express=require('express');
const app=express();
const path=require('path');
const body=require('body-parser')
const port=3500;
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(body.json());
app.use(body.urlencoded({ extended: true })); 
//////INDEX
app.get('/',(req,res)=>{
   res.render('user');
})
app.get('/admin',(req,res)=>{
    res.render('index');
});
app.get('/index3',(req,res)=>{
    res.render('index3');
});

app.get('/index2',(req,res)=>{
    res.render('index2');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });