import React from 'react';
import s from './Paginator.module.css';


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged }) => {

        let pagesCount = Math.ceil( totalUsersCount / pageSize );
        let pages = [];
        for (let index = 1; index <= pagesCount; index++) {
            pages.push(index);
        }

        return <div>
                    <div className={s.pagination}>
                        {pages.map( p => <span onClick={ (e) => {onPageChanged(p)} } className={currentPage === p && s.selectedPage}>{p}</span>) }
                    </div>
                </div>
}

export default Paginator;