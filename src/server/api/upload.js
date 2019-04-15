/**
 * Handle upload module
 */

const Photo = require('../db/models/Photos')
const Album = require('../db/models/Albums')
const User  = require('../db/models/Users')
const router = require('express').Router();
const fs = require('fs');

require('connect-busboy');

/**
 *  API endpoint: /api/photo/upload
 *  Handle photo upload
 *  @POST
 */

router.route('/photo/upload')
// POST Request/Response Handler
    .post(function (req, res) {

        var fileStream;
        req.pipe(req.busboy);

        req.busboy.on('file', function (fieldname, file, photoID) {

            console.log("Uploading: " + photoID);

            // Create InputWriteStream
            fileStream = fs.createWriteStream('/../../upload_files/' + req.body.albumId+ '/'+ photoID);

            // Pipe stream of file to stream
            file.pipe(fileStream);

            // 'close' event after reading fileStream
            fileStream.on('close', function () {

                // Instance of Audio()
                var photo = new Photo();
                photo.photoId = photoID;
                if (photo.photoId == undefined) {
                    res.json({message: 'Not added'})
                }
                // Assigned values from request to model
                photo.albumId = req.body.albumId;
                photo.photoPath = '/../../upload_files/' + req.body.albumId+ '/' + photoID;

                // save the audio and check for errors

                photo.save(function (err, data) {
                    if (err) {
                        res.send(err);
                    }
                });
            });
        });
    });

module.exports = router;