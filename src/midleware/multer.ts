import multer from "multer";
import path from "path";
import uuid from "uuid";

const v4 = uuid.v4()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "../upload"))
    },
    filename: (req, file, cb) => {
        cb(null, v4 + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'video/mp4'];

    if (allowedTypes.includes(file.mimetypes)) {
        cb(null, true)
    } else {
        cb(new Error('Tipo de arquivo não suportado!')); // Rejeita o arquivo
    }
}


const upload = multer({ storage, fileFilter, })

export { upload }