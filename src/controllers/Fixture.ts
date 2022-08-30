import { Request, Response } from 'express';
import Fixture from '../models/Fixture';

export class FixtureClass {

    //create a new fixture
    async addFixture(req: Request, res: Response) {
        const fixture = req.body;
        try {
            const newFixture = await Fixture.create(fixture);
            res.status(201).json({ success: true, message: "Fixture created successfully", data: newFixture });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //update a fixture
    async updateFixture(req: Request, res: Response) {
        const fixture = req.body;
        const id = req.params.id;
        try {
            const updatedFixture = await Fixture.findByIdAndUpdate(id, fixture);
            res.status(200).json({ success: true, message: "Fixture updated successfully", data: updatedFixture });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //delete a fixture
    async deleteFixture(req: Request, res: Response) {
        const id = req.params.id;
        try {
            await Fixture.findByIdAndDelete(id);
            res.status(200).json({ success: true, message: "Fixture deleted successfully" });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //fetch all fixtures
    async getFixtures(_req: Request, res: Response) {
        try {
            const fixtures = await Fixture.find({});
            res.status(200).json({ success: true, message: "Fixtures fetched successfully", data: fixtures });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }

    //fetch fixtures by team id
    async getFixture(req: Request, res: Response) {
        const teamId = req.params.id;
        try {
            const fixtures = await Fixture.findById(teamId);
            res.status(200).json({ success: true, message: "Fixtures fetched successfully", data: fixtures });
        } catch (error: any) {
            res.status(500).json({
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
}