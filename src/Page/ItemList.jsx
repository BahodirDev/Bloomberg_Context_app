import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { MoneyContext } from '../context/context';
import '../styles/Items.css';
import Pnn from '../utils/bloomberg.png';

function ItemList(props) {

    const { id } = useParams()

    const { setComponents, components = [] } = useContext(MoneyContext)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6a00e2d8a4msh46b0d41b6dfba00p17b76fjsnfe5f4f864379',
                'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
            }
        };

        fetch(`https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/detail?internalID=${id}`, options)
            .then(response => response.json())
            .then(response => {
                setComponents(response.components)
                console.log(response.components)
            })
            .catch(err => console.error(err));
    }, [id])

    const back = useNavigate()

    if(!components.length){
        return <Loader />
    }

    return (
        <div className='items_card'>
            <button className='btn btn_back' onClick={()=>back(-1)}>
                back
            </button>
            {
                components ? components.map((item, index) => {
                    return (
                        <ul className="collection" key={index}>
                            <li className=" collection_avatar">
                                <img src={Pnn} alt="" className="" />
                                    <span className="title">Title</span>
                                    <p>{item.role}
                                    {
                                        item.parts && 
                                      <p>
                                        {item.parts[0].text }
                                      </p>
                                    }
                                    </p>
                                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                            </li>
                        </ul>
                    )
                }) : 'loading'
            }
        </div>
    );
}

export default ItemList;