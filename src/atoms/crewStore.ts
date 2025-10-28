import { atom } from "nanostores";

export const selectedCrew = atom("Douglas Hurley");

export function setSelectedCrew(crew: string) {
  selectedCrew.set(crew);
}
