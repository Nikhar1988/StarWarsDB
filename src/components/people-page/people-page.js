import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../service/swapi-service';

import './people-page.css'

export default class PeoplePage extends Component {
    
  swapiService = new SwapiService();

    state = {
        selectedChar: null,
        hasError: false
      }



    onDetailSelectedChar = (id) => {
        this.setState({
          selectedChar: id
        })
      }
      
    componentDidCatch = (error, info) => {  

          this.setState({
            hasError: true  
          }) 
      }

    render() {      
        const {selectedChar, hasError} = this.state;
        
        if (hasError) {
            return <ErrorIndicator/>
        }

        const itemList =
            <ItemList onItemSelected={this.onDetailSelectedChar} 
            getResurs={()=>this.swapiService.getAllPeople()}
            renderItem={(item)=> item.name }/>

        const personalDetails = <PersonDetails idSelected={selectedChar}/>
        
        return (
              <Row left={itemList} right={personalDetails} />
            )
    }
}

const Row = ({left, right}) => {
  return (
        <div className="row mb2">
        <div className="col-md-6">
            {left}
        </div>
        <div className="col-md-6">
            {right}
        </div>
    </div>
  )
}