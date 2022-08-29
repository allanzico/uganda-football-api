import { Request, Response } from 'express';
import Player from '../models/Player';

export class PlayerClass {
  
    //create Player
    async addPlayer(req: Request, res: Response) {
        const player = req.body;
        try {
            const newPlayer = await Player.create(player);
            res.status(201).json({ success: true, message: "Player created successfully", data: newPlayer });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //update Player
    async updatePlayer(req: Request, res: Response) {
        const player = req.body;
        const id = req.params.id;
        try {
            const updatedPlayer = await Player.findByIdAndUpdate(id, player);
            res.status(200).json({ success: true, message: "Player updated successfully", data: updatedPlayer });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //delete Player
    async deletePlayer(req: Request, res: Response) {
        const id = req.params.id;
        try {
            await Player.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Player deleted successfully" });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //fetch all Players
    async getPlayers(_req: Request, res: Response) {
        try {
            const players = await Player.find({});
            res.status(200).json({ success: true, message: "Players fetched successfully", data: players });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //fetch Player by id
    async getPlayer(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const player = await Player.findById(id);
            res.status(200).json({ success: true, message: "Player fetched successfully", data: player });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
}