const { Router }= require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.redirect('index.html');
})

router.get('/visualizar',(req,res)=>{
    res.redirect('visualizar.html');
})
router.get('/vercamara',(req,res)=>{
    res.redirect('ejemplos/vercamara.html');
})
module.exports = router