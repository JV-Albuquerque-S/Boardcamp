import db from "../db.js";

export async function postCustomers(req, res){
    const {name, phone, cpf, birthday} = req.body;
    
    try{
        const cpfExist = await db.query(`SELECT * FROM customers WHERE cpf=$1`, [cpf]);
        if(cpfExist.rows[0]){
            res.sendStatus(409);
        }
        else{
            await db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)`, [name, phone, cpf, birthday]);
            res.sendStatus(201)
        }
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getCustomers(req, res){
    const {cpf} = req.query;
    let filter = "%";
    if(cpf){
        filter = cpf+filter;
    }

    try{
        const costumers = await db.query(`SELECT * FROM customers WHERE LOWER(customers.cpf) LIKE $1`, [filter]);
        res.send(costumers.rows).status(200);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}

export async function getOneCustomer(req, res){
    const {id} = req.params;

    try{
        const costumer = await db.query(`SELECT * FROM customers WHERE id=$1`, [id]);
        costumer.rows[0] ? res.send(costumer.rows[0]).status(200) : res.sendStatus(404);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}