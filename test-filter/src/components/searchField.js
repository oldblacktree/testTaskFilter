import React from 'react';


export default class SearchField extends React.Component {
  constructor(props){
    super(props)
		this.state = {
			value: ''
		}
  }

	handleChange = (e) => {
		this.setState({value: e.target.value});
		this.props.search(e.target.value);
	}

  render() {
    return (
			<div className="fm__head">
				<div className="fm__search-wrap">
					<input className="fm__search" type="text" placeholder="Найти ..." value={this.state.value} onChange={this.handleChange}/>
				</div>
			</div>
		)
	}
}