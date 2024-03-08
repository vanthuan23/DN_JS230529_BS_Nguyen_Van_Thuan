
import express from 'express';
import RootRoute from "./routers";
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

/** middleware application */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(
    cors({
        origin: "http://localhost:5173",
}));

/**router */
RootRoute(app);



/**init server */

app.listen(8080,() => {
    console.log("rerver is running at http://localhost:8080");
    
});