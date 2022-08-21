import { CircleNotch } from "phosphor-react";

/**
 * @function Loading - componente que representa o loading
 */
export function Loading() {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  );
}
