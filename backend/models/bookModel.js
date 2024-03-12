import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {  // 1st object
    title: {
        type: String, 
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: String,
        required: true,
    },
},
{    //2nd object
    timestamps: true,
}
);

//creating model in Mongoose:
//The mongoose.model() function takes two arguments: the name of the model and the schema for the model.
export const Book = mongoose.model('Cat', bookSchema);  //The schema is a JavaScript object that defines the structure of the documents in the model.