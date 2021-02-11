import React from "react";
import PropTypes from "prop-types";
//create your first component

export class PlayerSelect extends React.Component {
	constructor(props) {
		super(props);
		this.player1 = null;
		this.player2 = null;
	}

	render() {
		return (
			<div>
				<div className="text-center mt-5">
					<button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						data-target="#playerSelect">
						Select your players
					</button>

					<div
						className="modal fade"
						id="playerSelect"
						tabIndex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true">
						<div
							className="modal-dialog modal-dialog-centered"
							role="document">
							<div className="modal-content">
								<div className="modal-header ">
									<h5
										className="modal-title mx-auto"
										id="exampleModalLongTitle">
										Choose your weapon
									</h5>
									<button
										type="button"
										className="close"
										data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body d-inline-flex">
									<input
										type="text"
										className="form-control"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
										onChange={event =>
											(this.player1 = event.target.value)
										}
									/>
									<input
										type="text"
										className="form-control"
										aria-label="Default"
										aria-describedby="inputGroup-sizing-default"
										onChange={event =>
											(this.player2 = event.target.value)
										}
									/>
								</div>
								<div className="modal-footer d-flex justify-content-around">
									<button
										type="button"
										className="btn btn-secondary"
										data-dismiss="modal"
										onClick={() =>
											this.props.onSetTurn(
												"X",
												this.player1,
												this.player2
											)
										}>
										<span className="xMarker">X</span>
									</button>
									<button
										type="button"
										className="btn btn-primary"
										data-dismiss="modal"
										onClick={() =>
											this.props.onSetTurn(
												"O",
												this.player1,
												this.player2
											)
										}>
										<span className="oMarker">O</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
PlayerSelect.propTypes = {
	onSetTurn: PropTypes.func
};
