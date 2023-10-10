import { Button } from "../styledComponents/Button";
import { HeaderContainer } from "../styledComponents/HeaderContainer";
import { Title } from "../styledComponents/Title";

type HeaderProps = {
  onToggleGuide: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
};

const Header = ({ onToggleGuide, toggle }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={() => onToggleGuide(!toggle)}>Click Me</Button>
    </HeaderContainer>
  );
};

export default Header;
