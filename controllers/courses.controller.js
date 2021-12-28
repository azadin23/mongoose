const CoursesModels = require("../models/courses");

class CoursesController {

    

            static async helloWorld(req, res){
                res.json({
                    message:" you can see the documentation on Github Repo"
                })
            }


            static async createNewCour(req, res){


                try{
                    const body = req.body;
                    
                    const title = body.title;
                    const description = body.description;
                    const scheduledDateTime = body.scheduledDateTime
                    const instructor = body.instructor;

                    const courses = new CoursesModels({title: title, description: description, scheduledDateTime: scheduledDateTime, instructor: instructor})
                     



                    const saved = await courses.save()
                    res.status(201).send(saved);
                }catch(error){
                    res.status(500).send({err: error})
                }
            }


            static async getCour(req, res){
                try{
                    const CourList = await CoursesModels.find().populate("instructor").exec();
                    res.status(200).send(CourList)
                }catch(error){
                    res.status(500).send({err:error})
                }
            }


            static async getCourById(req,res){
                try{
                    const id = req.params.id


                    const CourList = await CoursesModels.findOne({_id:id}).populate("instructor").exec();
                    res.status(200).send(CourList);
                }catch(error){
                    res.status(500).send({err: error})
                }
            }


            static async updateCour(req, res){
                try{
                    const id = req.params.id
                    
                    const body = req.body

                    const title = body.title
                    const description = body.description
                    const instructor = body.instructor
                    const scheduledDateTime = body.scheduledDateTime

                    await CoursesModels.updateOne({_id:id}, {title:title, decription:description, instructor:instructor, scheduledDateTime:scheduledDateTime});
                    res.status(200).send({message: "Success"})
                }catch(error){
                    res.status(500).send({err: error})
                }
            }


            static async deleteCour(req, res){
                try{
                    const id = req.params.id

                    await CoursesModels.deleteOne({_id:id});
                    res.status(200).send({message: "Deleted"})

                }catch(error){
                    res.status(500).send({er: error})
                }
            }


}



module.exports = CoursesController