//imports
import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

// functional component
const EditOrderAmount = ({ item }) => {
// vanilla js section

    // useState section
const [show, setShow] = useState(false); // for modal

const [itemname, setItemname] = useState(item.itemname)
const [category, setCategory] = useState(item.category)
const [supplier, setSupplier] = useState(item.supplier)
const [paronhand, setParonhand] = useState(item.paronhand)
const [uniteach, setUniteach] = useState(item.uniteach)
const [orderamount, setOrderamount] = useState(item.orderamount)




   // helper function section:

// modal helper functions:
const handleClose = () => setShow(false); // closing the modal
const handleShow = () => setShow(true); // opening the modal


// fetch request for updating stock (PUT)
const updateItem = async (e) => {
e.preventDefault();
try {
    const body = { itemname, category, supplier, paronhand, uniteach, orderamount };
    await fetch(`http://localhost:3070/inventory/${item.item_id}`, {
    method: 'PUT',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
    });

    console.log(body);

    window.location='/';

} catch (err) {
    console.error(err.message);
}
}
  

  return (
    <div>

    <button
        type="button"
        class="btn btn-outline-success btn-sm options"
        data-toggle="modal"
        data-target={`#id${item.item_id}`}
        onClick={handleShow}
    >
        Edit
    </button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
            <div class="modal-body">
              <form>
                <div class="form-group row">
                  <label for="itemName" class="col-sm-2 col-form-label" >Item Name</label>
                  <input 
                    type="text"
                    class="form-control form-control-sm"
                    id="itemName"
                    placeholder="Order Amount"
                    value={ itemname }
                    // onChange={e => setOrderamount(e.target.value)}
                  >
                  </input>
                </div> 
                <div class="form-group row">
                  <label for="category" class="col-sm-2 col-form-label" >Category</label>
                  <input 
                    type="text"
                    class="form-control form-control-sm"
                    id="category"
                    placeholder="Category"
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
                    placeholder="Supplier"
                    value={ supplier }
                    onChange={e => setSupplier(e.target.value)}
                  >
                  </input>
                </div> 
                <div class="form-group row">
                  <label for="parOnHand" class="col-sm-2 col-form-label" >Par on Hand</label>
                  <input 
                    type="number"
                    class="form-control form-control-sm"
                    id="parOnHand"
                    placeholder="Par on Hand"
                    value={ paronhand }
                    onChange={e => setParonhand(e.target.value)}
                  >
                  </input>
                </div> 
                <div class="form-group row">
                  <label for="unitEach" class="col-sm-2 col-form-label" >Unit Each</label>
                  <input 
                    type="text"
                    class="form-control form-control-sm"
                    id="unitEach"
                    placeholder="Unit Each"
                    value={ uniteach }
                    onChange={e => setUniteach(e.target.value)}
                  >
                  </input>
                </div>
                <div class="form-group row">
                  <label for="orderAmount" class="col-sm-2 col-form-label" >Order Amount</label>
                  <input 
                    type="number"
                    class="form-control form-control-sm"
                    id="orderAmount"
                    placeholder="Order Amount"
                    value={ orderamount }
                    onChange={e => setOrderamount(e.target.value)}
                  >
                  </input>
                </div>

              </form>
            </div>
            <div class="modal-footer">
              <button
                  type="button"
                  class="btn btn-outline-success btn-sm"
                  data-dismiss="modal"
                  onClick={e => updateItem(e)}
              >
                      Edit
              </button>
            </div>
      </Modal>



    </div>
  )
}

export default EditOrderAmount;