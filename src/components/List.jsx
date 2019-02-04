import React from 'react';
import ListItem from './ListItem'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      searchVal: ''
    }
  }

  renderItems() {
    console.log('renderItems')
    const {count} = this.state;
    const elements = [];
    for(let i = 0; i < 20; i++) {
      elements.push(
        <ListItem foo={i > count ? 'bar' : 'baz'} />
      )
    }
    // console.log('renderItems')
    console.log(elements)
    return elements;
  }

  handleInputChanges(value) {
    this.setState({searchVal: value})
  }

  render() {
    const {count, searchVal} = this.state;
    return (
      <div>
        <input type='text' placeHolder={'Type "Yes" to enable button'}onClick={this.handleInputChanges.bind(this)} style={{width: '300px'}}/>
        <button className='pump-it-button'
          onClick={ () => {
            if (searchVal === 'Yes') {
              this.setState({count: count + 1})
            }
          }
          }
        >
          Pump it UP
        </button>
        <hr/>
        {this.renderItems()}
      </div>
    )
  }
}

export default List;