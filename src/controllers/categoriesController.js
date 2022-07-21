import db from "../db.js";

export async function getCategories(req, res){
    try{
        const result = await db.query("SELECT * FROM categories");
        res.send(result.rows).status(200);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}