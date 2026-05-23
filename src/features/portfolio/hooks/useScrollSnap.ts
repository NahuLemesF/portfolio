import { type RefObject } from "react";

/**
 * Hook para la gestión del Scroll Snapping.
 * 
 * NOTA DE DISEÑO UX/UI:
 * Delegamos el snapping al comportamiento nativo de CSS del navegador (scroll-snap-type: y mandatory).
 * Esto evita el fenómeno de "scrolljacking" (secuestro del scroll por JS), el cual rompe la inercia
 * natural de los trackpads (especialmente en macOS) y provoca bugs de doble salto.
 * El motor nativo es acelerado por hardware, accesible y 100% libre de bugs de rebote.
 */
export function useScrollSnap(_scrollContainerRef: RefObject<HTMLDivElement | null>) {
  // El comportamiento se maneja de forma nativa por CSS en App.tsx y SnapScreen.tsx
}

