import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      searchVal: ''
    };
    this.handleInputChanges = this.handleInputChanges.bind(this);
  }

  renderItems() {
    const { count } = this.state;
    const elements = [];
    for (let i = 0; i < 20; i++) {
      elements.push(<ListItem foo={i > count ? 'bar' : 'baz'} />);
    }
    return elements;
  }

  handleInputChanges(value) {
    this.setState({ searchVal: value });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <input type="text" onClick={this.handleInputChanges} />
        <div
          className='pump-it-button'
          onClick={() => this.setState({ count: count + 1 })}
        >
          Pump it UP
        </div>
        <hr/>
        {this.renderItems()}
      </div>
    );
  }
}

export default List;
