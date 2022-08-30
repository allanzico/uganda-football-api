
import express from "express";
import { FixtureClass } from "../controllers/Fixture";

const fixture = new FixtureClass()
const router = express.Router();

// /** 
//  * @openapi
//  * /api/create/player:
//  *  post:
//  *   tags:
//  *   - Player
//  *   summary: Add a new player
//  *   requestBody:
//  *    content:
//  *     application/json:
//  *      schema:
//  *       $ref: '#/components/schemas/Player'
//  *    responses:
//  *     201:
//  *      description: Created a new player
//  *     500:
//  *      description: Internal server error
//  */

// router.post("/create/player", player.addPlayer);

// /** 
//  * @openapi 
//  * /api/update/player/{id}:
//  *   put:
//  *     tags:
//  *      - Player
//  *     summary: update a player
//  *     requestBody:
//  *      required: true
//  *      content:
//  *       application/json:
//  *          schema:
//  *              $ref: '#/components/schemas/Player'
//  *     parameters:
//  *     - in: path
//  *       name: id
//  *       schema:
//  *        type: string
//  *       required: true
//  *       description: id of the player to update
//  *     responses:
//  *      200:
//  *       description: Success
//  *      400:
//  *       description: Bad request
//  *      404:
//  *       description: Not found
//  *      500:
//  *       description: Internal server error 
//  */
// router.put("/update/player/:id", player.updatePlayer);

// /** 
//  * @openapi 
//  * /api/delete/player/{id}:
//  *   delete: 
//  *     tags:
//  *      - Player
//  *     summary: Delete single player
//  *     parameters:
//  *     - in: path
//  *       name: id
//  *       schema:
//  *        type: string
//  *       required: true
//  *       description: id of the player to delete
//  *     responses:  
//  *       200: 
//  *        description: Success
//  *       404:
//  *         description: Not found
//  *       500:
//  *         description: Internal server error  
//  */

// router.delete("/delete/player/:id", player.deletePlayer);

// /** 
//  * @openapi 
//  * /api/players:
//  *   get: 
//  *     tags:
//  *      - Player
//  *     summary: Get all players
//  *     responses:  
//  *       200: 
//  *         description: Success
//  *       500:
//  *        description: Internal server error 
//  */
//  router.get(
//     "/players",
//     player.getPlayers
// );

// /** 
//  * @openapi 
//  * /api/players/{id}:
//  *   get: 
//  *     tags:
//  *      - Player
//  *     summary: Get single player by id
//  *     parameters:
//  *     - in: path
//  *       name: id
//  *       schema:
//  *       type: string
//  *       required: true
//  *       description: id of the player to get
//  *     responses:  
//  *       200: 
//  *         description: Success
//  *       404:
//  *         description: Not found
//  *       500:
//  *         description: Internal server error 
//  */

//  router.get(
//     "/players/:id",
//     player.getPlayer
// )

module.exports = router;