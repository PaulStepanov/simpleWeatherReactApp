import React from 'react';
import Routing from '../routing/Routing'
import {Navbar,Grid} from 'react-bootstrap'
import {Link} from "react-router-dom";
import appURL from "../constants/appUrl";

export class WeatherApp extends React.Component {
  render(){
    return (
      <div className='WeatherApp' >
        <div className={'navbar navbar-inverse bg-inverse'}>
          <Grid>
            <Link className = 'header-text' to={`${appURL}`}>
              Weather App
            </Link>
          </Grid>
        </div>
        <Routing/>
        <footer>
          <div className={'navbar navbar-inverse bg-inverse footer-nav'}>©by Zarabon, my<a href={'https://github.com/zarabon'}>Github</a></div>
        </footer>
      </div>
    )
  }
}
