import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import Switch from '@material-ui/core/Switch';
import axios from 'axios';

class SwitchCard extends React.Component {
	constructor(props) {
		super(props);

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		//rest call to server
		

		axios({
			method: 'post',
			url: 'https://temalab-backend.herokuapp.com/api/states',
			data: {
				entityID: this.props.entityID.toString(),
				state: this.props.state === true ? 'off' : 'on'
			}
		});
	}

	render() {
		return (
			<React.Fragment>
				<List>
					<ListItem>
						<ListItemIcon>
							<CodeIcon />
						</ListItemIcon>
						<ListItemText
							id="switch-list-label-example"
							primary={this.props.labelText}
						/>
						<ListItemSecondaryAction>
							<Switch
								edge="end"
								onChange={this.handleToggle}
								checked={this.props.state}
								inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				</List>
			</React.Fragment>
		);
	}
}
export default SwitchCard;
