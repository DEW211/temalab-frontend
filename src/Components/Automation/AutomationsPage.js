/* import React, { PureComponent } from 'react'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default class AutomationsPage extends React.Component {


    render(){
        return (
            <Container maxWidth="lg">
                <form>
                <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="automation name"
              name="automation_name"
              value={}
              onChange={}
            />
            <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
                </form>
            </Container>
        )
    }
} */
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
	formControl: {
		margin: theme.spacing(1),
		marginTop: theme.spacing(15),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
});

class AutomationsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			time: '',
			entity: 'Entity'
		};
		this.handleChangeDesc = this.handleChangeDesc.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeTime = this.handleChangeTime.bind(this);
		this.handleChangeEntity = this.handleChangeEntity.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeName(event) {
		this.setState({
			name: event.target.value
		});
	}
	handleChangeDesc(event) {
		this.setState({
			description: event.target.value
		});
	}
	handleChangeTime(event) {
		this.setState({
			time: event.target.value
		});
	}
	handleChangeEntity(event) {
		this.setState({
			entity: event.target.value
		});
	}
	handleSubmit() {
		//api call
		axios({
			method: 'post',
			url: 'https://temalab-backend.herokuapp.com/api/config/automation/config/'+this.state.name,
			data: {
				action: [
					{
						service: 'switch.toggle'
					}
				],
				alias: this.state.name,
				condition: [
					{
            after: this.state.time,
            condition: "time"
					}
        ],
        description: this.state.description,
        id: this.state.name,
        trigger: [
          {
            entity_id: this.state.entity,
            platform: "state"
          }
        ]
			}
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<FormControl className={classes.formControl} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="Name"
						label="Name"
						name="Name"
						value={this.state.name}
						onChange={this.handleChangeName}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="Description"
						label="Description"
						name="Description"
						value={this.state.description}
						onChange={this.handleChangeDesc}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						id="Time of trigger"
						label="Time of trigger"
						name="Time of trigger"
						value={this.state.time}
						onChange={this.handleChangeTime}
					/>
					Entity
					<Select
						labelId="simple-select-label"
						id="entity"
						value={this.state.entity}
						onChange={this.handleChangeEntity}
					>
            {this.props.entities.map(value => {
              return <MenuItem value={value}>{value}</MenuItem>
            })}
						
					</Select>
					<Button
						size="large"
						variant="contained"
						color="primary"
						onClick={this.handleSubmit}
					>
						Create automation
					</Button>
				</FormControl>
			</div>
		);
	}
}

export default withStyles(styles)(AutomationsPage);
