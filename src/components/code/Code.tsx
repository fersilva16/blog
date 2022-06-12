import styled from '@emotion/styled';
import { CodeProps } from 'react-markdown/lib/ast-to-react';

import SyntaxHighlight from './SyntaxHighlight';

export const InlineCode = styled.code`
  background-color: #e0e0e0;
`;

const Code = ({ className, inline, children, ...props }: CodeProps) => {
  const [, language] = /language-(\w+)/.exec(className || '') || [];

  if (inline) {
    return (
      <InlineCode className={className} {...props}>
        {children}
      </InlineCode>
    );
  }

  return (
    <SyntaxHighlight language={language}>{String(children)}</SyntaxHighlight>
  );
};

export default Code;
