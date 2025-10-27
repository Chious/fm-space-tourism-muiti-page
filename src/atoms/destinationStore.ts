import { atom } from "nanostores";

export const selectedDestination = atom("moon");

export function setSelectedDesination(destination: string) {
  selectedDestination.set(destination);
}
