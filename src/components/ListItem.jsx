import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      givenFoo: this.props.foo
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.foo !== prevState.givenFoo) {
      this.setState({givenFoo: this.props.foo})
    }
  }

  render() {
    const {givenFoo} = this.state;
    return (
      <>
        <div>
        {`Given Foo: ${givenFoo}`}

        </div>
        <hr/>
      </>
      
      
    )
  }
}

export default ListItem;
