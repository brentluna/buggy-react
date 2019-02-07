import React from 'react';
import ListItem from './ListItem'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      searchVal: ''
    };
    this.handleInputChanges = this.handleInputChanges.bind(this);
    this.renderItems = this.renderItems.bind(this);
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

  handleInputChanges(value) {
    this.setState({searchVal: value})
  }

  render() {
    const {count, searchVal} = this.state;

    const items = this.renderItems();

    return (
      <div>
        <input
          type='text'
          placeHolder={'Type "Yes" to enable button'}
          onClick={this.handleInputChanges}
          style={{width: '300px'}}
        />
        <div class='pump-it-button'
          onClick={() => {
            console.log()
            if (searchVal === 'Yes') {
              this.setState({count: count + 1})
            }
          }}
        >
          Pump it UP
        </div>
        <hr/>
        { items }
      </div>
    )
  }
}

export default List;