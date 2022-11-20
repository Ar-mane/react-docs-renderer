import { useEffect, useState } from "react";
import { ContentType } from "../types";

interface UseDocumentConverterResult {
  contentType: ContentType;
  documentBase64: string | undefined;
}

const useDocumentConverter = (
  file: Blob | string
): UseDocumentConverterResult => {
  const [documentBase64, setDocumentBase64] = useState<string>();

  async function blobToBase64(blob: Blob) {
    return new Promise((resolve, __e) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  useEffect(() => {
    if (file instanceof Blob)
      blobToBase64(file).then((base64) => {
        setDocumentBase64(String(base64));
      });
  }, []);
  if (file instanceof Blob)
    return { documentBase64, contentType: file.type as ContentType };
  else return { documentBase64: file, contentType: ContentType.PDF };
};

export default useDocumentConverter;
