import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const Posts = () => {
  const POSTS_QUERY = gql`
      query Posts {
          posts {
              userId
              id
              title,
              user {
                  id,
                  name,
                  username
              }
          }
      }
  `;

  const { data, loading, error } = useQuery(POSTS_QUERY);

  if (loading) return "loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div className="padded-container">
      <h1>Posts</h1>
      <p>Data from a GraphQL API</p>
      <ul>
        {data.posts.map((post) => {
          return (
            <Link to={`/posts/${post.id}`}>
              <li key={post.id}>{post.title}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  );
}

export default Posts
