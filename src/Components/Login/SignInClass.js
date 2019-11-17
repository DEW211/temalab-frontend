import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Copyright } from "../Copyright/Copyright";
import { Redirect } from 'react-router-dom'
import connect from '../Connection/connection';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // doksi szerint IE11 itt meghal :(
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      password: '',
      loggedIn: false
    }
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event){
    event.preventDefault();
    if(this.state.user === 'admin' && this.state.password === 'be smart'){
      this.setState({
        loggedIn: true,
      })
      await connect();

    }
  }

  handleChangePass(event){
    this.setState({
      password : event.target.value
    })
  }

  handleChangeUser(event){
    this.setState({
      user: event.target.value
    })
  }

  render() {
    const { classes } = this.props;
    if(this.state.loggedIn){
      return <Redirect to="/dashboard" />
    }else{
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="User"
              value={this.state.user}
              onChange={this.handleChangeUser}
            />
            <TextField
              onChange={this.handleChangePass}
              value={this.state.password}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );}
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignIn);
