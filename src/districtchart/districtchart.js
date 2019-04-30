import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import {data} from '../data.js';
import _ from 'lodash';
import { type } from 'os';
import '../chart/chart.css';
class DistrictChart extends Component{
    constructor(props){
        super(props);
        this.state={
            region:"",
            data:[],
            width:"180%"
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
            const result=_.pick(regions,['district','total_dropout']);
         
            return  result; 
        } 
        
        )
        var reducedUsers = _.reduce(graph, function (result, user) {
            
            (result[user.district] || (result[user.district] = [])).push(user);
        
      
        return result;
         }, {});   
         var finalUser=_.map(reducedUsers).map((user,index)=>{
            const key=user[0].district;            
            const sum=user.map((result)=>{
                return result.total_dropout
            })
            var regionSum=0;
            for(let i=0; i<sum.length;i++){ 
                if(isNaN(sum[i])){
                    regionSum=sum[i];
                }
                else{
                    regionSum+=Number(sum[i]);
                }

            }
            return [key,regionSum];
        } )  
        
     
       
        this.setState({
            data:finalUser,
            
        });
    }
    render(){
        const regions=data.map((region)=>{
        
            return region.region
        })
        const linedata=_.sortedUniq(regions);    
        console.log(this.state.data);
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
                    width={'900px'}
                    height={'600px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                     data={
                            this.state.data
                    }
                    options={{
                    title: `Dropout in  districts of ${this.state.region} region`,
                     }}
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
export default DistrictChart;