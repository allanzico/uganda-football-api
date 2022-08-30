import mongoose from "mongoose";

const { Schema } = mongoose;

/** 
 * @openapi 
 * components:
 *   schemas: 
 *     Position:
 *      type: object
 *      required:
 *       - name
 *       - shortName
 *      properties:
 *       name:
 *        type: string
 *        description: Name of the position
 *        example: "Midfielder"
 *       shortName:
 *        type: string
 *        description: the short name of the position
 *        example: "MID"
 *       subPositions:
 *        type: array
 *        description: sub positions under this position
 *        example: [{positionName: "Left Midfielder", positionShortName: "LM"}, {positionName: "Right Midfielder", positionShortName: "RM"}]
 */

const PositionModel = new Schema(
    {
        name: {
            type: String,
            required: [true, "please provide a positon name"],
        },
        shortName: {
            type: String,
            required: [true, "please provide a short name"],
        },
        subPositions: {
            type: [
                {
                  positionName: {
                    type: String,
                  },
                    positionShortName: {
                        type: String,
                    }
                }
            ],
        },
    },
    { timestamps: true }
);

export default mongoose.model("Position", PositionModel);

