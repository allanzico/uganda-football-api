
import express from "express";
import { PositionClass } from "../controllers/Position";

const position = new PositionClass()
const router = express.Router();

/** 
 * @openapi 
 * /api/create/position:
 *   post: 
 *     tags:
 *      - Position
 *     summary: Add a new position
 *     requestBody:
 *      content:
 *       application/json:
 *          schema:
 *              $ref: '#/components/schemas/Position'
 *     responses:  
 *       201: 
 *         description: Created a new position
 *       500:
 *        description: Internal server error
 *   
 */
router.post("/create/position", position.addPosition);

/** 
 * @openapi 
 * /api/update/position/{id}:
 *   put:
 *     tags:
 *      - Position
 *     summary: update a position
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *          schema:
 *              $ref: '#/components/schemas/Position'
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: string
 *       required: true
 *       description: id of the position to update
 *     responses:
 *      200:
 *       description: Success
 *      400:
 *       description: Bad request
 *      404:
 *       description: Not found
 *      500:
 *       description: Internal server error 
 */
router.put("/update/position/:id", position.updatePosition);

/** 
 * @openapi 
 * /api/delete/position/{id}:
 *   delete: 
 *     tags:
 *      - Position
 *     summary: Delete single position
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *        type: string
 *       required: true
 *       description: id of the position to delete
 *     responses:  
 *       200: 
 *        description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error  
 */
router.delete("/delete/position/:id", position.deletePosition);

/** 
 * @openapi 
 * /api/positions:
 *   get: 
 *     tags:
 *      - Position
 *     summary: Get all positions
 *     responses:  
 *       200: 
 *         description: Success
 *       500:
 *        description: Internal server error 
 *   
 */
router.get(
    "/positions",
    position.getPositions
);

/** 
 * @openapi 
 * /api/teams/{id}:
 *   get: 
 *     tags:
 *      - Position
 *     summary: Get single position by id
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *       type: string
 *       required: true
 *       description: id of the position to get
 *     responses:  
 *       200: 
 *         description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error 
 */
    router.get(
        "/positions/:id",
        position.getPosition
    )


module.exports = router;
