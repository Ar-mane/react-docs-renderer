import {
  PDFToolbar,
  StyledIcon,
  StyledPageController,
  StyledPageLabel,
  StyledZoomController,
} from "./DocumentToolbar.style";

import type { FC } from "react";
import { AiOutlineZoomIn } from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface IDocumentViewerToolbarProps {
  pageCount: number;
  currentPage: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onPageChange: (page: number) => void;
}

const DefaultDocumentToolbar: FC<IDocumentViewerToolbarProps> = ({
  currentPage,
  pageCount,
  onPageChange,
  onZoomIn,
  onZoomOut,
}) => {
  const canBackward = currentPage > 1;
  const canForward = currentPage < pageCount;

  return (
    <PDFToolbar>
      <StyledPageController>
        <StyledIcon>
          <BsChevronLeft
            size={15}
            fill={"white"}
            strokeWidth={1}
            onClick={() => {
              canBackward && onPageChange(currentPage - 1);
            }}
          />
        </StyledIcon>
        <StyledPageLabel>
          Page :<span>{`${currentPage} / ${pageCount}`}</span>
        </StyledPageLabel>
        <StyledIcon>
          <BsChevronRight
            size={15}
            fill={"white"}
            strokeWidth={1}
            onClick={() => {
              canForward && onPageChange(currentPage + 1);
            }}
          />
        </StyledIcon>
      </StyledPageController>
      <StyledZoomController>
        <StyledIcon>
          <BiMinus size={20} fill={"white"} onClick={onZoomOut} />
        </StyledIcon>
        <AiOutlineZoomIn size={20} fill={"white"} />
        <StyledIcon>
          <BiPlus size={20} fill={"white"} onClick={onZoomIn} />
        </StyledIcon>
      </StyledZoomController>
    </PDFToolbar>
  );
};

export default DefaultDocumentToolbar;
