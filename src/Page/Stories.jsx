import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';
import { MoneyContext } from '../context/context';
import '../styles/Story.css';

function Stories(props) {

    const {money = []} = useContext(MoneyContext);
    if(!money.length){
        return  <Loader />
    }
    return (
        <div className='content'>
            {
                money && money.map((val,idx)=>{
                    return(
                        <div className='store' key={idx}> 
                            <div style={{overflow:'hidden'}}>
                                <img src={val.thumbnailImage} alt="" className='img_list' />
                            </div>
                            <div>
                                <h4>{val.card}</h4>
                                <p>{val.title}</p>
                                <b>{val.resourceType}</b>
                            </div>
                            <div>
                                <Link to={'/lists/detail/'+val.internalID}>
                                    <button className='btn blue btns'>Detail</button>
                                </Link>
                            </div>
                        </div>
                    )
                }) 
            }
        </div>
    );
}

export default Stories;