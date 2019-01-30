import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      givenFoo: this.props.foo
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // this.setState({givenFoo: this.props.foo})
  }

  render() {
    const {givenFoo} = this.state;
    return (
      <div>
        Given Foo: {this.state.givenFoo}
        <hr/>
      </div>
    )
  }
}

export default ListItem;
