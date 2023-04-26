import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail ,getSelectedMovieOrShow,removeSelectedMovieOrShow} from '../../features/movies/movieSlice';
import "./MovieDetail.scss"

const MovieDetail = () => {
  const{imdbID}=useParams();
  const dispatch=useDispatch();
  const data=useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(()=>{
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return ()=>{
      //dispatch(remo)
    dispatch(removeSelectedMovieOrShow());
    }
  }
  ,[dispatch,imdbID]);


  return (
    <div className='movie-section'>
 {Object.keys(data).length === 0 ?
      (<div> ...Loading</div>)
      :(
<>

      <div className="section-left">
        <div className='movie-title'>
              {data.Title}
        </div>
        <div className='movie-rating'>
          <span>
            imdb Rating <i className='fa fa-star'></i>:{data.imdbRating}

          </span>
          <span>
            imdb Votes <i className='fa fa-star'></i>:{data.imdbVotes}
            
          </span> <span>
            RunTime <i className='fa fa-star'></i>:{data.Runtime}
            
          </span> <span>
            Year <i className='fa fa-star'></i>:{data.Year}
            
          </span>
        </div>
        <div className='movie-plot'>
          {data.Plot}
        </div>
        <div className='movie-info'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
           <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div> 
          <div>
            <span>Language</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Award</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
     <div className="section-right">
      <img src={data.Poster} alt={data.Title}></img>
     </div>
     </>
      )}
    </div>
  )
}

export default MovieDetail