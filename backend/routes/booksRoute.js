import express from 'express';
import { Book } from '../models/bookModel.js'
const router = express.Router();

//don't need '/books' after assigning a middleware and invoking the function function
//Route for Save a new Book
router.post('/', async (req, res) => {
    try {   //req hm postman se bhijwa rhe
        if (!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message: 'send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook); // or Book.save(newBook) 
        return res.status(201).send(book);
    }
    catch (error){
        console.log(error.message);
        res.status(500).send({message: error.message});  // // status code 500 (Internal Server Error)
    }
});
//for testing a post method, we can't use post method , so we will use postman  


//route to get all books from database
router.get('/', async (req,res) => {
    try {
        const books = await Book.find({});  // get all documents in the database
        return res.status(200).json(books); //sending books to the client
    } catch(error){
        console.log(error.message);
        res.status(500).send({ meesage: error.message});   
    }
});

//route to get one book frm database by id
router.get('/:id', async (req,res) => {
    try {

        const { id } = req.params;

        const books = await Book.findByID({id});
        return res.status(200).json(books); //sending book to the client => status code 200 (OK)
    } catch(error){
        console.log(error.message);
        res.status(500).send({ meesage: error.message});
    }
});

//route for update a Book
router.put('/:id', async (req,res) => {
    try{  
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message: 'send all required fields: title, author, publishYear',
            });
         }

         const { id } = req.params;
         const result = await Book.findByIDAndUpdate(id, req.body);  // findByIdAndUpdate() to find the book by its ID and update it with the data from req.body.


    } catch (error) {
        console.log(error.message);
        res.status(500).send({message : error.message});
    }
});

//route for delete a book
router.delete('/:id', async(req,res) => {
    try{
        const {id} = req.params;
        const result = await Book.findByIDAndDelete(id);

        if(!result){
            return res.status(404).json({message: 'Book not found'});
        }
         else{
            return res.status(200).json({message: 'Book deleted successfully'});
         }
    } catch (error){
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});

export default router;