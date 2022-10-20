import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import styled from "styled-components";

export const DocsRendererMainContainer = styled.div`
  align-content: center;
  display: flex;
  height: inherit;
  justify-content: center;
  position: relative;
  width: inherit;
  .react-transform-wrapper {
    height: unset !important;
    width: inherit;
  }
`;

export const StyledScrollContainer = styled(TransformWrapper)``;
export const StyledTransformComponent = styled(TransformComponent)`
  height: inherit;
  width: inherit;
`;
export const StyledDocument = styled.canvas``;
export const StyledImage = styled.img``;
