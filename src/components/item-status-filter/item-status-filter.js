import React from 'react';

import './item-status-filter.css';

  const ItemStatusFilter =() =>{
    
    const buttons = [{name:'all', label:'Active'},
              {name:'activ', label:'Active'},
              {name:'done', label:'Done'}]
    
    const createButton = () => { 
        buttons.map((item) => {
           return <button key={item.name}
                    type="button"
                    className="btn btn-info"
                    /* onClick={} */
                  >{item.label}</button>
        })
    }


    
    return(
          <div className="btn-group">
            {createButton()}
          </div>
        )
 }
  
      
 
        



export default ItemStatusFilter;

