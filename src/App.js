import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import DB,{ DBRetriever } from './components/DB'; 
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

class App extends Component {

  state = {
    searchText: [],
    isLoading: false,
    activeTab: '1'
  }


  handleSubmit = (e) => {
   const promise = DBRetriever.search(e);
   console.log(promise);

   promise
    .then(result => { 
      console.log(result);
      console.log(result.rows);

      this.setState({
        searchText: result.rows,
        isLoading: false
    })
   })

    this.setState({
      isLoading: true
    })
    
  /*  const array = DB.rows;
    setTimeout(() => {
      this.setState({
        searchText: array,
        isLoading: false
      })
    }, 2000)
  */
  }

  toggleTab(tab){
    console.log(tab);
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentWillUnmount(prevProps, prevState){
    this.setState({
        searchText: []
    });
}

  render() {
    return (
      <div style={{padding: 20}}>
        <Nav tabs>
          <NavItem>
            <NavLink 
              className={classnames({active: this.state.activeTab === '1'})}
              onClick={() => {this.toggleTab('1');}}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              className={classnames({active: this.state.activeTab === '2'})}
              onClick={() => {this.toggleTab('2');}}
            >
              Tab2
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <SearchBar 
              onSubmit={this.handleSubmit} 
              isLoading={this.state.isLoading}
              searchText={this.state.searchText}
              activeTab={this.state.activeTab}
              tabId={this.tabId}
              inputRef={el => this.inputElement = el}
            />
          </TabPane>
          <TabPane tabId="2">
            <SearchBar 
               onSubmit={this.handleSubmit} 
               isLoading={this.state.isLoading}
               searchText={this.state.searchText}
               activeTab={this.state.activeTab}
               tabId={this.tabId}
               inputRef={el => this.inputElement = el}
            />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default App;
