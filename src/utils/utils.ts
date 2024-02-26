export const getButtonSize = (size: "h" | "w" | "hw", buttonSize: "sm" | "md" | "lg") => {
  const sizeButton = buttonSize === "sm" ? 4 : buttonSize === "md" ? 8 : 14;
  if (size === "h") return `h-${sizeButton}`;
  if (size === "w") return `w-${sizeButton}`;
  if (size === "hw") return `h-${sizeButton} w-${sizeButton}`;
};
