const InstructorsModels = require("../models/instructor");

class InstructorController {

            static async createNewIns(req, res){


                try{
                    const body = req.body;


                    const name = body.name;
                    const dateOfBirth = body.dateOfBirth;
                    const location = body.location;
                    const instructor = new InstructorsModels({name: name, dateOfBirth: dateOfBirth, location:location});


                    const saved = await instructor.save()
                    res.status(201).send(saved);
                }catch(error){
                    res.status(500).send({err: error})
                }
            }


            static async getIns(req, res){
                try{
                    const InsList = await InstructorsModels.find();
                    res.status(200).send(InsList)
                }catch(error){
                    res.status(500).send({err:error})
                }
            }


            static async getInsById(req,res){
                try{
                    const id = req.params.id


                    const InsList = await InstructorsModels.findOne({_id:id});
                    res.status(200).send(InsList);
                }catch(error){
                    res.status(500).send({err: error})
                }
            }


            static async updateIns(req, res){
                try{
                    const id = req.params.id

                    const body = req.body
                    const name = body.name
                    const dateOfBirth = body.dateOfBirth
                    const location = body.location

                    await InstructorsModels.updateOne({_id:id}, {name:name, dateOfBirth:dateOfBirth, location:location});
                    res.status(200).send({message: "Success"})
                }catch(error){
                    res.status(500).send({err: error})
                }
            }


            static async deleteIns(req, res){
                try{
                    const id = req.params.id

                    await InstructorsModels.deleteOne({_id:id});
                    res.status(200).send({message: "Deleted"})

                }catch(error){
                    res.status(500).send({er: error})
                }
            }


}



module.exports = InstructorController