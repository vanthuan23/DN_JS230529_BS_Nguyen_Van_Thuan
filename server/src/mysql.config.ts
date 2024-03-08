import mysql2 from "mysql2";

export const connection = () =>{
    try{
        const createConnection = mysql2.createConnection({
            host: "localhost",
            user: "root",
            password: "thuan2210",
            database: "hekathon",
            port: 3306,

        });
        if(createConnection){
            console.log("connection succeeded");
        }
        return createConnection;
    }catch(error){
        throw new Error(error as any);

    }

};