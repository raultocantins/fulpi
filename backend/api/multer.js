const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    if (!file.originalname.endsWith(".pdf")) {
      return cb("Only pdfs are allowed");
    }
    file.originalname=file.originalname.replace('.pdf','')
    cb(null, `${file.originalname}.pdf`);
   
  },
});
const upload = multer({ storage });
module.exports=upload