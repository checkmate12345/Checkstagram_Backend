import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  mediaUrl: { type: String, required: true },
  mediaType: { type: String, enum: ['image', 'video'], required: true }
}, { _id: false });

const feedSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medias: { type: [mediaSchema], required: true },
  description: { type: String, default: null },
  likes: { type: String, default: null },
  comments: { type: String, default: null }
}, { 
  timestamps: true,
  versionKey: false
});

export default mongoose.models.Feed || mongoose.model('Feed', feedSchema);