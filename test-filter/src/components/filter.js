import React from 'react';
import DropDown from './dropDown';

export default class Filter extends React.Component {
  constructor(props){
    super(props)
		this.state = {
			choosenTypeOfCards: [],
			isTypeOfCardDropDown: false,
		}

		this.typeOfCards = ['EKA_Процессинг Offline', 'EKA_Процессинг Online']
  }

	toggleTypeOfCardDropDown = () =>{
		this.setState({isTypeOfCardDropDown: !this.state.isTypeOfCardDropDown})
	}

	showTypeOfCard = () => {
		const {choosenTypeOfCards} = this.state;
		
		switch (choosenTypeOfCards.length) {
			case 0:
				return "Тип карты";
			case 1: 
				return choosenTypeOfCards[0];
			default:
				return  `Тип карт (${choosenTypeOfCards.length})`;
		}
	}

	changeTypeOfCards = (value) => {
		const {choosenTypeOfCards} = this.state;
		const newTypeofCard = [...choosenTypeOfCards];

		if (choosenTypeOfCards.indexOf(value) === -1) {
			newTypeofCard.push(value);
		} else {
			newTypeofCard.splice(choosenTypeOfCards.indexOf(value),1)
		}

		this.setState({choosenTypeOfCards: newTypeofCard})
	}

	resetTypeOfCards = () => {
		this.setState({choosenTypeOfCards: []});
	}

	showResult = () => {
		console.log (`Выбраны карты: ${this.state.choosenTypeOfCards}`)
	}

  render() {
		const {isTypeOfCardDropDown} = this.state
    return (
			<div className="transactions-filter">
				<form>
					<div className="transactions-filter__container">
						<div className="transactions-filter__item">
							<div className="position-relative form-group">
								<div id="listCardType" className="fm">
									<div className="fm__toggler text-dark-gray">
										календарь
									</div>
								</div>
							</div>
						</div>
						<div className="transactions-filter__item">
							<div className="position-relative form-group">
								<div className="fm">
									<div className="fm__toggler text-dark-gray" onClick={this.toggleTypeOfCardDropDown}>
										{this.showTypeOfCard()}
									</div>
									{isTypeOfCardDropDown 
									?	<DropDown 
											typeOfCards={this.typeOfCards} 
											changeTypeOfCards={this.changeTypeOfCards}
											resetTypeOfCards={this.resetTypeOfCards}
										/>
									: ''}
								</div>
							</div>
						</div>
						<div className="transactions-filter__item">
							<div className="position-relative form-group">
								<div id="listCardType" className="fm">
									<div className="fm__toggler text-dark-gray">
										Выберите карту
									</div>
								</div>
							</div>
						</div>
						<div className="transactions-filter__item">
							<div className="position-relative form-group">
								<div id="listCardType" className="fm">
									<div className="fm__toggler text-dark-gray">
										Выберите водителя или ТС
									</div>
								</div>
							</div>
						</div>
						<div className="transactions-filter__item">
							<div className="position-relative form-group">
								<div id="listCardType" className="fm">
									<div className="fm__toggler text-dark-gray">
										Топливо и доп услуги
									</div>
								</div>
							</div>
						</div>
						<div className="transactions-filter__item">
							<div className="position-relative form-group">
								<div id="listCardType" className="fm">
									<div className="fm__toggler text-dark-gray">
										Программа, сеть
									</div>
								</div>
							</div>
						</div>
						<div className="transactions-filter__item">
							<div className="position-relative form-group">
								<div id="listCardType" className="fm">
									<div className="fm__toggler text-dark-gray">
										Выберите АЗС
									</div>
								</div>
							</div>
						</div>
						<div className="transactions-filter__item">
							<div className="d-flex align-items-center mb-3 pb_3px">
								<div className="mr-4 ml-auto">
									<a className='fz_xs text-nowrap font-weight-middle' href="#">
										Сбросить
									</a>
								</div>
								<button className="btn btn-accent" onClick={this.showResult}>Применить</button>
							</div>
						</div>
					</div>
				</form>
			</div>
    );
  }
}