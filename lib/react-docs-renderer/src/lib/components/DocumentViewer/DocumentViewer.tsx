import type {FC} from "react";
import {useEffect, useRef} from "react";

import {ContentType, ZoomConfig} from "../types";
import {
  DocsRendererMainContainer,
  StyledDocument,
  StyledImage,
  StyledScrollContainer,
  StyledTransformComponent
} from "./DocumentViewer.style";
import {defaultZoomConfig} from "../const";
import DocumentToolbar from "../DocumentToolbar";
import {useDocumentConverter, useDocumentState, usePdfJsRenderer} from "../hooks";

interface IDocumentViewerProps {
  file: Blob | string;
  ZoomConfig?: ZoomConfig;
}

const DocumentViewer: FC<IDocumentViewerProps> = ({
                                                    file,
                                                    ZoomConfig: ZoomProps = defaultZoomConfig,
                                                  }) => {
  const {
    controll: {setCurrentPage, setPageCount, setScale},
    state: {currentPage, pageCount, scale},
  } = useDocumentState(ZoomProps);
  const {maxScale, minScale, initialScale} = ZoomProps;

  const imageRef = useRef<HTMLImageElement>(null);
  const pdfRef = useRef<HTMLCanvasElement>(null);
  const {documentBase64, contentType} = useDocumentConverter(file);

  usePdfJsRenderer({
    canvasRef: pdfRef,
    file: documentBase64,
    page: currentPage,
    scale,
    onPageCount: setPageCount,
  });

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.setAttribute("height", `${scale * 82}%`);
    }
  }, [scale]);

  return (
    <DocsRendererMainContainer>
      <StyledScrollContainer
        initialScale={initialScale}
        initialPositionX={0}
        initialPositionY={0}
        minScale={minScale}
        maxScale={maxScale}
        wheel={{step: ZoomProps.step}}
        pinch={{step: ZoomProps.step}}
      >
        {({zoomIn, zoomOut, state: {scale}}) => {
          setScale(scale);
          return (
            <>
              <StyledTransformComponent>
                {contentType === ContentType.PDF ? (
                  <StyledDocument ref={pdfRef}/>
                ) : (
                  <StyledImage ref={imageRef} src={documentBase64}/>
                )}
              </StyledTransformComponent>
              <DocumentToolbar
                currentPage={currentPage}
                pageCount={pageCount}
                onPageChange={setCurrentPage}
                onZoomIn={() => zoomIn(ZoomProps.step)}
                onZoomOut={() => zoomOut(ZoomProps.step)}
              />
            </>
          );
        }}
      </StyledScrollContainer>
    </DocsRendererMainContainer>
  );
};

export default DocumentViewer;
