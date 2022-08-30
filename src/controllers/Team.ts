import { Request, Response } from 'express';
import Team from '../models/Team';

export class TeamClass {

    //Create Team
    async addTeam(req: Request, res: Response) {
        const team = req.body;
        try {
            const newTeam = await Team.create(team);
            res.status(201).json({ success: true, message: "Team created successfully", data: newTeam });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //Update Team
    async updateTeam(req: Request, res: Response) {
        const team = req.body;
        const id = req.params.id;
        try {
            const updatedTeam = await Team.findByIdAndUpdate(id, team);
            res.status(200).json({ success: true, message: "Team updated successfully", data: updatedTeam });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //Delete Team
    async deleteTeam(req: Request, res: Response) {
        const id = req.params.id;
        try {
            await Team.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Team deleted successfully" });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //Fetch all Teams
    async getTeams(_req: Request, res: Response) {
        try {
            const teams = await Team.find({});
            res.status(200).json({ success: true, message: "Teams fetched successfully", data: teams });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //Fetch single Team
    async getTeam(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const team = await Team.findById(id);
            res.status(200).json({ success: true, message: "Team fetched successfully", data: team });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
}