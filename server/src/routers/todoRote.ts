import { Express } from "express";
import { todoController } from "../controllers/TodoController";
import { todo } from "node:test";
export const todoRoute =(app:Express)=>{
    /*CREATE*/
    app.post("/api/v1/tasks",todoController.addTask);
    /*GET ALL*/
    app.get("/api/v1/tasks",todoController.getTask);
    /*GET THEO ID*/
    app.get("/api/v1/task/:id",todoController.getTaskById);
    /*UPPDETE*/
    app.put("/api/v1/task/:id",todoController.updateTask);

    /*DELETE*/
    app.delete("/api/v1/task/:id",todoController.deleteTask);
}