import style from './style.module.sass';

const Info = ({data}) => {
    const numberEmployees = data.length;
    let numbersIncrease = 0;
    data.forEach(employee => {
        if (employee.increase) 
        numbersIncrease++;
    });

    return (
        <div className={style.info}>
            <h1>Учёт сотрудников в компании N</h1>
            <h2 className={style.info__secTitle}>Общее число сотрудников: {numberEmployees}</h2>
            <h2 className={style.info__secTitle}>Премию получат: {numbersIncrease}</h2>
        </div>
    )
}

export default Info;