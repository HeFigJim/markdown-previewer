import React, { useState } from "react";
import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";
import { IOWrapper } from "./styledComponents/IOWrapper";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";

function App() {
  const [show, setToggle] = useState(false);
  const [markdown, setMarkdown] = useState("");

  return (
    <React.Fragment>
      <Header onToggleGuide={setToggle} toggle={show} />
      {show && <MarkdownGuide />}
      <IOWrapper>
        <MarkdownInput markdown={markdown} setMarkdown={setMarkdown} />
        <MarkdownOutput markdown={markdown} />
      </IOWrapper>
    </React.Fragment>
  );
}

export default App;
