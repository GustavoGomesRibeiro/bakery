import styled from "styled-components";

export const Container = styled.div``;

export const CustomShape = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 300px;
  }

  .shape-fill {
    fill: #edf5f8;
  }
`;

export const CustomShape2 = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 300px;
  }

  .shape-fill2 {
    fill: #fff;
  }
`;
