import React from 'react';
import './App.css';
import Header from './component/header';
import Content from './component/content';
import Footer from './component/footer';
import EmployeeList from './component/list-employee'

export default class App extends React.Component{
    constructor(props) {
        super(props);
        // decralation state
        this.state = {
            header: "This Header",
            footer: "This Footer",
            employee:["Dodol"],
            newEmployee:''
        };
    }

    // change header with state
    changeHeader(e) {
        this.setState(
            {
                header: e.target.value
            }
        );
    }
    // change footer with state
    chnageFooter(e) {
        this.setState(
            {
                footer: e.target.value
            }
        );
    }

    // add employee
    addEmployee() {
        // add debugger code for debug
        // const state =this.state;
        // debugger
        let newEmployees= this.state.employee;
        newEmployees.push(this.state.newEmployee);
        this.setState({
            employee:newEmployees
        })
    }
    render() {
        return (
            <div>
                <Header dataHeader={this.state.header} />
                <Content dataState={this.state} changeHeader={this.changeHeader.bind(this)} chnageFooter={this.chnageFooter.bind(this)} />
                <Footer dataFooter={this.state.footer} />
                <span></span>
                <div>
                    <input type="text" name="input_employee" onChange={(e) => this.setState( {newEmployee: e.target.value })}/>
                    <input type="submit" value="Add Employee" onClick={() => this.addEmployee()}/>
                    <h2>List Employee :</h2>
                    {/* set state to props class employee list */}
                    <EmployeeList employee={this.state.employee} />
                </div>
            </div>
        )

    }
}
