const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/resume',(req,res)=>{
    res.download(path.join(__dirname,'/public/Tirtharaj_Sengupta_2020s.pdf'));
})

app.listen(3000,()=>{
    console.log('listening to a port');
});
