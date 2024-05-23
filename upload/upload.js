import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import multer from "multer";
import multerS3 from "multer-s3";

const accessKeyId = process.env["MINIO_ACCESS_KEY"];
const secretAccessKey = process.env["MINIO_SECRET_KEY"];

const s3 = new S3Client({
    endpoint: "http://127.0.0.1:9000",
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
    },
    sslEnabled: false,
    s3ForcePathStyle: true,
});

const uploadFile = multer({
    storage: multerS3({
        s3: s3,
        bucket: "devweb",
        acl: "public-read",
        key: function (request, arquivo, cb) {
            cb(null, Date.now() + "-" + arquivo.originalname);
        },
    }),
});

const minioUrl = "http://127.0.0.1:9000/";
const bucket = "devweb/";
async function getFileUrl(fileName) {
    return minioUrl + bucket + fileName;
}

export default { uploadFile, getFileUrl };
