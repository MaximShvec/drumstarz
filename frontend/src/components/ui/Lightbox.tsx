import { useEffect, useMemo, useRef } from "react";
import YetLightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import { useLocale } from "../../i18n/LocaleContext";
import { lockBodyScroll } from "../../lib/scrollLock";

export type LightboxItem = {
  src: string;
  alt: string;
};

const PLUGINS = [Zoom, Counter];

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: readonly LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const { t } = useLocale();
  const slides = useMemo(
    () => items.map((item) => ({ src: item.src, alt: item.alt })),
    [items],
  );
  const unlockRef = useRef<(() => void) | undefined>(undefined);

  useEffect(() => {
    return () => {
      unlockRef.current?.();
    };
  }, []);

  return (
    <YetLightbox
      open={index !== null}
      close={onClose}
      index={index ?? 0}
      slides={slides}
      plugins={PLUGINS}
      className="drum-lightbox"
      noScroll={{ disabled: true }}
      controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
      carousel={{ padding: 24, spacing: 16, imageFit: "contain" }}
      animation={{
        fade: 420,
        swipe: 520,
        easing: {
          fade: "cubic-bezier(0.22, 1, 0.36, 1)",
          swipe: "cubic-bezier(0.22, 1, 0.36, 1)",
          navigation: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
      }}
      counter={{ separator: " / " }}
      zoom={{ pinchZoomV4: true, scrollToZoom: true, maxZoomPixelRatio: 2.5 }}
      labels={{
        Next: t.lightbox.next,
        Previous: t.lightbox.previous,
        Close: t.lightbox.close,
        "Zoom in": t.lightbox.zoomIn,
        "Zoom out": t.lightbox.zoomOut,
      }}
      on={{
        entering: () => {
          unlockRef.current?.();
          unlockRef.current = lockBodyScroll();
        },
        exited: () => {
          unlockRef.current?.();
          unlockRef.current = undefined;
        },
        view: ({ index: current }) => {
          if (index !== null) onIndex(current);
        },
      }}
    />
  );
}
