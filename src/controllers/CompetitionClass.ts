import Competition from "../models/Competition";
import { Request, Response } from 'express';

export class CompetitionClass {

    //add single competiton to the database
    async addCompetition(req: Request, res: Response) {
        const competition = req.body;
        try {
            const newCompetition = await Competition.create(competition);
            res.status(201).json({ success: true, message: "Competition created successfully", data: newCompetition });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //Update single competition
    async updateCompetition(req: Request, res: Response) {
        const competition = req.body;
        const id = req.params.id;
        try {
            const updatedCompetition = await Competition.findByIdAndUpdate(id, competition);
            res.status(200).json({ success: true, message: "Competition updated successfully", data: updatedCompetition });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //Delete single competition
    async deleteCompetition(req: Request, res: Response) {
        const id = req.params.id;
        try {
            await Competition.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Competition deleted successfully" });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //fetch all competitions
    async getCompetitions(_req: Request, res: Response) {
        try {
            const competitions = await Competition.find({});
            res.status(200).json({ success: true, message: "Competitions fetched successfully", data: competitions });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }

    }

    //fetch single competition
    async getCompetition(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const competition = await Competition.findById(id);
            res.status(200).json({ success: true, message: "Competition fetched successfully", data: competition });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
}


