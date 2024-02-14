import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post({_id,title,summary,cover,content,createdAt,author}) {

  return (
    <div className="post">
      {/* <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
        </Link>
      </div> */}
      
      <div className="texts">
      <p className="info">
          <a className="author">by Dr. {author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <Link to={`/post/${_id}`}>
        <h3>Patient Name: {title}</h3>
        </Link>
        
        <p className="summary">Age:{summary}</p>
      </div>
    </div>
  );
}