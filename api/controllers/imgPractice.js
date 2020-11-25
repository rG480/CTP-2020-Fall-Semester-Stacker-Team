const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2
const multer= require('multer')
const streamifier = require('streamifier')
var upload = multer()

//router.post('/',upload.single('image'),(req, res) => {
  //console.log(req.file);
 // const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
  
  //formData.append("file", req.file);
  //formData.append("upload_preset", "docs_upload_example_us_preset");
 // cloudinary.uploader.upload(req.file, function(error, result) {console.log(result, error)});
 let streamUpload = (type,file) => {
    console.log(file)
    return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream( {folder: type},
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );

       streamifier.createReadStream(file.buffer).pipe(stream);
    });
};
 let uload =async function upload(type,file) {
    let result = await streamUpload(type,file);
    return (result);
}


module.exports.upload = uload;
//});

