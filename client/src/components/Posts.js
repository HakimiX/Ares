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

  const {data, loading, error} = useQuery(POSTS_QUERY);

  if (loading) return "loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div className="padded-container">
      <h1>Posts</h1>
      <p>Data from a GraphQL API</p>

      <ul>
        {data.posts.map((post) => {
          return (
            <div>
              <h4>{post.title}</h4>
              <div>
                <table border="1">w
                  <thead>
                  <tr>
                    <th>UserID</th>
                    <th>Name</th>
                    <th>Username</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>{post.userId}</td>
                    <td>{post.user.name}</td>
                    <td>{post.user.username}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default Posts
