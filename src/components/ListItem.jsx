import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      givenFoo: props.foo,
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.setState({givenFoo: this.props.foo})
  // }

  render() {
    // const {givenFoo} = this.state;

    return (
      <div>
        <div>
          Given Foo: {this.props.foo}
        </div>
        <hr/>
      </div>
    )
  }
}

export default ListItem;
