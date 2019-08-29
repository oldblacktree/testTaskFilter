import React from 'react';


export default class Reset extends React.Component {
  constructor(props){
    super(props)
		this.state = {
		}
  }


  render() {
    return (
			<a id="listCardType" href="#" className="fm__clear" onClick={this.props.handleReset}>
				<i className="fm__clear-icon icon-cross"></i>Сбросить
			</a>
		)
	}
}