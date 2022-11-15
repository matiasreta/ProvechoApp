const { Router } = require('express');
const router = Router();
const {Diet} = require('../../db')

const getDietList= async()=>{
    const list = await Diet.findAll({
        attributes:['id','name']
    })
    return list;
}

router.get('/',async(req,res)=>{
    try{
        res.status(200).json({res: await getDietList()})
    }catch(e){
        res.status(404).json({ error: e.message })
    }
    
})

module.exports= router;