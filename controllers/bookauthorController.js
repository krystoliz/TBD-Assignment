const database = require('../services/database')

exports.getBookauthor = async (req, res) => {
    try {
        const result = await database.pool.query('SELECT b."BookName", b."BookPrice", b."LanguageID", (SELECT ROW_TO_JSON(BookAuthor_obj) FROM( SELECT "AuthorID", "BookID" FROM "Book_Author" WHERE "BookID" = b."BookID") BookAuthor_obj) AS "Book_Author" FROM "Book" b')

        return res.status(200).json(result.rows)
    } catch (error){
        return res.status(500).json({error:error.message})
    }

}