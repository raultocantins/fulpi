const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const MAX_SIZE_TWO_MEGABYTES = 20 * 1024 * 1024;

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.resolve(__dirname, "..", "./uploads"));
        },
        filename: (req, file, cb) => {
          crypto.randomBytes(16, (err, hash) => {
            if (err) cb(err);
    
            const fileName= `${hash.toString("hex")}-${file.originalname}`;
    
            cb(null, fileName);
          });
        },
      }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: "fulpihistory",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);
                const fileName = `${hash.toString("hex")}-${file.originalname}`;
                cb(null, fileName);
            });
        },
    }),
};

module.exports = {
    dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
    storage: storageTypes.s3,
    limits: {
        fileSize: MAX_SIZE_TWO_MEGABYTES,
    },
    fileFilter: (req, file, cb) => {
      const allowedMimes = [
          "image/jpeg",
          "image/pjpeg",
          "image/png",
          "image/gif",
          "application/pdf",
        ];
    
        if (allowedMimes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(true,"Invalid file type.");
        }
    },
};
