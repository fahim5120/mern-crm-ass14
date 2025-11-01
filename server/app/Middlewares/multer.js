// const multer=require("multer")



// const storage=multer.diskStorage({
//     filename:function(req,file,cb){
//        cb(null,file.originalname) 
//     }
// })

// const upload=multer({storage:storage})

// module.exports=upload

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../uploads")); // full path
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

module.exports = upload;





