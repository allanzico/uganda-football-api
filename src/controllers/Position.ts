import { Request, Response } from 'express';
import Position from '../models/Position';

export class PositionClass {

    //create Position
    async addPosition(req: Request, res: Response) {
        const position = req.body;
        try {
            const newPosition = await Position.create(position);
            res.status(201).json({ success: true, message: "Position created successfully", data: newPosition });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //update Position
    async updatePosition(req: Request, res: Response) {
        const position = req.body;
        const id = req.params.id;
        try {
            const updatedPosition = await Position.findByIdAndUpdate(id, position);
            res.status(200).json({ success: true, message: "Position updated successfully", data: updatedPosition });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //delete Position
    async deletePosition(req: Request, res: Response) {
        const id = req.params.id;
        try {
            await Position.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Position deleted successfully" });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //fetch all Positions
    async getPositions(_req: Request, res: Response) {
        try {
            const positions = await Position.find({});
            res.status(200).json({ success: true, message: "Positions fetched successfully", data: positions });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //fetch Position by id
    async getPosition(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const position = await Position.findById(id);
            res.status(200).json({ success: true, message: "Position fetched successfully", data: position });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }  
}