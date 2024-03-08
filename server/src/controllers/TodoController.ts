import { Request,Response } from "express";
import { todoService } from "../serveces/TodoServece";


export class TodoController {
    /* create*/

   async addTask(req:Request, res: Response){
    try {
        const result =await todoService.addTask(req.body);
        res.status(201).json({
            message :"added successfully",
        });
        
    } catch (error : any) {

        res.status(500).json({
            message:error.message,

        });
        
    }
   }
   async getTask(req:Request, res: Response){
    try {
        const result =await todoService.getTask();
        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
        
    }

   }
   async getTaskById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result: any = await todoService.getTaskById(id);
      if (result.length === 0) {
        return res.status(404).json({
          message: "not found",
        });
      }
      res.status(200).json(result[0]);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
  async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await todoService.updateTask(req.body,id);
      res.status(200).json({
        message :"uppdate success"
      });
      
    } catch (error) {
      res.status(500).json({
        message:error,
      });
      
    }

  }
  async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await todoService.deleteTask(id);
      res.status(200).json({
        message :"dalete success"
      });

      
    } catch (error) {
      res.status(500).json({
        message : error,
      })  
    }  
  }

}

export const todoController = new TodoController();