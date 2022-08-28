import mongoose from "mongoose";

const { Schema } = mongoose;

/** 
 * @openapi 
 * components:
 *   schemas: 
 *     createCompetition:
 *      type: object
 *      required:
 *       - name
 *       - startDate
 *       - endDate
 *       - location
 *      properties:
 *       name:
 *        type: string
 *        description: Name of the competition
 *        default: "UEFA Champions League"
 *       startDate:
 *        type: string
 *        format: date-time
 *        description: Start date of the competition
 *       endDate:
 *        type: string
 *        format: date-time
 *        description: End date of the competition
 *       location:
 *        type: string
 *        description: Location of the competition
 * 
 */

const CompetitionModel = new Schema(
    {
        name: {
            type: String,
            required: [true, "please provide a competition name"],
        },
        startDate: {
            type: Date,
            required: [true, "please provide a start date"],
        },
        endDate: {
            type: Date,
            required: [true, "please provide an end date"],
        },
        location: {
            type: String,
            required: [true, "please provide a location"],
        },
        description: {
            type: String,
        }
    },
    { timestamps: true }
);



export default mongoose.model("Competition", CompetitionModel);

