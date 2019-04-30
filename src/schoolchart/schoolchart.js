import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import {data} from '../data.js';
import _ from 'lodash';
import { type } from 'os';
import '../chart/chart.css';
const filter=()=>{
    let newArray=_.omit(data,['district','ward','school','dropout_male','dropout_female']);
    return newArray;
}
class SchoolChart extends Component{
    constructor(props){
        super(props);
        this.state={
            region:"",
            data:[],
            width:"130%"
        }
        this.handleRegion=this.handleRegion.bind(this);
        this.filterRegion=this.filterRegion.bind(this);
    }
    handleRegion(event){
        if(event.target.value!=="REGION"){
            this.setState({region:event.target.value})
        }
        this.filterRegion(event.target.value)
    }
    filterRegion(index){
        const selectedRegion=data.filter((region)=>(
            region.region===index || region.region==="REGION"
        ))
    
        const graph=selectedRegion.map((regions)=>{
            const result=_.pick(regions,['school','total_dropout']);
         
            return  result; 
        } 
        
        )    
        
        var finalUser=graph.map((user,index)=>{
            const dropouts=user.total_dropout
            const key=user.school;
            return [key,dropouts];
        } ) 
        const width=(finalUser.length>15)?"180%":"100%";
        this.setState({
            data:finalUser,
            width:width
        });
    }
    render(){
        const regions=data.map((region)=>{
        
            return region.region
        })
        const linedata=_.sortedUniq(regions);    
        console.log(this.state.width);
        if(this.state.data.length>0){
        return(
        <div className={"my-pretty-chart-container"}>
            <select name="region" onChange={this.handleRegion}>
               {
                   linedata.map((line,index)=>(
                       <option key={index}>{line}</option>
                   ))
               }
            </select>
            <div className={"my-pretty-chart-container"}>
                <Chart
                    width={this.state.width}
                     height={'494px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={this.state.data}
                    options={{  
                     // Material design options
                    chart: {
                     title: `Total dropout vs school(${this.state.region} REGION)`
     
                     },
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
            />
     
            </div>
        </div>
        )
        }
        else{
            return(
                <div>
                <select name="region" onChange={this.handleRegion}>
               {
                   linedata.map((line,index)=>(
                       <option key={index}>{line}</option>
                   ))
               }
            </select>
            <p>Please select the region</p>
            </div>

            )
        }
    }
}
export default SchoolChart;