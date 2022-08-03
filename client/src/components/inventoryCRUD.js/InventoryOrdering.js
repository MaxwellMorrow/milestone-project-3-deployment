// imports/dependencies
import React, { useState, useEffect } from 'react';
import AddInventory from './AddInventory';
import EditOrderAmount from './EditOrderAmount'


// functional component
const InventoryOrdering = () => {
// vanilla js section:

    // useState section:
const [ items, setItems] = useState([]);
const [ orderamount, setOrderamount] = useState('');


// helper functions:

    // fetch requests:
const getItems = async () => {
    try {
        const response = await fetch('http://localhost:3070/inventory');
        const jsonData = await response.json();

         console.log(jsonData);
        
            setItems(jsonData);
        
        } catch (err) {
            console.error(err.message);
        }
    };

// useEffect section:
useEffect(() => {
    getItems()
},[])


// delete item function fetch request:
const deleteItem = async (id) => {
    try {
        await fetch(`http://localhost:3070/inventory/${id}`, {
            method: 'DELETE'
        });
    
        setItems(items.filter(item => item.item_id !== id)); 

    } catch (err) {
        console.error(err.message)
    }
};



  return (
    <div>

        <h2>Inventory Ordering List</h2>
        <AddInventory />
        <table class="center table table-sm table-light text-center" style={{border: '1px solid'}}>
            <thead>
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Category</th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Par on Hand</th>
                    <th scope="col">Unit Each</th>  
                    <th scope="col">Order Amount (cases)</th>    
                </tr>
            </thead>
            <tbody class="listItems">
                {items.map(item => (
                    <tr key={item.item_id}>
                        <td>{item.itemname}</td>
                        <td>{item.category}</td>
                        <td>{item.supplier}</td>
                        <td>{item.paronhand}</td>
                        <td>{item.uniteach}</td>
                        <td>{item.orderamount}</td>
                        <td><EditOrderAmount item={item} /></td>
                        <button
                            onClick={() => deleteItem(item.item_id)}
                            type="button"
                            class="btn btn-outline-danger btn-sm options">
                            Delete
                        </button>

                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}



export default InventoryOrdering;