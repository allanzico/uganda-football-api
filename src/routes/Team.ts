
import express from "express";
import { TeamClass } from "../controllers/Team";

const team = new TeamClass()
const router = express.Router();

/** 
 * @openapi 
 * /api/create/team:
 *   post: 
 *     tags:
 *      - Team
 *     summary: Add a new team
 *     requestBody:
 *      content:
 *       application/json:
 *          schema:
 *              $ref: '#/components/schemas/Team'
 *     responses:  
 *       201: 
 *         description: Team created successfully
 *       500:
 *        description: Internal server error
 *   
 */
router.post("/create/team", team.addTeam);

/** 
 * @openapi 
 * /api/update/team/{id}:
 *   put:
 *     tags:
 *      - Team
 *     summary: update a team
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *          schema:
 *              $ref: '#/components/schemas/Team'
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: string
 *       required: true
 *       description: id of the team to update
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
router.put("/update/team/:id", team.updateTeam);

/** 
 * @openapi 
 * /api/delete/team/{id}:
 *   delete: 
 *     tags:
 *      - Team
 *     summary: Delete single team
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: string
 *       required: true
 *       description: id of the team to delete
 *     responses:  
 *       200: 
 *        description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error 
 *   
 */
router.delete("/delete/team/:id", team.deleteTeam);

/** 
 * @openapi 
 * /api/teams:
 *   get: 
 *     tags:
 *      - Team
 *     summary: Get all teams
 *     responses:  
 *       200: 
 *         description: Success
 *       500:
 *        description: Internal server error 
 *   
 */
router.get(
    "/teams",
    team.getTeams
);

/** 
 * @openapi 
 * /api/teams/{id}:
 *   get: 
 *     tags:
 *      - Team
 *     summary: Get single team by id
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *       type: string
 *       required: true
 *       description: id of the team to get
 *     responses:  
 *       200: 
 *         description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error 
 */
router.get(
    "/teams/:id",
    team.getTeam
)


module.exports = router;
