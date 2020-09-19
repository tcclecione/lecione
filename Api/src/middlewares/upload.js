import multer from 'multer';
import path from 'path';

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'public/imagens'),
    filename: function(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })
}
