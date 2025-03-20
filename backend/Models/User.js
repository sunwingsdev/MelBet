const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: "",
    },
    surname: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    country: {
      type: String,
      required: true,
      default: "Bangladesh", // Default country
    },
    currency: {
      type: String,
      required: true,
      default: "BDT", // Default currency
    },
    phoneNumber: {
      type: String,
      default: null,
    },
    password:{
      type: String,
      required: true,
    },
    player_id:{
      type: String,
      required: true,
    },
    promoCode: {
      type: String,
      default: null,
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ["active", "banned", "deactivated"],
      default: "active", // Default status is active
    },
    balance: {
      type: Number,
      default: 0,
    },
    deposit: {
      type: Number,
      default: 0,
    },
    withdraw: {
      type: Number,
      default: 0,
    },
    bonusSelection:{
      type:String,
      default:""
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Restricted to valid roles
      default: "user",
    },
  },
  { timestamps: true }
);

const user_model = mongoose.model("User", UserSchema);
module.exports = user_model;
