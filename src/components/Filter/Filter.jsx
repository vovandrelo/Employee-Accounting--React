import React from 'react';

import style from './style.module.sass';

class Filter extends React.Component {
    onUpdateFilter = event => {
        this.props.onUpdateFilters(event.currentTarget.dataset.filerType)
    }

    render() {
        return (
            <div className={style.filters}>
                <button
                    onClick={this.onUpdateFilter}
                    data-filer-type="all"
                    className={style.filterBtn}>Все сотрудники</button>

                <button
                    onClick={this.onUpdateFilter}
                    data-filer-type="onIncrease"
                    className={style.filterBtn}>На повышение</button>
                <button 
                    onClick={this.onUpdateFilter}
                    data-filer-type="highSalary"
                    className={style.filterBtn}>З/П больше 1000$</button>
            </div>
        )
    }
}

export default Filter;