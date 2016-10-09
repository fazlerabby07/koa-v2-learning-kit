import multer from 'koa-multer';

/* -- Upload machanism (start) --*/
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, 'hello3' + '-' + Date.now());
		// console.log(file);
    }
});
const fileFilter = function(req, file, cb) {
    cb(null, true);
};
const upload = multer({
    fileFilter: fileFilter,
    storage: storage,
    limits: { fileSize: 1000000 }
}).single('avatar');

const uploadFile = async function (ctx) {
    try {
        const fileUpload = await upload(ctx);

        const fileInfo = fileUpload.req.file;
        [ctx.status, ctx.body] = [200, fileInfo];
    } catch (err) {
        [ctx.status, ctx.body] = [403, err.code];
    }
};
/* -- Upload machanism (end) --*/

export default {
    uploadFile
};
