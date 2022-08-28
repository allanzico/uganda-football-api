
import express from "express";
import { CompetitionClass } from "../controllers/CompetitionClass";

const competiton = new CompetitionClass()
const router = express.Router();

 

/** 
 * @openapi 
 * /delete/competition/:id:
 *   post: 
 *     tags:
 *      - Competition
 *     summary: Add Competition
 *     requestBody:
 *      content:
 *       application/json:
 *     schema:
 *        $ref: '#/components/schemas/createCompetition'
 *     responses:  
 *       200: 
 *         description: Success
 *       500:
 *        description: Internal server error 
 *   
 */
router.post("/create/competition", competiton.addCompetition);

//update single competition
router.put("/update/competition/:id", competiton.updateCompetition);

/** 
 * @openapi 
 * /delete/competition/:id:
 *   delete: 
 *     tags:
 *      - Competition
 *     summary: Delete single competition
 *     responses:  
 *       200: 
 *         description: Success
 *       500:
 *        description: Internal server error 
 *   
 */
router.delete("/delete/competition/:id", competiton.deleteCompetition);

/** 
 * @openapi 
 * /api/competitions:
 *   get: 
 *     tags:
 *      - Competition
 *     summary: Get all competitions
 *     responses:  
 *       200: 
 *         description: Success
 *       500:
 *        description: Internal server error 
 *   
 */
router.get(
    "/competitions",
    competiton.getCompetitions
);

/** 
 * @openapi 
 * /api/competitions/:id:
 *   get: 
 *     tags:
 *      - Competition
 *     summary: Get single competition
 *     responses:  
 *       200: 
 *         description: Success
 *       500:
 *        description: Internal server error 
 *   
 */
router.get(
    "/competitions/:id",
    competiton.getCompetition
)


module.exports = router;
