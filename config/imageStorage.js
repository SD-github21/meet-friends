const multer = require('multer');
const path = require('path');


    const storage = multer.diskStorage({

        destination: (req, file,cb ) => {
          cb(null, 'public/img')
        },
      
        filename:(req,file,cb) =>{
          console.log(file)
          cb(null, file.originalname)
        }

        //+ path.extname(file.originalname)
      });
      
   const upload = multer({storage: storage})

module.exports = upload;