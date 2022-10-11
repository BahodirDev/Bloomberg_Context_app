import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { MoneyContext } from '../context/context';

function Detail(props) {
    const { postId} = useParams();

    const [detail, setDetail] = useState();
    const navigate = useNavigate()
    const {setComponents, setTags,components,contentTags} = useContext(MoneyContext)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6a00e2d8a4msh46b0d41b6dfba00p17b76fjsnfe5f4f864379',
                'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
            }
        };

        fetch(`https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/detail?internalID=${postId}`, options)
            .then(response => response.json())
            .then(response => {
                setDetail(response);
                setComponents(response.components);
                setTags(response.contentTags);
                console.log(response);
            })
            .catch(err => console.error(err));
    }, [postId])



    return (
        <div>
            <button className='btn btn_back' onClick={()=>navigate(-1)}>
                Back
            </button>
            {
                detail ?
                    <>
                        <div>
                            <h2>{detail.authoredRegion}</h2>
                        </div>
                        {
                            detail.ledeImage  &&
                            <div>
                                <img src={detail.ledeImage.imageURLs.default} alt="" className='d_img' />
                            </div>
                        }
                        <div>
                            <h5>{detail.title}</h5>
                            <b>{detail.type}</b>
                        </div>
                        {
                            detail.readings[0] &&
                            <audio controls  src={detail.readings[0].url}>
                            </audio>
                        }
                            <div>
                                <Link to={'/lists/detail/more/'+postId}>
                                    <button className='btn' style={{margin:"0 10px"}}>Places</button>
                                </Link>
                                <Link to={'/lists/detail/items/'+postId}>
                                    <button className='btn' style={{margin:"0 10px"}}>Items</button>
                                </Link>
                            </div>
                    </>
                    :
                    <Loader />
            }
        </div>
    );
}

export default Detail;