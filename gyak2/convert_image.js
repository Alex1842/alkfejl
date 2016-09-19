"use strict"

const fs = require('fs')
const jimp = require('jimp')
const DataStore = require('nedb')

const path = 'images/'
const db = new DataStore({
    filename: 'images.nedb',
    autoload: true,
})
db.remove({}, { multi: true }, function (err, removed) {
    fs.readdir(path, function (err, files) {
        if (err) throw err
        files.forEach(fileName => {
            jimp.read(path + fileName, function (err, image) {
                const {width, height} = image.bitmap
                //console.log(fileName, width, height)
                db.insert({ fileName, width, height }, function (err, insertedImage) {
                    // console.log(insertedImage)
                    image.resize(100, jimp.AUTO)
                    image.write(`converted/${insertedImage._id}.png`, function (err) {
                        // if (err) throw err
                        console.log(fileName, 'atmeretezve es kiirva')
                    })
                })
            })
        })
    })
    console.log('vege')
})



//npm install jimp --save
//npm install nedb --c