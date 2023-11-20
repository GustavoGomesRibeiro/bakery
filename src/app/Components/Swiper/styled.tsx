import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
`;

export const Background = styled.div`
  /* background-image: url("/cimento.jpg"); */
`;

export const Content = styled.div``;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 52px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 30px;
`;

export const Text = styled.p`
  margin-top: 20px;
  width: 50%;
`;

export const ContentImage = styled.div``;
export const Img = styled.img`
  max-width: 350px;
  max-height: 350px;
  border-radius: 30px;
  filter: drop-shadow(30px 10px 4px rgba(0, 0, 0, 0.6));
`;
