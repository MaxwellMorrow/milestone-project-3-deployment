const router = require('express').Router();
const pool = require('../models/db');



router.get('/', async (req, res) => {
    try {
        // const { email, firstName, lastName } = req.body;
        const items = await pool.query("SELECT * FROM inventory");
        console.log(items)
        res.json(items.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error!')
    }
});


router.post('/', async (req, res) => {
    try {
        const { itemname, category, supplier, uniteach, paronhand } = req.body;
        const newItem = await pool.query(
            "INSERT INTO inventory(itemname, category, supplier, uniteach, paronhand) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [itemname, category, supplier, uniteach, paronhand]
            );
        console.log(newItem)
        res.json(newItem.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error!')
    }
});

// Read Route for a single item to update or delete that one item in particular
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const item = await pool.query(
            "SELECT * FROM inventory WHERE item_id = $1",
            [id]
        );
            res.json(item.rows[0]); 

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});
    

// UPDATE ROUTE - (PUT route)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { itemname, category, supplier, paronhand, uniteach, orderamount } = req.body;
        const updateItem = await pool.query(
            "UPDATE inventory SET itemname=$2, category=$3, supplier=$4, paronhand=$5, uniteach=$6, orderamount=$7 WHERE item_id = $1",
            [id, itemname, category, supplier, paronhand, uniteach, orderamount] 
        );
            res.json('Item was updated!') // returns response of json that logs in the terminal ('Stock was UPDATED!').
            console.log(res.json())

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});
    

// DELETE ROUTE
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteItem = await pool.query(
            "DELETE FROM inventory WHERE item_id = $1",
            [id]
        );

            res.json("Item was DELETED!")

    } catch (err) {
        res.status(404).send('Error 404 PAGE NOT FOUND!');
    }
});
    



module.exports = router;
