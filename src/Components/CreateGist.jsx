import { GistInputDescription } from "./CommonComponents/GistInputDescription";
import { GistInputFilename } from "./CommonComponents/GistInputFilename";
import { GistTextareaCode } from "./CommonComponents/GistTextareaCode";
import { GistButton } from "./CommonComponents/GistButton";
import { useState } from "react";
import axios from "axios";

export const CreateGist = () => {
  const [descriptionGist, setDescriptionGist] = useState("");
  const [gistFileName, setGistFileName] = useState("");
  const [gistCode, setGistCode] = useState("");

  const handleCreateGist = async (e) => {
    e.preventDefault();
    console.log("done");
    try {
      const res = await axios.post(
        `${GitHubURL}/gists`,
        {
          description: descriptionGist,
          files: {
            [gistFileName]: {
              content: gistCode,
            },
          },
        },
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: token,
          },
        }
      );

      console.log("Gist created successfully:", res.data);
    } catch (err) {
      console.error("Error creating Gist:", err);
    }
  };

  return (
    <>
      <GistInputDescription
        descriptionGist={descriptionGist}
        setDescriptionGist={setDescriptionGist}
      />
      <GistInputFilename
        gistFileName={gistFileName}
        setGistFileName={setGistFileName}
      />
      <GistTextareaCode gistCode={gistCode} setGistCode={setGistCode} />
      <GistButton handleCreateGist={handleCreateGist} />
    </>
  );
};
