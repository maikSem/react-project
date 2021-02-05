import React, {useState} from 'react';
import classes from './Paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);  //округляем в большую сторону
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber -1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      { portionNumber >1 &&
      <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>
      }

      {pages
        .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
        .map(p => {
        return <span className={currentPage === p && classes.selectedPage}
                     onClick={() => {
                       onPageChanged(p)
                     }}>
              {p}
            </span>
      })}
      { portionNumber < portionCount &&
      <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>
      }
    </div>
  )
}

export default Paginator;
