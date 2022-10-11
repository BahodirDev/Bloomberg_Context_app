import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { MoneyContext } from '../context/context';
import '../styles/tags.css'

function Tags(props) {


    const { id } = useParams()

    const back = useNavigate()

    const { setTags, contentTags = []} = useContext(MoneyContext)

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
                setTags(response.contentTags);
            })
            .catch(err => console.error(err));
    }, [id])



    if(!contentTags.length){
        return <Loader />
    }
    return (
        <>
            <button className='btn btn_back'  onClick={() => back(-1)}>
                Back
            </button>
            <div className='con_tags'>
                {
                    contentTags ? contentTags.map((val, idx) => {
                        return (
                            <div className='tags_con' key={idx}>
                                <h3>Title: {val.id}</h3>
                                <h4>Place: {val.type}</h4>
                                <b>Income Score: {val.derivedScore}</b>
                            </div>
                        )
                    }) : "Loading"
                }
            </div>
        </>

    );
}

export default Tags;