const mongoose = require('mongoose');

const FaceSchema = new mongoose.Schema({
    filename : {
        type: String,
        required: true,
    },
    classification: {
        type: String,
        required: true,
    },
    certainty: {
        type: String,
        required: true,
    },
    tone: {
        type: String,
        required: true,
    },
    intensity: {
        type: String,
        required: true,
    }
});

FaceSchema.statics.findOneRandom = async function (query, documentCount) {
    // estimatedDocumentCount() returns the total number
    // of documents in the words collection
    // https://mongoosejs.com/docs/api.html#model_Model.estimatedDocumentCount
    const count = documentCount;
    const rand = Math.floor(Math.random() * count)
  
    // skip(n) specifies the number of documents to skip
    // before returning one document. In short this means
    // it returns the nth document from the collection
  
    // .lean() converts the returned mongoose document
    // into a plain json object
    //const doc = await this.findOne(query).skip(rand).lean()

    const doc = await query.findOne().skip(rand);
    //skip(rand).lean();
    // console.log(doc);
    return doc
  }

const Face = mongoose.model("Face", FaceSchema, "faces");

module.exports = Face;