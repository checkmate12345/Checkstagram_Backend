import mongoose from "mongoose";

const checkCategorySchema = new mongoose.Schema({
  risk: [{ type: String }],      // ["담배", "라이터"]
  brand: [{ type: String }],     // ["루이비통", "샤넬"]
  it: [{ type: String }],        // ["애플", "삼성"]
  foodDrink: [{ type: String }]  // ["코카콜라", "펩시콜라"]
}, { _id: false });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  profileImage: { type: String },
  checkCategory: {
    type: checkCategorySchema,
    default: () => ({})
  },
  feeds: [{ type: Schema.Types.ObjectId, ref: 'Feed' }]
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);