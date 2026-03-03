import express from "express"
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router()


// create update 
router.post("/", verifyAdmin,  createHotel);

// update
// id:699817bcfca16e6831c70246
// id: 69981ad9479814224b620bc3
router.put("/:id", verifyAdmin, updateHotel);

//delete
router.delete("/:id", verifyAdmin, deleteHotel);

// special routes FIRST
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

// then generic routes
//get
router.get("/:id", getHotel);

// get all
router.get("/", getHotels);

export default router;