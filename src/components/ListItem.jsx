import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    // this.setState({givenFoo: this.props.foo})s
  }

  render() {
    const {foo} = this.props;
    return (
      <React.Fragment>
        <div>
          Given Foo: {foo}
        </div>
          <hr/>
      </React.Fragment>
    )
  }
}

export default ListItem;
