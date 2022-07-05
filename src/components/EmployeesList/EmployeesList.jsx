import style from './style.module.sass';
import EmployeeItem from '../EmployeeItem/EmployeeItem';

const EmployeesList = ({data, delEmployee, onToggleIncrease, onToggleLike}) => {
    return (
        <ul className={style.list}>
            {data.map(item => <EmployeeItem
                employee={item}
                delEmployee={() => delEmployee(item.id)}
                onToggleIncrease={() => onToggleIncrease(item.id)}
                onToggleLike={() => onToggleLike(item.id)}
                key={item.id}/>)}
        </ul>
    )
}

export default EmployeesList;