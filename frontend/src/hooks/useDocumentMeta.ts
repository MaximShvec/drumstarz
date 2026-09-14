import { useEffect } from "react";

export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const prevTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute("content") ?? "";

    document.title = title;
    if (description && meta) meta.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
      if (meta && prevDescription) meta.setAttribute("content", prevDescription);
    };
  }, [title, description]);
}
