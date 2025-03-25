
import express from "express";
const router = express.Router();
import { getSchedules, getSchedule, createSchedule, updateSchedule, deleteSchedule  } from "../Controllers/scheduleController.js";


router.get('/',getSchedules);
router.get("/:id", getSchedule);
router.post("/", createSchedule);
router.put("/:id", updateSchedule);
router.delete("/:id", deleteSchedule);


export default router;