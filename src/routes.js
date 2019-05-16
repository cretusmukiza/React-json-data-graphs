import React from 'react';
import {Switch,Route} from 'react-router-dom';
import RegionChart from '../src/component/schoolchart/schoolchart'
import SchoolChart from '../src/component/schoolchart/schoolchart.js';
import GenderChart from '../src/component/genderchart/genderchart.js';
import DistrictChart from '../src/component/districtchart/districtchart';
import Home from './component/home';
const Routes=()=>{
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/schoolchart" component={SchoolChart} />
            <Route path="/genderchart" component={GenderChart} />
            <Route path="/districtchart" component={DistrictChart} />
        </Switch>
    )

}
export default Routes;