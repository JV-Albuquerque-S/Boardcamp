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

export async function postCategories(req, res){
    const {name} = req.body;
    try{
        if(name===""){
            res.sendStatus(400);
        }
        else{
            const alreadyExist = await db.query(`SELECT * FROM categories WHERE name=$1`, [name]);
            if(!alreadyExist.rows[0]){
                await db.query(`INSERT INTO categories (name) VALUES ($1)`, [name]);
                res.sendStatus(201);
            }
            else{
                res.sendStatus(409);
            }
        }
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}