import React from 'react';
import Reset from './reset';
import DropDownItem from './dropDownItem';
import SearchField from './searchField';


export default class DropDown extends React.Component {
  constructor(props){
    super(props)
		this.state = {
		}
  }

  render() {
		const {listItems, handleItemsChange, handleReset, haveSearchField, search} = this.props;
    return (
			<div className="fm__dropdown">
				<div className="fm__body">
					{haveSearchField 
					? <SearchField search={search}/>
					: ''}
					<Reset handleReset={handleReset}/>
					<ul className="fm__list">
						{listItems.map((item, i) => {
							return <DropDownItem 
								key = {i}
								value={item} 
								handleItemsChange={handleItemsChange}/>
						})}
						
					</ul>
				</div>
			</div>
		)
	}
}