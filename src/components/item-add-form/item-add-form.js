import React, { Component } from 'react';

import './item-add-form.css'

export default class ItemAddForm extends Component {

    render() {
        const { onAddData } = this.props;
        return (
            <div className="item-add-form">
                <button c
                    lassName="btn btn-outline-secondary"
                    onClick={onAddData}>
                    Add Item
                </button>
            </div>
        )

    }
}