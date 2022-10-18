const express=require('express')
const app=express()
const path=require('path')

app.use(express.static(path.resolve('public')));

app.listen(3000,()=>{
    console.log('Servidor ON')
})

app.get('/',(req,res)=>{
    const html=path.resolve('views/home.html')
    res.sendFile(html)
})
app.post('/',(req,res)=>{
    const html=path.resolve('views/home.html')
    res.sendFile(html)
})

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve('views/register.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve('views/login.html'))
})

app.get('*',(req,res)=>{
res.send('Desconozco su caso!')
})
