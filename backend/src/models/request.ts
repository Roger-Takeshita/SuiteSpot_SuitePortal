import mongoose from 'mongoose';
import * as type from '../utils/types/types';

const Schema = mongoose.Schema;

const requestSchema = new Schema(
    {
        unitNumber: {
            type: Number,
            required: true,
            trim: true,
        },
        name: {
            type: String,
            require: true,
            trim: true,
        },
        email: {
            type: String,
            require: true,
            trim: true,
        },
        serviceType: {
            type: String,
            enum: ['electrical', 'general', 'pest-control', 'plumping'],
            require: true,
        },
        summary: {
            type: String,
            required: true,
            trim: true,
        },
        details: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

requestSchema.set('toJSON', {
    transform: function (_, ret) {
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
    },
});

export default mongoose.model<type.UserI>('User', requestSchema);
