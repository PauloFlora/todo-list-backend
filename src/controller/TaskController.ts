import { Request, Response } from 'express';
import db from '../database/models';

export default class TasksController {
  public static async getAll(_req: Request, res: Response): Promise<Response> {
    const tasks = await db.Tasks.findAll();
    return res.status(200).json(tasks);
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const { newTask } = req.body;
    const response = await db.Tasks.create({ task: newTask, status: 'Pendente' })
    return res.status(201).json({ task: newTask, status: 'Pendente' });
  }

  public static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await db.Tasks.destroy({ where: { id } })
    return res.status(200).json({ message: `Task with id:${id} deleted` });
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { task, status } = req.body;

    const statusArray = [ 'Pendente', 'Em andamento', 'Pronto' ];
    if (statusArray.find((s) => s === status)) {
      await db.Tasks.update({ task, status }, { where: { id } });
      return res.status(200).json({ message: `Task with id:${id} updated` });
    } else {
      return res.status(4001).json({ message: 'Invalid Status'});
    }
  }
}