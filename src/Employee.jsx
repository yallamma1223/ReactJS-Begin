import React from "react";
import Employee from './propscontainer/Data'
import Employees from "./propscontainer/Data";
class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.employee = Employees
    }

    render() {
        return (
            <div>
                <h1> ALL EMPLOYEE DATA</h1>
                <h3 >{JSON.stringify(this.employee)}</h3>


            </div>
        )
    }




}
export default Employee