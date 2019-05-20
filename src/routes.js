import React from 'react';
import {Switch,Route} from 'react-router-dom';
import RegionChart from '../src/component/schoolchart/schoolchart'
import SchoolChart from '../src/component/schoolchart/schoolchart.js';
import GenderChart from '../src/component/genderchart/genderchart.js';
import DistrictChart from '../src/component/districtchart/districtchart';
import Home from './component/home';
import Signup from './component/signup';
import Welcome from '../src/component/welcome/welcome';
const Routes=()=>{
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/regionchart" component={RegionChart} />
            <Route path="/schoolchart" component={SchoolChart} />
            <Route path="/genderchart" component={GenderChart} />
            <Route path="/districtchart" component={DistrictChart} />
            <Route path="/signup" component={Signup} />
            <Route path="/welcome" component={Welcome} />
        </Switch>
    )

}
export default Routes;