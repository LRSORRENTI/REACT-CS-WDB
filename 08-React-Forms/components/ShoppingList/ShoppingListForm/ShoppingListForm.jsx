import { useState } from 'react'
import './ShoppingListForm.css'

export default function ShoppingListForm({addItem}) {

const [formData, setFormData]  = useState({
    // We'll use an object as state for the initial 
    // state value
    product: "",
    // also note the name field above must 
    // match the name we pass in below: name='product'
    // inside the form
    quantity: 0
});
    function handleChange(evt) {
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
        addItem(formData)
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
            <label htmlFor="quantity">Quantity</label>
            <input type="text"
                  action="" 
                  placeholder='Product Quantity'
                  name='quantity'
                  id='quantity'
                  onChange={handleChange}
                  value={formData.quantity}/>
            <button>Add Item</button>
            </form>
        </div>
    )
}