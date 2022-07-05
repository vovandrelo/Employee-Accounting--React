import React from 'react';

import style from './style.module.sass';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "",
        }
    }

    onChange = event => {
        const temp = event.target.value;
        this.setState({
            inputValue: temp,
        })
        this.props.onUpdateSearch(temp)
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.inputValue}
                    onChange={this.onChange}
                    type='text'
                    placeholder='Найти сотрудника'
                    className={style.search}/>
            </div>
        )
    }
}

export default Search;