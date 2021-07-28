import styled from "styled-components";

function compo_LargeCardItem({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <p>{children}</p>
    </Wrapper>
  );
}

function compo_MediumCardItem({ title, children }) {
    return (
      <Wrapper>
        <Title>{title}</Title>
        <p>{children}</p>
      </Wrapper>
    );
  }

  function compo_SmallCardItem({ title, children }) {
    return (
      <Wrapper>
        <Title>{title}</Title>
        <p>{children}</p>
      </Wrapper>
    );
  }

const Title = styled.h2`
  margin-bottom: 8px;
`;

const Wrapper = styled.article`
  border: 1px solid;
  border-radius: 8px;
  padding: 16px;
  margin: 16px auto;
  max-width: 400px;
`;

export {compo_LargeCardItem, compo_MediumCardItem, compo_SmallCardItem};
