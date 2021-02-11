import React from "react";
import PropTypes from "prop-types";
export class GameBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squareValues: ["", "", "", "", "", "", "", "", ""]
		};
	}

	updateNextMove = squarePressed => {
		//mapping through state and returning new square values
		var newSquareValues = this.state.squareValues.map((item, position) =>
			//check to see if box was filled, if not fill it
			position == squarePressed && item == ""
				? this.props.currentPlayer
				: item
		);
		this.setState({ squareValues: newSquareValues });

		if (this.state.squareValues[squarePressed] == "") {
			this.props.propNextTurn(squarePressed);
		}
		this.checkForWinner(newSquareValues);
		if (!newSquareValues.includes("")) {
			this.setState({
				squareValues: ["", "", "", "", "", "", "", "", ""]
			});
			//pass function here to increase counter this.props.incrementGame passed from home.js
			this.props.propIncrementGame();
		}
	};
	checkForWinner = newSquareValues => {
		//for each winboards  if it == new square values they win
		let winBoards = [
			[1, 1, 1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 1, 1],
			[1, 0, 0, 1, 0, 0, 1, 0, 0],
			[0, 1, 0, 0, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1],
			[0, 0, 1, 0, 1, 0, 1, 0, 0]
		];
		var winner = "";
		winBoards.forEach(winningCombo => {
			var counter = 0;
			for (let i = 0; i < winningCombo.length; i++) {
				if (winningCombo[i] == 1) {
					if (newSquareValues[i] == this.props.currentPlayer) {
						counter++;
						if (counter > 2) {
							this.props.propSetWinner(this.props.currentPlayer);
							this.setState({
								squareValues: [
									"",
									"",
									"",
									"",
									"",
									"",
									"",
									"",
									""
								]
							});
						}
					}
				}
			}
		});
	};
	render() {
		return (
			<div className="container">
				<div className="centered " id="0">
					<div className="row gameArea ">
						<div
							className="gameBox br bb col-4"
							id="1"
							onClick={() => this.updateNextMove(0)}>
							{" "}
							{this.state.squareValues[0]}{" "}
						</div>
						<div
							className="gameBox bb col-4"
							id="2"
							onClick={() => this.updateNextMove(1)}>
							{" "}
							{this.state.squareValues[1]}{" "}
						</div>
						<div
							className="gameBox bl bb col-4"
							id="3"
							onClick={() => this.updateNextMove(2)}>
							{" "}
							{this.state.squareValues[2]}{" "}
						</div>
						<div
							className="gameBox br bb col-4"
							id="4"
							onClick={() => this.updateNextMove(3)}>
							{" "}
							{this.state.squareValues[3]}{" "}
						</div>
						<div
							className="gameBox bb col-4"
							id="5"
							onClick={() => this.updateNextMove(4)}>
							{" "}
							{this.state.squareValues[4]}{" "}
						</div>
						<div
							className="gameBox bl bb col-4"
							id="6"
							onClick={() => this.updateNextMove(5)}>
							{" "}
							{this.state.squareValues[5]}{" "}
						</div>
						<div
							className="gameBox br col-4"
							id="7"
							onClick={() => this.updateNextMove(6)}>
							{" "}
							{this.state.squareValues[6]}{" "}
						</div>
						<div
							className="gameBox col-4"
							id="8"
							onClick={() => this.updateNextMove(7)}>
							{" "}
							{this.state.squareValues[7]}{" "}
						</div>
						<div
							className="gameBox bl col-4"
							id="9"
							onClick={() => this.updateNextMove(8)}>
							{" "}
							{this.state.squareValues[8]}{" "}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
GameBoard.propTypes = {
	onMove: PropTypes.func,
	currentPlayer: PropTypes.string,
	propNextTurn: PropTypes.func,
	propSetWinner: PropTypes.func,
	propIncrementGame: PropTypes.func,
	propCurrentGame: PropTypes.number
};
