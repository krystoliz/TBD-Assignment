const database = require('../services/database')

exports.getWishlist = async (req, res) => {
    try {
        const result = await database.pool.query('SELECT w."WishlistID", w."BookID",(SELECT ROW_TO_JSON(WishlistAcc_obj) FROM (SELECT "CustomerID", "Username","Name"FROM "CustomerAcc" WHERE "CustomerID" = w."WishlistID") WishlistAcc_obj) AS "CustomerAcc" FROM "Wishlist_Book" w')

        return res.status(200).json(result.rows)
    } catch (error){
        return res.status(500).json({error:error.message})
    }

}

exports.addWishlist = async (req, res) => {
    try{
        const result = await database.pool.query({text:'INSERT INTO "Wishlist_Book" ("WishlistID", "BookID") VALUES ($1, $2)', values: [req.body.name, req.body.desc]})

        return res.status(200).json(result.rows[0])

    } catch(error){
        return res.status(500).json({error:error.message})
    }
}