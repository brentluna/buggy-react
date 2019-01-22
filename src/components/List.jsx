import React from 'react';
import ListItem from './ListItem';

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      searchVal: ''
    };
    this.handleInputChanges = this.handleInputChanges.bind(this);
    this.handlePumpItUp = this.handlePumpItUp.bind(this);
  }

  renderItems() {
    const { count } = this.state;
    const elements = [];
    for (let i = 0; i < 20; i++) {
      elements.push(<ListItem foo={i > count ? 'bar' : 'baz'} />);
    }
    return elements;
  }

  handleInputChanges(e) {
    this.setState({ searchVal: e.target.value});
  }

  handlePumpItUp() {
    const {count, searchVal} = this.state;
    if (searchVal.trim() === 'Yes') {
      this.setState({count: count + 1 })
    }
  }

  render() {
    const {searchVal} = this.state;
    return (
      <div>
        <input value={searchVal}type="text" placeHolder='Type "Yes" to enable button' onChange={this.handleInputChanges} style={{width: '300px'}} />
        <div
          className='pump-it-button'
          onClick={this.handlePumpItUp}
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
