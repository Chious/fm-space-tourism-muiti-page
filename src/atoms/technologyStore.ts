import { atom } from "nanostores";

export const selectedTechnology = atom("Launch vehicle");

export function setSelectedTechnology(technology: string) {
  selectedTechnology.set(technology);
}
