import React from 'react';
import DropDown from './dropDown';

const initilData = {
		typeOfCards: ['EKA_Процессинг Offline', 'EKA_Процессинг Online'],
		cardNumbers: ['111111', '222222', '333333', '444444', '55555', '1212123'],
		gasStations: ['Petrol', 'Gazprom', '1234123', 'Lukoil']
}

export default class Filter extends React.Component {
  constructor(props){
    super(props)
		this.state = {
			choosenTypeOfCards: [],
			choosenCardNumbers: [],
			choosenGasStation: [],
			isTypeOfCardDropDown: false,
			isCardNumbersDropDown: false,
			isGasStationDropDown: false,
			typeOfCards: initilData.typeOfCards,
			cardNumbers: initilData.cardNumbers,
			gasStations: initilData.gasStations,
		}
  }

	toggleDropDown = (propName) => () =>{
		this.setState({[propName]: !this.state[propName]})
	}

	showCardNumbers = () => {
		const {choosenCardNumbers} = this.state;
		
		switch (choosenCardNumbers.length) {
			case 0:
				return "Выберите карту";
			case 1: 
				return choosenCardNumbers[0];
			default:
				return  `Карты (${choosenCardNumbers.length})`;
		}
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

	showGasStation = () => {
		const {choosenGasStation} = this.state;
		
		switch (choosenGasStation.length) {
			case 0:
				return "Выберите АЗС";
			case 1: 
				return choosenGasStation[0];
			default:
				return  `АЗС (${choosenGasStation.length})`;
		}
	}

	changeChoosenTypeOfCards = (value) => {
		const {choosenTypeOfCards} = this.state;
		const newTypeofCard = [...choosenTypeOfCards];

		if (choosenTypeOfCards.indexOf(value) === -1) {
			newTypeofCard.push(value);
		} else {
			newTypeofCard.splice(choosenTypeOfCards.indexOf(value),1)
		}

		this.setState({choosenTypeOfCards: newTypeofCard})
	}
	
	changeChoosenCardNumbers = (value) => {
		const {choosenCardNumbers} = this.state;
		const newCardNumbers= [...choosenCardNumbers];

		if (choosenCardNumbers.indexOf(value) === -1) {
			newCardNumbers.push(value);
		} else {
			newCardNumbers.splice(choosenCardNumbers.indexOf(value),1)
		}

		this.setState({choosenCardNumbers: newCardNumbers})
	}

	changeChoosenGasStations = (value) => {
		const {choosenGasStation} = this.state;
		const newGasStation= [...choosenGasStation];

		if (choosenGasStation.indexOf(value) === -1) {
			newGasStation.push(value);
		} else {
			newGasStation.splice(choosenGasStation.indexOf(value),1)
		}

		this.setState({choosenGasStation: newGasStation})
	}

	reset = (propName, initialState) => () =>{
		this.setState({[propName]: initialState});
	}

	resetAll = () => {
		this.setState({
			choosenTypeOfCards: [],
			choosenCardNumbers: [],
			choosenGasStation: [],
			isTypeOfCardDropDown: false,
			isCardNumbersDropDown: false,
			isGasStationDropDown: false,
			typeOfCards: initilData.typeOfCards,
			cardNumbers: initilData.cardNumbers,
			gasStations: initilData.gasStations,
		})
	}

	search = (initialArr, propName) => (value) => {
		const coincidence = initialArr.filter((item) => {
			if (item.indexOf(value) !== -1) return true;
			return false;
		})
		this.setState({[propName]: coincidence})
	}

	showResult = () => {
		console.log (
			`Выбраны типы карт: ${this.state.choosenTypeOfCards} 
			\n Выбраны карты: ${this.state.choosenCardNumbers} 
			\n Выбраны АЗС: ${this.state.choosenGasStation}`)
	}

  render() {
		const {isTypeOfCardDropDown, isCardNumbersDropDown, isGasStationDropDown, typeOfCards, cardNumbers, gasStations} = this.state;

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
									<div className="fm__toggler text-dark-gray" onClick={this.toggleDropDown('isTypeOfCardDropDown')}>
										{this.showTypeOfCard()}
									</div>
									{isTypeOfCardDropDown 
									?	<DropDown 
											listItems={typeOfCards} 
											handleItemsChange={this.changeChoosenTypeOfCards}
											handleReset={this.reset('choosenTypeOfCards', [])}
											haveSearchField={false}
										/>
									: ''}
								</div>
							</div>
						</div>
						<div className="transactions-filter__item">
							<div className="position-relative form-group">
								<div id="listCardType" className="fm">
									<div className="fm__toggler text-dark-gray" onClick={this.toggleDropDown('isCardNumbersDropDown')} >
										{this.showCardNumbers()}
									</div>
									{isCardNumbersDropDown 
									?	<DropDown 
											listItems={cardNumbers} 
											handleItemsChange={this.changeChoosenCardNumbers}
											handleReset={this.reset('choosenCardNumbers', [])}
											haveSearchField={true}
											search= {this.search(initilData.cardNumbers, 'cardNumbers')}
										/>
									: ''}
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
									<div className="fm__toggler text-dark-gray" onClick={this.toggleDropDown('isGasStationDropDown')} >
										{this.showGasStation()}
									</div>
									{isGasStationDropDown 
									?	<DropDown 
											listItems={gasStations} 
											handleItemsChange={this.changeChoosenGasStations}
											handleReset={this.reset('choosenGasStation', [])}
											haveSearchField={true}
											search= {this.search(initilData.gasStations, 'gasStations')}
										/>
									: ''}
								</div>
							</div>
						</div>
						<div className="transactions-filter__item">
							<div className="d-flex align-items-center mb-3 pb_3px">
								<div className="mr-4 ml-auto">
									<a className='fz_xs text-nowrap font-weight-middle' href="#" onClick={this.resetAll}>
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