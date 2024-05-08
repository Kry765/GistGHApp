import { Input } from "@chakra-ui/react";

export const GistInputDescription = ({
  descriptionGist,
  setDescriptionGist,
}) => {
  return (
    <Input
      placeholder="Name"
      size="md"
      value={descriptionGist}
      onChange={(e) => setDescriptionGist(e.target.value)}
    />
  );
};
