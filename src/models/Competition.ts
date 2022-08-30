import mongoose from "mongoose";

const { Schema } = mongoose;

/** 
 * @openapi 
 * components:
 *   schemas: 
 *     Competition:
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
 *        example: "UEFA Champions League"
 *       startDate:
 *        type: string
 *        format: date-time
 *        description: Start date of the competition
 *        example: "2020-01-01T00:00:00.000Z"
 *       endDate:
 *        type: string
 *        format: date-time
 *        description: End date of the competition
 *        example: "2020-01-01T00:00:00.000Z"
 *       location:
 *        type: string
 *        description: Location of the competition
 *        example: "Berlin"
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

