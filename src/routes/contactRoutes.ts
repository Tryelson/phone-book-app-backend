import * as express from "express";
import { Request, Response, Router } from "express";
import Contact from '../models/Contact'

const router: Router = express.Router();

// create a new contact
router.post('/', async (request: Request, response: Response) => {
    try {
        const newContact = await Contact.create(request.body)
        response.status(201).json({success: true, newContact})
    } catch (error) {
        response.status(500).json({success: false, message: 'Error on create a new contact!'})
    }
})

// get all contacts
router.get('/', async (request: Request, response: Response) => {
    try {
      const contacts = await Contact.find();
      response.status(200).json({success: true, contacts});
    } catch (error) {
      response.status(500).json({ success: false, error: 'Unable to fetch contacts.' });
    }
});

// delete a contact
router.delete('/:id', async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const deletedContact = await Contact.findByIdAndDelete(id);
        if(deletedContact){
            response.status(200).json({ success: true, message: 'Contact successfully deleted!' });
        } else {
            response.status(200).json({ success: false, message: 'Contact not found' });
        }
    } catch (error) {
        response.status(500).json({success: false, message: 'Error on delete this contact'});
    }
});

// update a contact
router.patch('/:id', async (request: Request, response: Response) => {
    try {
        const updateContact = await Contact.findByIdAndUpdate(request.params.id, request.body, { new: true })
        response.status(200).json(updateContact)
    } catch (error) {
        response.status(500).json({ error: 'Unable to update contact.' })
    }
})

export default router