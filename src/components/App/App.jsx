import React from 'react';
import { nanoid } from 'nanoid'

import Info from '../Info/Info';
import SearchPanel from '../SearchPanel/SearchPanel';
import EmployeesList from '../EmployeesList/EmployeesList';
import AddEmployee from '../AddEmployee/AddEmployee';
import style from './style.module.sass';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: 'John C.', salary: 800, increase: false, like: false, id: nanoid() },
                { name: 'Alex M.', salary: 3000, increase: false, like: false, id: nanoid() },
                { name: 'Carl W.', salary: 5000, increase: false, like: false, id: nanoid() },
            ],
            search: '',
            filter: 'all',
        }
    }

    delEmployee = id => {
        this.setState(({data}) => ({data: data.filter(employee => employee.id !== id)}))
    }

    addEmployee = (name, salary) => {
        const newEmployee = {
            name,
            salary,
            increase: false,
            id: nanoid(),
        }
        this.setState(({data}) => {
            const newData = [newEmployee, ...data]
            return {
                data: newData
            }
        })
    }

    onToggleIncrease = id => {
        this.setState(({data}) => ({
            data: data.map(employee => {
                if (id === employee.id) {
                    return {...employee, increase: !employee.increase}
                }
                return employee;
            })
        }))
    }


    onToggleLike = id => {
        this.setState(({data}) => ({
            data: data.map(employee => {
                if (id === employee.id) {
                    return {...employee, like: !employee.like}
                }
                return employee;
            })
        }))
    }

    appSearch = (items, temp) => {
        if (items.length === 0) {
            return items
        }
        return items.filter(item => item.name.indexOf(temp) > -1)
    }

    onUpdateSearch = temp => {
        this.setState({search: temp})
    }

    appfilters = (items, filter) => {
        switch(filter) {
            case 'onIncrease':
                return items.filter(item => item.increase);
            case 'highSalary':  
                return items.filter(item => +item.salary > 1000);
            default:
                return items
        }
    }

    onUpdateFilters = filter => {
        this.setState({filter})
    }

    render() {
        const newData = this.appfilters(this.appSearch(this.state.data, this.state.search), this.state.filter);
        return (
            <div className={style.container}>
                <Info
                    data={this.state.data}/>
                <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}
                    onUpdateFilters={this.onUpdateFilters}/>
                <EmployeesList
                    data={newData}
                    delEmployee={this.delEmployee}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleLike={this.onToggleLike}/>
                <AddEmployee
                    addEmployee={this.addEmployee}/>
            </div>
        )
    }   
    
}

export default App;