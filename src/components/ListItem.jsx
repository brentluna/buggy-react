import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      givenFoo: this.props.foo
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.givenFoo !== this.props.foo) {
      this.setState({givenFoo: this.props.foo})
    }
  }

  render() {
    const {givenFoo} = this.state;
    return (
      <div>
        <div>
          Given Foo:
        </div>
        <div>
          {givenFoo}
        </div>
      </div>
    )
  }
}

export default ListItem;
