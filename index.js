import dotenv from "dotenv";
import mongoose from "mongoose";
import { person } from "./schemas/person.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Creation d'une personne selon le prototype donne
person.create({
  nom: "John",
  prenom: "lennon",
  age: 30,
  favFood: ["pizza", "sushi"],
});

// Creation de plusieurs enregistrement en utilisant arrayofpeople et .create()
const arrayOfPeople = [
  { nom: "Jane", age: 25, favFood: ["tacos", "salad"] },
  { nom: "Bob", age: 40, favFood: ["steak", "mashed potatoes"] },
];
person.create(arrayOfPeople);

//effectuer une recherche en utilisant person.find()
person.find();
// trouver toute les personnes ayant un nom donne
person.find({ nom: "John" });

// trouver une personne qui a un certain aliment comme favoris
person.findOne({ favFood: "pizza" });

// trouver une personne par son ID
person.findById();

// Effectuer de nouvelles mises à l'aide de model.findOneAndUpdate()
person.findOneAndUpdate({ nom: "John" }, { age: 20 }, { new: true });

//Supprimer de nombreux documents avec model.remove()
person.deleteOne({ nom: "Mary" });

// Enchaîner des aides à la recherche pour affiner les résultats de la recherche
person
  .find({ favFood: "burritos" })
  .sort({ nom: 1 })
  .limit(2)
  .select("-age")
  .exec();
