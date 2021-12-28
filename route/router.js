const express = require('express')

const ParticipantsController = require("../controllers/participant.controller")
const InstructorController = require("../controllers/instructor.controller")
const CoursesController = require("../controllers/courses.controller")


const router = express.Router()  




//Participants

router.post('/participant', ParticipantsController.createNewPar)
router.get('/participant', ParticipantsController.getPar)
router.get('/participant/:id', ParticipantsController.getParById)
router.patch('/participant/:id', ParticipantsController.updatePar)
router.delete('/participant/:id', ParticipantsController.deletePar)

//Instructor

router.post('/instructor', InstructorController.createNewIns)
router.get('/instructor', InstructorController.getIns)
router.get('/instructor/:id', InstructorController.getInsById)
router.patch('/instructor/:id', InstructorController.updateIns)
router.delete('/instructor/:id', InstructorController.deleteIns)

//Courses

router.get('/', CoursesController.helloWorld)
router.post('/courses', CoursesController.createNewCour)
router.get('/courses', CoursesController.getCour)
router.get('/courses/:id', CoursesController.getCourById)
router.patch('/courses/:id', CoursesController.updateCour)
router.delete('/courses/:id', CoursesController.deleteCour)



module.exports = router