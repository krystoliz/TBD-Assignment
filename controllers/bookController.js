const database = require('../services/database')

exports.getAllBook = async (req, res) => {
    try {
        const result = await database.pool.query('SELECT * FROM "Book"')

        return res.status(200).json(result.rows)
    } catch (error){
        return res.status(500).json({error:error.message})
    }
}

exports.updateBook = async (req, res) => {
    try{
        const result = await database.pool.query({
            text: 'UPDATE "Book" SET "BookName" = $1 WHERE "BookID" = $2 RETURNING *', values: [req.body.name, req.params.BookID]
        })

        return res.status(200).json(result.rows[0])
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}
