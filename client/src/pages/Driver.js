import React , {useState} from 'react';
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  updatedriverdata } from "../actions";
import { Container,Row,Col} from 'reactstrap';

export default function Driver({}) {
    const history = useHistory();
    const urllocal = "http://192.168.1.110:3001";
    const [lap, setLap] = useState({
        lap1m: [],
        lap2m: [],
        lap1b: [],
        lap2b: [],
        lap3b: [],
    })
    const driverdata = useSelector(state => state.driverdata);
    const dispatch = useDispatch();
    const filterValue = (obj, key, value)=> obj.find(v => v[key] === value);
    const logout = () => {
        Axios.post(`${urllocal}/logout`, {
         
        }).then((response) => {
         
        });
        history.push("/");
      };

      const getdata = () =>{
        Axios.get(`${urllocal}/dataD`).then((response) => {
          if (response.data) {
            
            dispatch(updatedriverdata(response.data));//checkdata
         
            setLap({lap1m: response.data[0],lap2m: response.data[1],lap1b: response.data[2],lap2b: response.data[3],lap3b: response.data[4] })
            console.log(response.data[1]);
          }
        });
    
      }
    

    return(
        <div>
            <p>test</p>
            <Row>
            {lap.lap1m.map((driverdata,index) => {
                                   return <Col xs="12"  key={index} >
                                        m1
                                        <a  style={{textAlign:"center",fontSize:"14px",position:"relative",textShadow:"2px 2px 5px #4A9DFCE8"}}>{driverdata.name}</a>
                                    </Col>
                                  })}
            </Row>
            <Row>
            {lap.lap2m.map((driverdata,index) => {
                                   return <Col xs="12"  key={index} >
                                       m2
                                        <a  style={{textAlign:"center",fontSize:"14px",position:"relative",textShadow:"2px 2px 5px #4A9DFCE8"}}>{driverdata.name}</a>
                                    </Col>
                                  })}
            </Row>
            <Row>
            {lap.lap1b.map((driverdata,index) => {
                                   return <Col xs="12"  key={index} >
                                       b1
                                        <a  style={{textAlign:"center",fontSize:"14px",position:"relative",textShadow:"2px 2px 5px #4A9DFCE8"}}>{driverdata.name}</a>
                                    </Col>
                                  })}
            </Row>
            <Row>
            {lap.lap2b.map((driverdata,index) => {
                                   return <Col xs="12"  key={index} >
                                       b2
                                        <a  style={{textAlign:"center",fontSize:"14px",position:"relative",textShadow:"2px 2px 5px #4A9DFCE8"}}>{driverdata.name}</a>
                                    </Col>
                                  })}
            </Row>
            <Row>
            {lap.lap3b.map((driverdata,index) => {
                                   return <Col xs="12"  key={index} >
                                       b3
                                        <a  style={{textAlign:"center",fontSize:"14px",position:"relative",textShadow:"2px 2px 5px #4A9DFCE8"}}>{driverdata.name}</a>
                                    </Col>
                                  })}
            </Row>
             <button type="" onClick={getdata}>getdata</button>
             <button type="" onClick={logout}>logout</button>
        </div>
    );

    

}