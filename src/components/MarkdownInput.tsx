import { InputWrapper } from "../styledComponents/IOWrapper";
import { StyledTextArea } from "../styledComponents/styledTextArea";

type MProps = {
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  markdown: string;
};

const MarkdownInput = ({ markdown, setMarkdown }: MProps) => {
  return (
    <InputWrapper>
      <StyledTextArea
        placeholder="Hello"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></StyledTextArea>
    </InputWrapper>
  );
};

export default MarkdownInput;
