import db from "../db.js";

export async function  postGames(req, res){
    const {name, image, stockTotal, categoryId, pricePerDay} = req.body;
    try{
        const categoryExist = await db.query(`SELECT * FROM categories WHERE id=$1`, [categoryId]);
        const alreadyExist = await db.query(`SELECT * FROM games WHERE name=$1`, [name]);
        if(name==="" || stockTotal<=0 || pricePerDay<=0 || !categoryExist.rows[0]){
            res.sendStatus(400);
        }
        else if(alreadyExist.rows[0]){
            res.sendStatus(409);
        }
        else{
            await db.query(`INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5)`, [name, image, stockTotal, categoryId, pricePerDay]);
            res.sendStatus(201);
        }
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}