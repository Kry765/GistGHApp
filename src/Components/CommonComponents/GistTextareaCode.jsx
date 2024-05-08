import { Textarea } from "@chakra-ui/react";
import { React } from "react";

export const GistTextareaCode = ({ gistCode, setGistCode }) => {
  return (
    <>
      <Textarea
        placeholder="Here is a sample placeholder"
        value={gistCode}
        onChange={(e) => setGistCode(e.target.value)}
        size="sm"
      />
    </>
  );
};
