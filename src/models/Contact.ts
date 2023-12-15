import mongoose, { Document } from "mongoose";

interface ContactProps extends Document {
    firstName: string,
    lastName: string,
    phoneNumber: string
}

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: false },
    phoneNumber: { type: String, required: true, unique: true }
}, { 
    versionKey: false,
    toJSON: {
        transform: (_, ret) => {
            ret.id = ret._id
            delete ret._id
        }
    }
})

const Contact = mongoose.model<ContactProps>('Contact', contactSchema);

export default Contact