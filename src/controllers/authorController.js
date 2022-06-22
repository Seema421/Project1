const authorModel= require("../models/authorModel")
const blogsModel = require("../models/blogsModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await authorModel.find()
//     res.send({data: authors})
// }

// const getBlogssWithAuthorDetails = async function (req, res) {
//     let Blogs = await Model.find().populate('authorId')
//     res.send({data: Blogs})
//}


module.exports.createAuthor= createAuthor
//module.exports.getAuthorsData=getAuthorsData
//module.exports.getBlogssWithAuthorDetails=getBlogssWithAuthorDetails


