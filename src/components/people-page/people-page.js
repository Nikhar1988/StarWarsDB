import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './people-page.css'

export default class PeoplePage extends Component {
    


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
            debugger;

          this.setState({
            hasError: true  
          }) 
      }


    render() {
        
        const {selectedChar, hasError} = this.state;
        
        if (hasError) {
            return <ErrorIndicator/>
        }
        
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onDetailSelectedChar} />
                </div>
                <div className="col-md-6">
                    <PersonDetails idSelected={selectedChar} />
                </div>
            </div>
            )
    }
}