import React from 'react';
import Reset from './reset';
import DropDownItem from './dropDownItem'


export default class DropDown extends React.Component {
  constructor(props){
    super(props)
		this.state = {
		}
  }

  render() {
		const {typeOfCards, changeTypeOfCards, resetTypeOfCards} = this.props;
    return (
			<div className="fm__dropdown">
				<div className="fm__body">
					<Reset resetTypeOfCards={resetTypeOfCards}/>
					<ul className="fm__list">
						{typeOfCards.map((item, i) => {
							return <DropDownItem 
								key = {i}
								value={item} 
								changeTypeOfCards={changeTypeOfCards}/>
						})}
						
					</ul>
				</div>
			</div>
		)
	}
}