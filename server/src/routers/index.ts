import { Express } from "express"; 
import { todoRoute } from "./todoRote";
const rootRoute = (app:Express)=>{
    todoRoute(app);

}
export default rootRoute;