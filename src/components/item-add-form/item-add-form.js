import React from 'react';

import './item-add-form.css'

const ItemAddForm = ({onSubmit, onLabelChange, listData }) => {

    return (
        <form 
        onSubmit={onSubmit} 
        className="item-add-form d-flex">
            <input className="form-control" 
            type="text" 
            onChange={onLabelChange}
            placeholder="What needs to be done"
            value ={listData}/>
            <button 
                className="btn btn-outline-secondary">
                Add Item
            </button>
        </form>
    )
}
export default ItemAddForm;