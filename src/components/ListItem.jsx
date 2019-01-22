import React from 'react';

class ListItem extends React.PureComponent {
  render() {
    const {foo} = this.props;
    return (
      <div>
        <div>
          Given Foo: {foo}
        </div>
        <hr/>
      </div>
    )
  }
}

export default ListItem;
