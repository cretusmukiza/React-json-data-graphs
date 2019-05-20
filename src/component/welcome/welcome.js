import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie,faUserCircle,faUniversity,faChartBar,faChartLine,faChartArea} from '@fortawesome/free-solid-svg-icons'
import './welcome.css';
library.add(faChartPie,faUserCircle,faUniversity,faChartBar,faChartBar,faChartLine,faChartArea)
class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
       return(
             
       <div>
           
       </div>
    
        
       )
    }
}
export default Welcome;