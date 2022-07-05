import React from 'react';

import style from './style.module.sass';

import Search from '../Search/Search';
import Filter from '../Filter/Filter';

class SearchPanel extends React.Component {
    render() {
        return (
            <div className={style.searchPanel}>
                <Search onUpdateSearch={this.props.onUpdateSearch}/>
                <Filter onUpdateFilters={this.props.onUpdateFilters}/>
            </div>
        )
    }
}

export default SearchPanel;