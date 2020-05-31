import "./App.css";
import ContactCard from "./components/contactCard";
import React, { Component } from 'react';

const empArray = [
  { first_name: "andrew", last_name: "myers", role: "manager" },
  { first_name: "john", last_name: "steinbeck", role: "writer" },
  { first_name: "ezra", last_name: "pound", role: "poet" },
  { first_name: "charles", last_name: "darwin", role: "naturalist" },
  { first_name: "elon", last_name: "musk", role: "smart guy" },
];

/* employee object: 
// 1 - UI 
// --> render card components designed to receive employee obj
// --> build out array of employee objc - no need for db
-map()
-->employee.map()


-filter()
-state
*/


// things we covered 
// filter by specific condition array.filter((index) => {index === "x"})
// map over results .... results.map((result) => <Component propName={result} />
// onChange set state 


// filterEmployees = (employeeFilter) => {
//   let filteredEmployees = this.state.employees
//   filteredEmployees = filteredEmployees.filter((employee) => {
//     let employeeName = employee.first_name.toLowerCase() + employee.last_name.toLowerCase()
//     return employeeName.indexOf(
//       employeeFilter.toLowerCase()) !== -1
//   })
//   this.setState({
//     filteredEmployees
//   })

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
  { first_name: "andrew", last_name: "myers", role: "manager" },
  { first_name: "john", last_name: "steinbeck", role: "writer" },
  { first_name: "ezra", last_name: "pound", role: "poet" },
  { first_name: "charles", last_name: "darwin", role: "naturalist" },
  { first_name: "elon", last_name: "musk", role: "smart guy" },
]
    };
  }
  render() {
    return (
      {this.state.employees.map((employee) => {
        <ContactCard employee={}/>
      })}
      <input
        type="text"
        placeholder="Search"
        value={searchEmp}
        onChange={(e) => setSearchEmp(e.target.value)}
      />
    );
  }
}

export default App;
