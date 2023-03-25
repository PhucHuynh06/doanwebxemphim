import logomovie from '../../asset/images/HTPB6.png'
import { BsSearchHeart } from'react-icons/bs'
import styled from 'styled-components';

import { useScrollY } from '../hooks';

function Navbar(props)
{
    const[scrollY] = useScrollY();
    
    return(
        <Navigation style={scrollY < 50 ? {backgroundColor:'transparent'}:{backgroundColor:'var(--color-background)'}}>
            <div className="navContainer">
                <div className="logo">
                    <img src={logomovie} alt="" />
                </div>
                <div className="navSearch">
                    <BsSearchHeart className="iconSearch"/>
                    <input type="text" placeholder="Tìm Kiếm"/>
                </div>
            </div>
        </Navigation>
    )
}

export default Navbar;

const Navigation = styled.div`
width: 100%;
height: 80px;
poisiton: fixed;
top: 0;
transition-timing-function: ease-in;
transition: all 1s;
z-index: 10;

@media only srceen and (max-width: 600px){
    height: 100px;
}

.navContainer{
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;

    @media only srceen and (max-width: 600px){
        flex-direction: column;
    }

    .logo{
        width: 150px;
        cursor: pointer;
        img{
            width:100%
        }

    }

    .navSearch{
        color: var(--color-white);
        panding-right: 20px;
        display: flex;
        justify-content: flex-end;

        &:hover .iconSearch{
            color: var(--color-white);
        }

        .iconSearch{
            width: 13px;
            height: 13px;
            cursor: pointer;
            transform: translateX(24px) translateY(4px);
            color: #bbb;
        }

        input{
            font-size: 18px;
            border: 1px solid #fff;
            color: white;
            outline: none:
            width: 0;
            panding: 10px;
            cursor: pointer;
            opacity: 0;
            background: var(--color-background);
            transition: width 0.5s;

            &:focus {
                padding-left: 26px;
                width: 300px;
                cursor: text;
                opacity: 1;
                border-radius: 4px;
            }
        }


    }

}

`;

