import React from 'react';

class ResponseList extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.data == this.props.data)
      return false;
    else
      return true;
  }

  render() {
    const data = this.props.data;
    let listItemsArr = [];

    for (let key in data) {
      listItemsArr.push(<li className="modal-response-list__title">{key}</li>);
      data[key].forEach(function(x) {
        listItemsArr.push(<li className="modal-response-list__log"><b>{x.timestamp}</b> {x.lvl} {x.message}</li>);
      })
    }

    return (
      <ul className="modal-response-list">
        {listItemsArr}
      </ul>
    );
  }

}

export default ResponseList;
