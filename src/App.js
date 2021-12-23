import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import jsonData from './MOCK_DATA.json';
import './App.css';
import Header from './component/header';
function App(){

    const  [users,setUsers]=useState(jsonData);

    const [pageNumber,setPageNumber]=useState(0);

    const usersPerPage=10;

    const pageVisited =pageNumber*usersPerPage;

    const displayUsers =users
    .slice(pageVisited,pageVisited+usersPerPage).map((user)=>{
     
            return <div key={user.id} className='displayContainer'>
                <div className='infoDiv'> 
                <h3>{user.vedio_name}</h3>
                <p>{user.place} - {user.first_name} - {user.date}</p>
                <p>{user.detail}</p>
                </div>
                <div className='vedioDiv'>
                <img src={user.vedio_link} alt="Girl in a jacket" ></img> 
                  
                </div>
               
            </div>;
        
    });
    const pageCount = Math.ceil(users.length/usersPerPage);

    const handlePageClick = (data)=>{
          
        console.log(data.selected)
        setPageNumber(data.selected);
      
    }




    return (
        <div>
            <Header />
         
         

    <ReactPaginate 
       previousLabel={'<'}
       nextLabel={'>'} 
       breakLabel={' . . . '}
       pageCount={pageCount}
       marginPagesDisplayed={2}
       pageRangeDisplayed={3}
       onPageChange={handlePageClick}
       containerClassName={'pageContainer justify-content-center'}
       pageClassName={'pageItem'}
       pageLinkClassName={'pageLink'}
       previousClassName={'pageItem'}
       previousLinkClassName='pageLinkButton'
       nextClassName='pageItem'
       nextLinkClassName='pageLinkButton'
       breakClassName='pageItem'
       breakLinkClassName='pageLink'
       activeClassName='btn active'
       />
        {displayUsers}

        </div>
    )

}

export default App;