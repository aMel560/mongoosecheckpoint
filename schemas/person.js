import mongoose from "mongoose";
//on est entrain de creer le modele de document que schemas va recevoir avant de le verifier
const personSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
    },
    age: {
      type: Number,
    },
    favFood: {
      type: [{ type: String }],
    },
  },
  { timestamps: true }
);
export const person = mongoose.model("person", personSchema);
