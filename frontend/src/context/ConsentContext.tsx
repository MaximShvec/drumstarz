import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const KEY = "drumstarz-consent";

export type ConsentChoice = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

type ConsentValue = {
  choice: ConsentChoice | null;
  settingsOpen: boolean;
  openSettings: () => void;
  acceptAll: () => void;
  rejectOptional: () => void;
  save: (next: Pick<ConsentChoice, "analytics" | "marketing">) => void;
  closeSettings: () => void;
};

const ConsentContext = createContext<ConsentValue | null>(null);

function readChoice(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentChoice;
    if (parsed?.necessary === true && typeof parsed.analytics === "boolean" && typeof parsed.marketing === "boolean") {
      return parsed;
    }
  } catch {
    return null;
  }
  return null;
}

function store(choice: ConsentChoice) {
  localStorage.setItem(KEY, JSON.stringify(choice));
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<ConsentChoice | null>(() => readChoice());
  const [settingsOpen, setSettingsOpen] = useState(false);

  const acceptAll = useCallback(() => {
    const next: ConsentChoice = { necessary: true, analytics: true, marketing: true };
    store(next);
    setChoice(next);
    setSettingsOpen(false);
  }, []);

  const rejectOptional = useCallback(() => {
    const next: ConsentChoice = { necessary: true, analytics: false, marketing: false };
    store(next);
    setChoice(next);
    setSettingsOpen(false);
  }, []);

  const save = useCallback((next: Pick<ConsentChoice, "analytics" | "marketing">) => {
    const stored: ConsentChoice = { necessary: true, ...next };
    store(stored);
    setChoice(stored);
    setSettingsOpen(false);
  }, []);

  const value = useMemo<ConsentValue>(
    () => ({
      choice,
      settingsOpen,
      openSettings: () => setSettingsOpen(true),
      acceptAll,
      rejectOptional,
      save,
      closeSettings: () => setSettingsOpen(false),
    }),
    [acceptAll, choice, rejectOptional, save, settingsOpen],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
