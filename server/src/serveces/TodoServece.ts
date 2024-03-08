
import { connection } from "../mysql.config";

class TodoService {
    private db: any;
    constructor(){
        this.db= connection();

    }
    /** ADD TASK*/
    async addTask(todo : any){
        return new Promise((resolve,reject)=>{
        this.db.query("INSERT INTO tasks SET ?",
        todo,
        (err:Error,result:any)=>{
            if(err){
                reject(err);

            }
            resolve(result);

        });

        });
    }
    /*GET TASL*/
    async getTask(){
        return new Promise((resolve,reject)=>{
            this.db.query("SELECT * FROM tasks",(err:Error,result:any)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    /**GET TASK BY ID */
    async getTaskById(id: string) {
        return new Promise((resolve, reject) => {
          this.db.query(
            "SELECT * FROM tasks WHERE id = ?",
            id,
            (err: Error, result: any) => {
              if (err) {
                reject(err);
              }
              resolve(result);
            }
          );
        });
      }
    /**UPPDATE TASK */
    async updateTask(data : any, id: string) {
      return new Promise((resolve, reject)=>{
        this.db.query("UPDATE tasks SET ? WHERE id = ?",
        [{...data}, id], (err: Error, result: any) => {
          if(err){
            reject(err);
          }
          resolve(result);
        }
        );

      })

    }
    
   /**DELETE TASK */
    async deleteTask(id: string) {
      return new Promise((resolve, reject)=>{
        this.db.query("DELETE FROM tasks WHERE id = ?",
        id, (err: Error, result: any) =>{
          if(err){
            reject(err)

          }
          resolve(result);
        
      });
      
    })
  }
}
export const todoService = new TodoService();