import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { Button } from "../components/custom-button/custom-button";

export const Singlepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      {post && (
        <>
          <Button onClick={goBack} className="success">
            Go back
          </Button>
          {/* Bad approach */}
          <Button onClick={goHome} className="attention btn">
            Go home
          </Button>
          {post && (
            <>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <Link to={`/posts/${id}/edit`}>Edit this post</Link>
            </>
          )}
        </>
      )}
    </div>
  );
};
