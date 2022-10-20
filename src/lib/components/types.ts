export enum ContentType {
  PDF = "application/pdf",
  PNG = "IMAGE/PNG",
  JPG = "IMAGE/JPG",
}

export interface ZoomConfig {
  step: number;
  minScale: number;
  maxScale: number;
  initialScale: number;
}

export interface RenderingState {
  scale: number;
  pageCount: number;
  currentPage: number;
}
export interface RenderingControll {
  setScale: (number: number) => void;
  setPageCount: (pageCount: number) => void;
  setCurrentPage: (page: number) => void;
}
