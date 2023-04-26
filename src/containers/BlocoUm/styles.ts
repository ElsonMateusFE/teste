import styled from 'styled-components'

export const Bloco = styled.div`
  background-color: #f9f9f9;
  padding: 92px 0;

  @media (max-width: 768px) {
    margin-top: 50px;
    padding-top: 2em;
  }

  div {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 41px;
    align-items: center;

    @media (max-width: 768px) {
      display: block;
    }
  }

  img {
    width: 50%;

    @media (min-width: 1921px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`