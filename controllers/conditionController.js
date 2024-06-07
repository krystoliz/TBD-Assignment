const database = require('../services/database')

exports.createBookCondition = async (req, res) => {
    try{
        if(!req.body.name){
            return res.status(422).json({error:'Name is required'})
        }
        
        const result = await database.pool.query({text: 'INSERT INTO "Condition" ("ConditionName") VALUES ($1) RETURNING *', values: [req.body.name]})
        return res.status(201).json(result.rows[0])
    }catch (error){
        return res.status(500).json({error:error.message})
    }

}

exports.getCondition = async (req, res) => {        try {
    const result = await database.pool.query('SELECT * FROM "Condition"')

    return res.status(200).json(result.rows)
} catch (error){
    return res.status(500).json({error:error.message})
}}