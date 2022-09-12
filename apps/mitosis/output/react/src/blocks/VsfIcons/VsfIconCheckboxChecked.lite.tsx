import * as React from "react";

export interface VsfIconCheckboxCheckedProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconCheckboxChecked(
  props: VsfIconCheckboxCheckedProps
) {
  function useContent() {
    return (
      <>
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8.293 13.293a1 1 0 0 1-1.414 0l-3.585-3.585a1 1 0 0 1 1.414-1.415L10 14.17l6.878-6.877a1 1 0 0 1 1.415 1.414l-7.586 7.586Z" />
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8.293 13.293a1 1 0 0 1-1.414 0l-3.585-3.585a1 1 0 0 1 1.414-1.415L10 14.17l6.878-6.877a1 1 0 0 1 1.415 1.414l-7.586 7.586Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "checkbox-checked"}
      content={useContent()}
    />
  );
}
