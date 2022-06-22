const authorModel= require("../models/authorModel")
const blogsModel = require("../models/blogsModel")

const createBlogs= async function (req, res) {
    let data= req.body
    let savedData= await blogsModel.create(data)
    res.send({msg: savedData})
}

const getBlogsDetails =async function (req, res) {

    let allQuery=req.query
    let filter= {
        isDeleted:false,
        ispublished:true,
        ...allQuery
    }

        let blogsDetail = await blogsModel.find(filter)
        //console.log(blogsDetail)
        if(blogsDetail== false)
        res.status("404").send({status: false, msg:" data not found"})
        else
         res.send({data: blogsDetail})
        //  JSON.stringify(req.query)
       


     }

     const getBlogs= async function (req, res) {
        let id= req.params.blogId
        console.log(id)
        if(!id)
        res.status(400).send("id is required")
        const data = await blogsModel.findById(id)
        if(!data)
        res.status(404).send("wrong id")

        const saveData = await blogsModel.findOneAndUpdate({isDeleted: false}, {$set:{isDeleted: true} },{new: true})
        res.status(201).send({msg: saveData})
    }


    const getBlogsByQuery= async function (req, res) {

        let allQuery=req.query
    let filter= {
        ...allQuery
    }
       
       
        const data = await blogsModel.findOneAndUpdate({filter},{$set:{isDeleted: true}}, {new : true})
        if(data==false)
        res.status(404).send("data not found")
        else
        res.status(201).send({msg: "deleted successfully"})
    }



module.exports.createBlogs=createBlogs
module.exports.getBlogsDetails=getBlogsDetails
module.exports.getBlogs=getBlogs
module.exports.getBlogsByQuery=getBlogsByQuery