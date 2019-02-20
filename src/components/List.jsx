import React from 'react';
import ListItem from './ListItem'

export default class List extends React.Component {
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
    for(let i = 0; i < 20; i++) {
      elements.push(
        <ListItem foo={i > count ? 'bar' : 'baz'} />
      )
    }
    return elements;
  }

  handleInputChanges(e) {
    let value = e.target.value
    console.log(value, this.state.searchVal);
    this.setState({searchVal: value})
  }s

  render() {
    const {count, searchVal} = this.state;
    return (
      <div>
        <input type='text' placeHolder={'Type "Yes" to enable button'}onChange={this.handleInputChanges} style={{width: '300px'}}/>
        <div class='pump-it-button'
          onClick={
           () => {
            console.log(searchVal, count)
            if (this.state.searchVal === 'Yes') {
              this.setState({count: count + 1})
            }
          }}
        >
          Pump it UP
        </div>
        <hr/>
        {this.renderItems()}
      </div>
    )
  }
}
