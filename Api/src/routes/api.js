import express from "express";
import students from "../domains/students/ApiRoute";
import orders from "../domains/orders/ApiRoute";
import schools from "../domains/schools/ApiRoute";
import feedbacks from "../domains/feedbacks/ApiRoute";
import monitorings from "../domains/monitorings/ApiRoute";
import profile from "../domains/profile/ApiRoute";
import courses from "../domains/complementary_courses/ApiRoute";
import collaborators from "../domains/collaborators/ApiRoute";
import timeline from "../domains/timeline/ApiRoute";
import grade from "../domains/grade/ApiRoute";
import responsibles from "../domains/responsibles/ApiRoute";


const router = express.Router();

router.use('/students', students);
router.use('/orders', orders);
router.use('/schools', schools);
router.use('/feedbacks', feedbacks);
router.use('/monitorings', monitorings);
router.use('/profile', profile);
router.use('/courses', courses);
router.use('/collaborators', collaborators);
router.use('/timeline', timeline);
router.use('/disciplines', grade);
router.use('/responsibles', responsibles);

export default router;
