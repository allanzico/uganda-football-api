
import express from "express";
import { CompetitionClass } from "../controllers/CompetitionClass";

const competiton = new CompetitionClass()
const router = express.Router();

/** 
 * @openapi 
 * /api/create/competition:
 *   post: 
 *     tags:
 *      - Competition
 *     summary: Add Competition
 *     requestBody:
 *      content:
 *       application/json:
 *          schema:
 *              $ref: '#/components/schemas/Competition'
 *     responses:  
 *       201: 
 *         description: Competition created successfully
 *       500:
 *        description: Internal server error 
 *   
 */
router.post("/create/competition", competiton.addCompetition);

/** 
 * @openapi 
 * /api/update/competition/{id}:
 *   put:
 *     tags:
 *      - Competition
 *     summary: Update Competition
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *          schema:
 *              $ref: '#/components/schemas/Competition'
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: string
 *       required: true
 *       description: id of the competition to update
 *     responses:
 *      200:
 *       description: Success
 *      400:
 *       description: Bad request
 *      404:
 *       description: Not found
 *      500:
 *       description: Internal server error
 *   
 */
router.put("/update/competition/:id", competiton.updateCompetition);

/** 
 * @openapi 
 * /api/delete/competition/{id}:
 *   delete: 
 *     tags:
 *      - Competition
 *     summary: Delete single competition
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: string
 *       required: true
 *       description: id of the competition to delete
 *     responses:  
 *       200: 
 *        description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error 
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
 * /api/competitions/{id}:
 *   get: 
 *     tags:
 *      - Competition
 *     summary: Get single competition by ID
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *       type: string
 *       required: true
 *       description: id of the competition to get
 *     responses:  
 *       200: 
 *         description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error 
 */
router.get(
    "/competitions/:id",
    competiton.getCompetition
)


module.exports = router;
