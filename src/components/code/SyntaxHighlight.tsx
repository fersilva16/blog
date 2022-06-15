import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import Prism from 'react-syntax-highlighter/dist/cjs/prism-async';
import draculaStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

const SyntaxHighlight = ({ children, ...props }: SyntaxHighlighterProps) => {
  return (
    <Prism style={draculaStyle} customStyle={{ fontSize: '12px' }} {...props}>
      {String(children)}
    </Prism>
  );
};

export default SyntaxHighlight;
