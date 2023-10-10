import { MarkdownList } from "../assets/data";
import { MarkdownGuideWrapper } from "../styledComponents/MarkdownGuideWrapper";

const MarkdownGuide = () => {
  return (
    <MarkdownGuideWrapper>
      <ul>
        {MarkdownList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </MarkdownGuideWrapper>
  );
};

export default MarkdownGuide;
