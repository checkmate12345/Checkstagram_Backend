import mongoose from "mongoose";

const checkCategorySchema = new mongoose.Schema({
  risk: [{ type: String, default: null }],      // ["담배", "라이터"]
  brand: [{ type: String, default: null }],     // ["루이비통", "샤넬"]
  it: [{ type: String, default: null }],        // ["애플", "삼성"]
  foodDrink: [{ type: String, default: null }]  // ["코카콜라", "펩시콜라"]
}, { _id: false });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: null },
  checkCategory: {
    type: checkCategorySchema,
    default: () => ({})
  },
  feeds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feed' }]
}, { 
  timestamps: true,
  versionKey: false
});

export default mongoose.models.User || mongoose.model('User', userSchema);