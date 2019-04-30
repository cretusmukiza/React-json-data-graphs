import React from 'react';
import {Switch,Route} from 'react-router-dom';
import RegionChart from './chart/chart.js'
import SchoolChart from './schoolchart/schoolchart.js';
import GenderChart from './genderchart/genderchart.js';
import DistrictChart from './districtchart/districtchart.js';
const Routes=()=>{
    return(
        <Switch>
            <Route exact path="/" component={RegionChart} />
            <Route path="/schoolchart" component={SchoolChart} />
            <Route path="/genderchart" component={GenderChart} />
            <Route path="/districtchart" component={DistrictChart} />
        </Switch>
    )

}
export default Routes;