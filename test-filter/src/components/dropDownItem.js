import React from 'react';


export default class DropDownItem extends React.Component {
  constructor(props){
    super(props)
		this.state = {
		}
  }

	handleClick = () => {
		this.props.handleItemsChange(this.props.value);
	}

  render() {
		const {value} = this.props
    return (
			<li className="fm__list-item">
				<label>
						<input type="checkbox" onChange={this.handleClick}/> 
						<span>
							<span title={value}>{value}</span>
						</span>
				</label>
			</li>
		)
	}
}


