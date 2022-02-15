const express = require('express');
const mongoose = require('mongoose');
const Sequence = require('./sequence.js');
const cors = require('cors')
var Grid = require('gridfs-stream');
const fs = require('fs');

const app = express();
Grid.mongo = mongoose.mongo;;

port = process.env.PORT || 3001;

const FaceModel = require("./models/Face");

app.use(cors());
app.use(express.json());

DB_URL = 'mongodb+srv://admin:Javo3492@storytelling.tqane.mongodb.net/friendlyfriendhelper?retryWrites=true&w=majority';

let gfs;
 mongoose.connect(DB_URL, {
        useNewUrlParser: true,
    }).then(() => {
        //Init Stream
        gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
          bucketName: 'fs'
        })
        gfs = Grid(mongoose.connection.db, mongoose.mongo);
        gfs.collection('fs');
      });

      let sequence = new Sequence();
      let usedFiles = [];
      let index = 0;

      let result;

      initializeResult();
      
      async function initializeResult()
      {
        let query = FaceModel.where({ tone: sequence.getTone(index), intensity: sequence.getIntensity(index) });
        let documentCount = await FaceModel.count({ tone: sequence.getTone(index), intensity: sequence.getIntensity(index)});
        result = await FaceModel.findOneRandom(query, documentCount);
        usedFiles.push(result.filename);

        if((index + 1) < sequence.length)
        {
          index++;
        }else
        {
          index = 0;
        }
      }


      app.get("/classification", async (req, res) => {

        const oldResult = result;
        let query = FaceModel.where({tone: sequence.getTone(index), intensity: sequence.getIntensity(index), filename: { $nin: usedFiles }});
        let documentCount = await FaceModel.count({tone: sequence.getTone(index), intensity: sequence.getIntensity(index), filename: { $nin: usedFiles }});
        result = await FaceModel.findOneRandom(query, documentCount);
        
        if(result.filename) usedFiles.push(result.filename);

        if((index + 1) < sequence.length)
        {
          index++;
        }else
        {
          index = 0;
        }

        res.send(oldResult);
    });



    app.get("/image", async (req, res) => {
        try 
        {
          
          let filename = result.filename;
    
          let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
              bucketName: 'fs'
              }); 

              let downStream = bucket.openDownloadStreamByName(filename);
              //res.setHeader('Content-disposition', 'attachment; filename=test.png');
              res.setHeader('Content-Type', 'image/png');
              //downStream.pipe(res);

              downStream.on('data', (chunk) => {
                res.write(chunk);
               });
              
               downStream.on('error', () => {
                res.sendStatus(404);
               });
              
               downStream.on('end', () => {
                res.end();
               });
      } catch (err) {
        res.send(err);
        console.log(err);
      }
    });
  


app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});

