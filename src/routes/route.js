const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const blogsController= require("../controllers/blogsController")
const commonMW= require("../middleware/commonMW")

//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

//router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBlogs", commonMW.validation, blogsController.createBlogs)
router.get("/getBlogsDetails", blogsController.getBlogsDetails)

router.delete("/blogs/:blogId", blogsController.getBlogs)

router.delete("/blogs", blogsController.getBlogsByQuery)


//router.get("/getBlogssWithAuthorDetails", authorController.getBlogssWithAuthorDetails)






    
  

module.exports = router;