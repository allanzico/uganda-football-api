import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

/** 
 * @openapi 
 * components:
 *   schemas: 
 *     Team:
 *      type: object
 *      required:
 *       - name
 *       - location
 *      properties:
 *       name:
 *        type: string
 *        description: Name of the team
 *        example: "Arsenal FC"
 *       shortName:
 *        type: string
 *        description: the short name of the team
 *        example: "ARS"
 *       slogan:
 *        type: string
 *        description: the slogan of the team
 *        example: "We are the best"
 *       location:
 *        type: string
 *        description: Location of the team
 *        example: "London"
 */

const TeamModel = new Schema(
    {
        name: {
            type: String,
            required: [true, "please provide a team name"],
        },
        shortName: {
            type: String,
        },
        location: {
            type: String,
            required: [true, "please provide a location"],
        },
        slogan: {
            type: String,
        },
        competitions:{
            type: [ObjectId],
            ref: "Competition",
        }
    },
    { timestamps: true }
);

export default mongoose.model("Team", TeamModel);

