import { Input } from "@chakra-ui/react";

export const GistInputFilename = ({ gistFileName, setGistFileName }) => {
  return (
    <Input
      placeholder="Filename"
      size="md"
      value={gistFileName}
      onChange={(e) => {
        setGistFileName(e.target.value);
      }}
    />
  );
};
