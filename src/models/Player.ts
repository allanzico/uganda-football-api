import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

/** 
 * @openapi 
 * components:
 *   schemas: 
 *     Player:
 *      type: object
 *      required:
 *       - firstName
 *       - lastName
 *      properties:
 *       firstName:
 *        type: string
 *        description: First name of the player
 *        example: "Cristiano"
 *       lastName:
 *        type: string
 *        description: Last name of the player
 *        example: "Ronaldo"
 *       mainPosition:
 *        type: objectId
 *        description: id of main position of the player
 *        example: "65934353453TAFG7DG"
 *       positions:
 *        type: array
 *        description: Ids of positions this player can play
 *        example: ["65934353453TAFG7DG", "65934353453TAFG7DG"]
 *       team:
 *        type: objectId
 *        description: id of the team this player belongs to
 *        example: "65934353453TAFG7DG"
 *       dateOfBirth:
 *        type: string
 *        format: date-time
 *        description: Date of birth of the player
 *        example: "2020-01-01T00:00:00.000Z"
 *       subPosition:
 *        type: array
 *        description: Ids of the sub positions this player can play
 *        example: ["65934353453TAFG7DG", "65934353453TAFG7DG"]
 *       height:
 *        type: number
 *        description: Height of the player in cm
 *        example: 180
 */

const PlayerModel = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "please provide a first name"],
        },
        lastName: {
            type: String,
            required: [true, "please provide a last name"],
        },
        mainPosition: {
            type: ObjectId,
            ref: "Position",
            required: [true, "please provide a main position"],
        },
        subPositions: {
            type: [ObjectId],
            ref: "Position.subPositions",
        },
        positions: {
            type: [ObjectId],
            ref: "Position",
        },
        competitions:{
            type: [ObjectId],
            ref: "Competition",
        }
    },
    { timestamps: true }
);

export default mongoose.model("Player", PlayerModel);

