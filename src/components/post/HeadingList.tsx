import styled from '@emotion/styled';

import type { Heading } from '../../lib/posts/getHeadings';

export const HeadingListContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 20px;
  margin-left: 20px;
`;

export const HeadingListHeading = styled.p<{ depth: number }>`
  font-size: ${(props) => (5 - props.depth) * 2 + 8}px;
  margin: ${(props) => (5 - props.depth) * 4}px 0 0 0;
`;

export type HeadingListProps = {
  headings: Heading[];
};

const HeadingList = ({ headings }: HeadingListProps) => {
  return (
    <HeadingListContainer>
      {headings.map(({ depth, value }, index) => (
        <HeadingListHeading key={index} depth={depth}>
          {value}
        </HeadingListHeading>
      ))}
    </HeadingListContainer>
  );
};

export default HeadingList;
