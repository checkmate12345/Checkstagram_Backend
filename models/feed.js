import mongoose from "mongoose";

const mediaSchema = new Schema({
  mediaUrl: { type: String, required: true },
  mediaType: { type: String, enum: ['image', 'video'], required: true }
}, { _id: false });

const feedSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  medias: { type: [mediaSchema], required: true },
  description: { type: String, default: null },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model.Feed || mongoose.model('Feed', feedSchema);