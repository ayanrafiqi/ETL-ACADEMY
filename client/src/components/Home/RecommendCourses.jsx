import {useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getRecommendedCourses } from '../../services/pinnedCoursesService';
import { getPlaylists } from '../../utils/youtube-search';

const RecommendCourses = () => {
   const [data, setData] =useState([]);

   useEffect(()=>{
      getRecommendedCourses((d)=>{
        if (d.length > 0) {
            getPlaylists(
              d.map((x) => x.courseId),
              (res) => {
                //console.log(res);
                setData(res.items);
              }
            );
          }
      });
   },[])
  return (
    <div>
       <div className="row">{
        data.map((item)=>{
            return <Link className="col-md-4 pl-2" key={item.id} to={"/courseDetails/" + item.id}>
                <img src={item.snippet.thumbnails.medium.url} alt= {item.snippet.description}/>
                <p className="text-truncate"> {item.snippet.description}</p>
            </Link>
        })
        } </div>
     
   </div>
  )
}

export default RecommendCourses