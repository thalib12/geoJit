import {useState,React} from 'react'
import { Card } from 'react-bootstrap'

function Geojit() {
   
    const data=[
        {headerText:"card-1",processCode :"Die Casting",machine: "125-t1",footerButtonText:"Save",bgColor:"#f56060",textColor:"#ebebeb"},
        {headerText:"card-2",processCode :"Tol Mounting",machine: "SC001",footerButtonText:"Deliver",bgColor:"#808080",textColor:"#ebebeb"},
        {headerText:"card-3",processCode :"Sorting",machine: "125-t3",footerButtonText:"Submit",bgColor:"#865bef",textColor:"#ebebeb"},
        {headerText:"card-4",processCode :"Cleaning",machine: "125-t2",footerButtonText:"Close",bgColor:"#efefef",textColor:"#464307"},
        {headerText:"card-5",processCode :"SubContract",machine: "80-t1",footerButtonText:"Save",bgColor:"#724153",textColor:"#c5c5c5"},
        {headerText:"card-6",processCode :"Die Casting",machine: "125-t5",footerButtonText:"Move",bgColor:"#0c0205",textColor:"#ffffff"}
        ]
  return (
    <div>
        {
            data.map(item=>
                <Card
                style={{ width: '18rem',backgroundColor:"black",color:"white" }}
                className="mb-2"
              >
                <Card.Header style={{borderBottom:"1px solid white"}}>{item.headerText}<i style={{position:"absolute",right:"15px",top:"15px"}} class="far fa-times-circle"/></Card.Header>
                <Card.Body>
                  
                  <Card.Text>
                   {item.processCode+" "+item.machine}
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{borderTop:"1px solid white"}}>
                   {item.footerButtonText}
                </Card.Footer>
              </Card>
            )
        }
      
       </div>
  )
}

export default Geojit
