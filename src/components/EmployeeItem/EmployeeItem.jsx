import React from 'react';

import classNames from 'classnames';

import style from './style.module.sass';

import { ReactComponent as IconTrash } from "./svgTrash.svg";
import { ReactComponent as IconStar } from "./svgStar.svg";
import { ReactComponent as IconMedal } from "./svgMedal.svg";


const EmployeeItem = ({employee, delEmployee, onToggleIncrease, onToggleLike}) => {
    return (
        <li className={classNames(style.item, { [style.active]: employee.increase })}>
            <div onClick={onToggleLike} className={style.itemName}>{employee.name}</div>
            <div className={style.itemSalary}>{employee.salary + '$'}</div>
            <div className={style.itemActions}>
                <IconTrash onClick={delEmployee} className={style.iconTrash}/>
                <IconMedal onClick={onToggleIncrease} className={style.iconMedal}/>
                <IconStar className={classNames({ [style.iconStar]: employee.like })}/>
            </div>
        </li>
    )
}

export default EmployeeItem;