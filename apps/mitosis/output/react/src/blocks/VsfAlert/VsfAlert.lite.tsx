import * as React from "react";
import type { SlotType } from "../../functions/types";
type VsfAlertTypesKeys = keyof typeof VsfAlertTypes;
export interface VsfAlertProps {
  type?: VsfAlertTypesKeys;
  persistent?: boolean;
  header?: string;
  description?: string;
  slotIcon?: SlotType;
  slotButton?: SlotType;
  handleCloseClick?: () => void;
}

import { classStringFromArray } from "../../functions/domUtils";
import VsfIconInfo from "../VsfIcons/VsfIconInfo.lite";
import VsfIconCheckCircle from "../VsfIcons/VsfIconCheckCircle.lite";
import VsfIconWarning from "../VsfIcons/VsfIconWarning.lite";
import VsfIconError from "../VsfIcons/VsfIconError.lite";
import VsfIconClose from "../VsfIcons/VsfIconClose.lite";
export const VsfAlertTypes = Object.freeze({
  info: "info",
  positive: "positive",
  warning: "warning",
  error: "error",
});
const DEFAULT_VALUES: Required<VsfAlertProps> = {
  type: VsfAlertTypes.info,
  persistent: false,
  header: "Header",
  description: "Description",
  slotIcon: "",
  slotButton: "",
  handleCloseClick: () => {},
};

export default function VsfAlert(props: VsfAlertProps) {
  function useTypeProp() {
    return props.type ?? DEFAULT_VALUES.type;
  }

  function usePersistentProp() {
    return props.persistent ?? DEFAULT_VALUES.persistent;
  }

  function typeClasses() {
    return classStringFromArray([
      props.type === VsfAlertTypes.positive &&
        "bg-primary-100 border-primary-400",
      props.type === VsfAlertTypes.warning &&
        "bg-warning-100 border-warning-500",
      props.type === VsfAlertTypes.error &&
        "bg-negative-100 border-negative-400",
      props.type === VsfAlertTypes.info &&
        "bg-secondary-100 border-secondary-400",
    ]);
  }

  function iconClasses() {
    return classStringFromArray([
      props.type === VsfAlertTypes.positive && "text-primary-600",
      props.type === VsfAlertTypes.warning && "text-warning-700",
      props.type === VsfAlertTypes.error && "text-negative-700",
      props.type === VsfAlertTypes.info && "text-secondary-800",
    ]);
  }

  function close() {
    props.handleCloseClick && props.handleCloseClick();
  }

  return (
    <>
      <div
        role="alert"
        className={`flex flex-wrap justify-between min-h-[3.5rem] pl-4 pr-4 pt-3.5 pb-3.5 rounded-md shadow-medium border ${typeClasses()}`}
      >
        <div className="flex gap-2">
          {!props.slotIcon ? (
            <>
              {useTypeProp() === VsfAlertTypes.info ? (
                <VsfIconInfo className={iconClasses()} />
              ) : null}
              {useTypeProp() === VsfAlertTypes.positive ? (
                <VsfIconCheckCircle className={iconClasses()} />
              ) : null}
              {useTypeProp() === VsfAlertTypes.warning ? (
                <VsfIconWarning className={iconClasses()} />
              ) : null}
              {useTypeProp() === VsfAlertTypes.error ? (
                <VsfIconError className={iconClasses()} />
              ) : null}
            </>
          ) : (
            <div>{props.slotIcon}</div>
          )}

          <div className="flex flex-col flex-shrink text-gray-900 font-body">
            <span className="text-lg font-medium">{props.header}</span>

            <span className="text-base font-normal leading-6">
              {props.description}
            </span>
          </div>
        </div>

        {!props.slotButton ? (
          <>
            <button
              className={usePersistentProp() && "hidden"}
              onClick={(event) => close()}
            >
              <VsfIconClose aria-hidden="true" className={iconClasses()} />
            </button>
          </>
        ) : (
          <div className="button" onClick={(event) => close()}>
            {props.slotButton}
          </div>
        )}
      </div>
    </>
  );
}
