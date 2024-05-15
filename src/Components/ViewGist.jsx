import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewGist() {
  const [gists, setGists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const GitHubURL = process.env.REACT_APP_GITHUB_URL;
      const token = process.env.REACT_APP_TOKEN_GITHUB_API;
      const username = "Kry765";
      try {
        const res = await axios.get(`${GitHubURL}/users/${username}/gists`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const gistsData = res.data.map((gists) => ({
          id: gists.id,
          description: gists.description,
          files: gists.files,
        }));
        setGists(gistsData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {gists.map((gist, index) => (
        <div key={index}>
          <div>{gist.description}</div>
          <div>{gist.id}</div>
        </div>
      ))}
    </div>
  );
}
