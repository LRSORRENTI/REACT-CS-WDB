import { useState } from 'react'
import './ValidatedShoppingListForm.css'
import { validate } from 'uuid';

export default function ValidatedShoppingListForm({addItem}) {

const [formData, setFormData]  = useState({
    // We'll use an object as state for the initial 
    // state value
    product: "",
    // also note the name field above must 
    // match the name we pass in below: name='product'
    // inside the form
    quantity: 0
});


const [productIsValid, setProductIsValid] = useState(false);

const [quantityIsValid, setQuantityIsValid] = useState(false);
    const formValidate = (product) => {
        if(product.length === 0) {
            setProductIsValid(false)
        } else {
            setProductIsValid(true)
        }
    }
    function handleChange(evt) {
        if(evt.target.name === "product") {
            formValidate(evt.target.value);
        }
        setFormData(currData => {
            return {
                ...currData,
                // computed property syntax below:
                [evt.target.name]: evt.target.value
            }
        })
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        if(productIsValid) {
            addItem(formData)
            // Now once the data has been submitted we 
            // can empty it: 
            setFormData({product: "", quantity: 0})
        }
    }
    return (
        <div>
            <form className='formList' onSubmit={handleSubmit}>
            <h2>Product is: {formData.product}</h2>
            <label htmlFor="product">Product Name</label>
            <input type="text"
                  action="" 
                  placeholder='Product Name'
                  name='product'
                  id='product'
                  onChange={handleChange}
                  value={formData.product}/>
            {!productIsValid && (
                 <p style={{backgroundColor: "lightcoral", color: "white"}}>Product Field Cannot Be Empty</p>
                )}
            <label htmlFor="quantity">Quantity</label>
            <input type="text"
                  action="" 
                  placeholder='Product Quantity'
                  name='quantity'
                  id='quantity'
                  onChange={handleChange}
                  value={formData.quantity}/>
            <button disabled={!productIsValid}>Add Item</button>
            </form>
        </div>
    )
}