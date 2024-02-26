export type TSize = "xs" | "sm" | "md" | "lg" | "xl";

export const getButtonSize = (size: "h" | "w" | "hw", buttonSize: TSize) => {
  const sizeButton = buttonSize === "sm" ? 4 : buttonSize === "md" ? 8 : 14;
  if (size === "h") return `h-${sizeButton}`;
  if (size === "w") return `w-${sizeButton}`;
  if (size === "hw") return `h-${sizeButton} w-${sizeButton}`;
};

export const getIconSize = (iconSize: TSize) => {
  if (iconSize === "sm") return 8;
  if (iconSize === "md") return 16;
  if (iconSize === "lg") return 24;
  if (iconSize === "xl") return 32;
};
