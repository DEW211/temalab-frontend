import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/AccountBoxRounded';
import LogbookIcon from '@material-ui/icons/List'
import MapIcon from '@material-ui/icons/Map'
import { ListItemAvatar } from '@material-ui/core';
import { changeToDashboardTab } from '../../Redux/Actions/changeToDashboardTab'
import { changeToHistoryTab } from '../../Redux/Actions/changeToHistoryTab'
import { changeToLogbookTab } from '../../Redux/Actions/changeToLogbookTab'
import { changeToMapTab } from '../../Redux/Actions/changeToMapTab'
import { connect } from 'react-redux'

 const MainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MapIcon />
      </ListItemIcon>
      <ListItemText primary="Map" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LogbookIcon />
      </ListItemIcon>
      <ListItemText primary="Logbook" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
  </div>
);




export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemAvatar>
        <AssignmentIcon />
      </ListItemAvatar>
      <ListItemText primary="My Account" />
    </ListItem>
    
  </div>
);
