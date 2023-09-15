import express from "express";
import asyncHandler from "express-async-handler";
import Person from "../Model/PersonModel.js";

const personRouter = express.Router();
// CREATE
personRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, gender} = req.body;
    const age = Number(req.body.age);
    const personExist = await Person.findOne({ name });
    if (personExist) {
      res.status(400);
      throw new Error("Person name already exist");
    } else {
        // String validation
        if(typeof name !== "string" || !name) {
            res.status(404);
            throw new Error("Name should be of type string");
        } else if(typeof gender !== "string" || !gender) {
            res.status(404);
            throw new Error("Gender should be of type string");
        } else if(typeof age !== "number" || !age) {
            res.status(404);
            throw new Error("Age should be of type number");
        } else {
            const person = new Person({
                name,
                gender,
                age,
              });
              if (person) {
                const addedperson = await person.save();
                res.status(201).json(addedperson);
              } else {
                res.status(400);
                throw new Error("Invalid person name");
              }
        }
    }
    
  })
);
// READ
personRouter.get(
    "/:user_id",
    asyncHandler(async (req, res) => {
        const person = await Person.findById(req.params.user_id);
        if (person) {
            res.json(person);
        } else {
            res.status(404);
            throw new Error("Person not Found");
        }
    })
  );
  // UPDATE
personRouter.put(
    "/:user_id",
    asyncHandler(async (req, res) => {
        const { name, gender } = req.body;
        const age = Number(req.body.age);
        const person = await Person.findById(req.params.user_id);
        //String validation
        if(name && typeof name !== "string") {
            res.status(404);
            throw new Error("Name should be of type string");
        } else if(gender && typeof gender !== "string") {
            res.status(404);
            throw new Error("Gender should be of type string");
        } else if(age && typeof age !== "number") {
            res.status(404);
            throw new Error("Age should be of type number");
        } else {
            if (person) {
                person.name = name || person.name;
                person.gender = gender || person.gender;
                person.age = age || person.age;

                const updatedPerson = await person.save();
                res.json(updatedPerson);
            } else {
                res.status(404);
                throw new Error("Person not found");
            }
        }
      
    })
  );
  // DELETE
personRouter.delete(
    "/:user_id",
    asyncHandler(async (req, res) => {
        const person = await Person.findById(req.params.user_id);
        if (person) {
            await Person.deleteOne({ _id: person._id });
            res.json({ message: "Person deleted" });
        } else {
            res.status(404);
            throw new Error("Person not Found");
        }
      
    })
  );

export default personRouter;
