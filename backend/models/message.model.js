import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  // because of this timestamps field mongodb will automatically create CREATEDAT AND UPDATEDAT fields
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
