import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewGist() {
  const [takeGist, setTakeGist] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const GitHubURL = process.env.REACT_APP_GITHUB_URL;
      try {
        const res = await axios.get(
          `${GitHubURL}/509bd68dfa2142cfd5cdfe13deb5ff93`
        );
        setTakeGist(JSON.stringify(res.data.description));
        setTakeGist(JSON.stringify(res.data.content));
        setTakeGist(JSON.stringify(res.data.files));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{takeGist}</p>
    </div>
  );
}
