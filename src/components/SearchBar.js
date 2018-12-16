import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SearchBar extends Component {
    state = {
        text: ""
      }

    handleChange = (event) => {
        this.setState({ 
            text: event
        });
    }

   
    render() { 

        const display = (
            <div>
                {this.props.searchText.map((item, i) => (
                    <ul key={item + "_" + i} className="list-group m-2">
                        <li className="list-group-item list-group-item-success">Name: {item.name}</li><br/>
                        <li className="list-group-item list-group-item-success">Surname: {item.surname}</li><br/>
                        <li className="list-group-item list-group-item-info">Email: {item.email}</li>
                    </ul>
                    )          
                )}
            </div>
        );

        return (
            <div >
                <input 
                    onChange={e => this.handleChange(e.target.value)} 
                    type="text"
                    className="m-3"
                    role="search"
                    aria-labelledby="filter" 
                    placeholder="Enter text"
                    value={this.state.text}
                    ref={this.props.inputRef}
                />
                <Button 
                    onClick={!this.props.isLoading ? (() => this.props.onSubmit(this.state.text)) : null} 
                    className="btn btn-primary" 
                    color="primary"
                    role="button" 
                    disabled={ this.props.activeTab === "1" && this.props.isLoading }
                >
                    { this.props.activeTab === "1" && this.props.isLoading ? 'Loading...' : 'Search' }
                </Button>
                <h3 className="m-3">{this.state.text}</h3>

                { this.props.activeTab === "1" ? display : null }
                
            </div>
            
         );
    }
}
 
export default SearchBar;