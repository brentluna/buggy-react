import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      searchVal: ''
    }
    this.handleInputChanges = this.handleInputChanges.bind(this);
  }

  renderItems() {
    const {count} = this.state;
    const elements = [];
    for(let i = 0; i < 2; i++) {
      elements.push(
        <ListItem foo={i > count ? 'bar' : 'baz'} />
      )
    }
    return elements;
  }

  onClickFun() {

    if (this.state .searchVal === 'Yes') {
              this.setState({count: this.state.count + 1})
              this.renderItems();
            }
  }

  handleInputChanges(value) {
    this.setState({searchVal: value})
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <input type='text' placeHolder={'Type "Yes" to enable button'} onClick={this.handleInputChanges} style={{width: '300px'}}/>
        <div class='pump-it-button' onClick={this.onClickFun()}>
          Pump it UP
        </div>
        <hr/>
        {this.renderItems()}
      </div>
    );
  }
}

export default List;