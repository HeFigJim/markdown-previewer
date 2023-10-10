import { OutputWrapper } from "../styledComponents/IOWrapper";
import Markdown from "react-markdown";

type MProps = {
  markdown: string;
};

const MarkdownOutput = ({ markdown }: MProps) => {
  return (
    <OutputWrapper>
      <Markdown>{markdown}</Markdown>
    </OutputWrapper>
  );
};

export default MarkdownOutput;
