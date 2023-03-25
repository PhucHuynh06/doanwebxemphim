import styled from "styled-components";
import{FiChevronLeft, FiChevronRight} from 'react-icons/fi';
const movies = [
    "https://images.ctfassets.net/4cd45et68cgf/4g2KWWsb3asC3VQVYS2eSs/3d1520b9ef5dac16f7ee6b06da3b3e73/DE_1899S1_Main_Vertical_27x40_RGB_PRE.jpg?w=2560",
    "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQePzTRUAxVRh2HMZ_e-VveoJ8aiePGkgnvruipwpBy0LUhMQhKHBDVrjXbcdsSeVcQHqtNCkJcPCAZMpqHoVmxItrAAILt7xtq25abqmWZrTY7vFQEiDK-rjaq4t63GdPEb_TOFpLDwLPeW_PkLhaGx2.jpg?r=93e",
    "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZFxAQb34bSaSqI3Jb7BiYqp70demsTjeaJE0pMi_MJ6PpjRLOFtTDbIZX9Jg2rGG-GHhsQbqnsIvNliI2f-9A5lI1EtQTo9lz6_mrlawP_9S0im23nEGRK42bObCi4CjrsWk1j2JlDmeva2FcYz_an9.jpg?r=7e3",
    "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTfveHtj4aHbF1IOAZ8iY-pEJf-7Niwa0xHiz8IxtjxRBp4TDGhm5t6NoMsyWEt9rOVOvsITYG5rDw_EXe-ToaKjYc-LguPQKL9uW74cpiPKoI9hPbHGXcAEu9JJKZ5POKMOQx6BOjGVM5feYxzKxypS.jpg?r=33e",
    "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQVQiOqnRf2weg1EsZQgL8d9fT5TWXw0f9I72szGHjhaPFGJm-X64hibhsAp9W7PtRlr2-fDh2UqJCxYM7c_MPZk407f7TBlQGwNNTk2_8At5CmWmLYk8bgQCkmBmiZtEWc_Ml7PNFFWmvcZfk3v0C3_O.jpg?r=53b",
    "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/04/phim-netflix-hay-11-696x1043.jpg?fit=700%2C20000&quality=95&ssl=1",
    "https://cdn-amz.woka.io/images/I/71Y5pMAw8rL.jpg",
    "https://pbs.twimg.com/media/Ec_7SzOUEAAuGit.jpg:large",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUg-YNsQaadZrhK7e3HDqvhD2knPF6nNwJT8_Kk-77AY_RGwWR30diC9Nc9SaeM5tabac&usqp=CAU",
    "https://icdn.dantri.com.vn/5tCJlExdL5RVv2qRwNpyUSzH5NlauD/Image/2014/11/41-4dca1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxO6iBTqdXYgb2CtUP9t_xeD11ebYyCQj03wWXxAexjbT6mLZkenC65dUcXbioq_Damk&usqp=CAU",
];

function Contents(props){
    return(
        <MoviesRowContainer>
            <h1 className="heading">Phim Gốc</h1>
            <MoviesSlider>
                {
                    movies.map((movies, index) => (
                        <div key={index} className="movieitem">
                            <img src={movies} alt="" />
                            <div className="moviename">Tên Phim </div>
                        </div>
                    )

                    )
                }
            </MoviesSlider>
            <div className="btnLeft">
                <FiChevronLeft />
            </div>
            <div className="btnRight">
                <FiChevronRight />
            </div>

        </MoviesRowContainer>
    )
}

export default Contents;

const MoviesRowContainer = styled.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding: 20px 20px 0;
    posisiton: relative;
    width: 100%;
    height: 100%;

    .heading{
        font-size: 18px;
        user-select: none;
    }

    .btnLeft{
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);
        &:hover{
            background-color: rgba(0,0,0,0.8);
        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.2);
        }
        svg{
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
        }
      }
      
      

    .btnRight{
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);
        &:hover{
            background-color: rgba(0,0,0,0.8);
        }
        &:hover svg{
            opacity: 1;
            transform: scale(1.2);
        }
        svg{
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
        }
      }
    
`;

const MoviesSlider = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(${movies.length}, 300px);
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;

    &:hover .movieitem{
        opacity: 0.5;
    }

    .movieitem{
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transfrom: center left;
        position: relative;

        &:hover{
            opacity: 1;
            transform: scale(1.1);
            z-index: 10;
        }

        img{
            wight: 100%;
            height: 100%;
            object-fit: cover;
        }

        .moviename{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 4px;
            text-align: center;
            font-size: 14px;
            background-color: rgba(0,0,0,0.6);

        }
    }   

`;