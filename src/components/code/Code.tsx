import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import type { CodeProps } from 'react-markdown/lib/ast-to-react';

export const InlineCode = styled.code`
  background-color: #e0e0e0;
`;

const SyntaxHighlight = dynamic(() => import('./SyntaxHighlight'));

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
