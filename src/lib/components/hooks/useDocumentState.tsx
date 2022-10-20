import { RenderingControll, RenderingState } from "../types";
import { useState } from "react";
import { defaultZoomConfig } from "../const";

type UseDocumentStateResult = {
  controll: RenderingControll;
  state: RenderingState;
};
const useDocumentState = (
  zoomConfig = defaultZoomConfig
): UseDocumentStateResult => {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(zoomConfig.minScale);

  return {
    controll: {
      setCurrentPage,
      setPageCount,
      setScale,
    },
    state: { pageCount, scale, currentPage },
  };
};

export default useDocumentState;
