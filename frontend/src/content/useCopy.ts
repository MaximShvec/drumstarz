import { useLocale } from "../i18n/LocaleContext";
import { HOME } from "./home";
import { TRAINERS_COPY } from "./trainers";
import { CONTACTS } from "./contacts";
import { CAMP } from "./camp";
import { KIDS } from "./kids";
import { EVENTS } from "./events";
import { GIFTCARD } from "./giftcard";
import { PERCUSSIONS } from "./percussions";

export function useHome() {
  return HOME[useLocale().locale];
}
export function useTrainersCopy() {
  return TRAINERS_COPY[useLocale().locale];
}
export function useContactsCopy() {
  return CONTACTS[useLocale().locale];
}
export function useCamp() {
  return CAMP[useLocale().locale];
}
export function useKids() {
  return KIDS[useLocale().locale];
}
export function useEvents() {
  return EVENTS[useLocale().locale];
}
export function useGiftcard() {
  return GIFTCARD[useLocale().locale];
}
export function usePercussions() {
  return PERCUSSIONS[useLocale().locale];
}
