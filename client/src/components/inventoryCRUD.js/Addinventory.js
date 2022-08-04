// imports/dependencies
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// functional component
const AddInventory = () => {
// vanilla js section

    // useState section
const [show, setShow] = useState(false);

const [itemname, setItemname] = useState('');
const [category, setCategory] = useState('')
const [supplier, setSupplier] = useState('')
const [uniteach, setUniteach] = useState('')
const [paronhand, setParonhand] = useState('')




// modal helper functons:
const handleClose = () => setShow(false); // closing the modal
const handleShow = () => setShow(true); // opening the modal
 

// fetch request section:
const onSubmitForm = async(e) => {
e.preventDefault();
try {
    const body = { itemname, category, supplier, uniteach, paronhand };
    const response = await fetch("http://localhost:3070/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    console.log(response);

    window.location = '/'; // reloads the GET route for accessing the whole list of items from database.

    } catch (err) {
    console.error(err.message)
    }
};


  return (
    <div>
        <Button variant="success" onClick={handleShow}>
        Add Item
        </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header 
          closeButton>
          <Modal.Title style={{color: 'white'}}>Add New Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group row">
              <label for="item" class="col-sm-2 col-form-label" >Item</label>
              <input 
                type="text"
                class="form-control form-control-sm"
                id="item"
                placeholder='Enter inventory item here...'
                value={ itemname } 
                onChange={e => setItemname(e.target.value)}
              >
              </input>
            </div>
            <div class="form-group row">
              <label for="category" class="col-sm-2 col-form-label" >Category</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="category"
                placeholder='Pick category of item here...(make drop down menu)'
                value={ category }
                onChange={e => setCategory(e.target.value)}
              >
              </input>
            </div>
            <div class="form-group row">
              <label for="supplier" class="col-sm-2 col-form-label" >Supplier</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="supplier"
                placeholder="Enter supplier of item here..."
                value={ supplier }
                onChange={e => setSupplier(e.target.value)}
              >
              </input>
            </div>
            <div class="form-group row">
              <label for="unitEach" class="col-sm-2 col-form-label" >Unit Each</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="unitEach"
                placeholder="Pick the unit of each item here...(make drop down menu)"
                value={ uniteach }
                onChange={e => setUniteach(e.target.value)}
              >
              </input>
            </div>
            <div class="form-group row">
              <label for="parOnHand" class="col-sm-2 col-form-label" >Par on Hand</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="parOnHand"
                placeholder="Enter quantity to have at all times on hand here..."
                value={ paronhand }
                onChange={e => setParonhand(e.target.value)}
              >
              </input>
            </div>    
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={onSubmitForm}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default AddInventory;