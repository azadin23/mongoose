const ParticipantsModels = require("../models/participant");

class ParticipantsController {

            static async createNewPar(req, res){


                try{
                    const body = req.body;


                    const name = body.name;
                    const dateOfBirth = body.dateOfBirth;
                    const email = body.email;
                    const phone = body.phone;
                    const courses = body.courses;

                    const participants = new ParticipantsModels({name: name, dateOfBirth: dateOfBirth, email: email, phone: phone, courses: courses});


                    const saved = await participants.save()
                    res.status(201).send(saved);
                }catch(error){
                    res.status(500).send({err: error})
                }
            }


            static async getPar(req, res){
                try{
                    const ParList = await ParticipantsModels.find().populate("courses");
                    res.status(200).send(ParList)
                }catch(error){
                    res.status(500).send({err:error})
                }
            }


            static async getParById(req,res){
                try{
                    const id = req.params.id


                    const ParList = await ParticipantsModels.findOne({_id:id}).populate("courses");
                    res.status(200).send(ParList);
                }catch(error){
                    res.status(500).send({err: error})
                }
            }


            static async updatePar(req, res){
                try{
                    const id = req.params.id

                    const body = req.body;
                    const name = body.name;
                    const dateOfBirth = body.dateOfBirth;
                    const email = body.email;
                    const phone = body.phone;
                    const courses = body.courses;

                    await ParticipantsModels.updateOne({_id:id}, {name:name, dateOfBirth:dateOfBirth, email:email, phone:phone, courses:courses});
                    res.status(200).send({message: "Success"})
                }catch(error){
                    res.status(500).send({err: error})
                }
            }


            static async deletePar(req, res){
                try{
                    const id = req.params.id

                    await ParticipantsModels.deleteOne({_id:id});
                    res.status(200).send({message: "Deleted"})

                }catch(error){
                    res.status(500).send({er: error})
                }
            }


}



module.exports = ParticipantsController