import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import Prism from 'react-syntax-highlighter/dist/cjs/prism-async-light';
import draculaStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

Prism.registerLanguage('ts', typescript);

const SyntaxHighlight = ({ children, ...props }: SyntaxHighlighterProps) => {
  return (
    <Prism style={draculaStyle} customStyle={{ fontSize: '12px' }} {...props}>
      {String(children)}
    </Prism>
  );
};

export default SyntaxHighlight;
