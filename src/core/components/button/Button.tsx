import { ComponentProps } from "react";
import clsx from "clsx";
import { classes } from "./styles.tsx";

type ButtonProps = {
  type?: "button" | "submit";
  variant?: "default" | "primary" | "danger";
  size?: "sm" | "base" | "lg";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};

export function Button(props: ComponentProps<"button"> & ButtonProps) {
  let size = props.size || "base";
  let variant = props.variant || "default";
  let className = props.className || "";
  let type = props.type || "button";
  return (
    <button
      type={type}
      className={clsx(
        classes.base,
        classes.size[size],
        classes.variant[variant],
        props.disabled && classes.disabled,
        props.loading && classes.disabled,
        className
      )}
    >
      {props.children}
    </button>
  );
}
