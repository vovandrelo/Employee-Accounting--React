import style from './style.module.sass';

import React from 'react';

class AddEmployee extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            salary: 0
        }
    }

    onChangeValue = e => {
        this.setState({
            [e.target.name]: e.target.value
          })
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.addEmployee(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: 0
        })
    }

    render() {
        return(
            <form className={style.form} onSubmit={this.onSubmit}>
                <h2 className={style.fromTitle}>Добавьте нового сотрудника</h2>
                <div className={style.formActions}>
                    <input 
                        className={style.formInput}
                        value={this.state.name}
                        name="name"
                        onChange={e => this.onChangeValue(e)}
                        type="text"
                        placeholder='Как его зовут?'/>
                    <input
                        className={style.formInput}
                        value={this.state.salary}
                        name="salary"
                        onChange={e => this.onChangeValue(e)}
                        type="number"
                        placeholder='З/П в $?'/>
                    <button className={style.formBtn}>Добавить</button>
                </div>
            </form>
        )
    }
}

export default AddEmployee;