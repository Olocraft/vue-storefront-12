import * as React from "react";

export interface VsfIconLogoVsfWithNameProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconLogoVsfWithName(
  props: VsfIconLogoVsfWithNameProps
) {
  function useContent() {
    return (
      <>
        <path d="M150.233 11.135h-2.65v3.12h2.65v9.104h3.701v-9.105h3.175v-3.12h-3.175v-.67c0-.461.144-.804.434-1.028.289-.223.716-.335 1.279-.335.233 0 .465.011.697.035.257.03.512.072.765.127V6.167a7.802 7.802 0 0 0-.925-.162 8.488 8.488 0 0 0-1.04-.07c-1.583 0-2.798.386-3.643 1.156-.845.77-1.268 1.872-1.268 3.304v.74ZM85.84 20.886l2.193-2.888c.815.695 1.722 1.27 2.696 1.71a6.669 6.669 0 0 0 2.626.531c.899 0 1.603-.139 2.113-.416.51-.277.765-.662.766-1.155a1.214 1.214 0 0 0-.514-1.04c-.343-.246-.91-.439-1.702-.578l-3.518-.624c-1.294-.23-2.292-.731-2.992-1.501-.7-.77-1.051-1.749-1.05-2.935 0-1.556.582-2.785 1.746-3.686 1.165-.901 2.768-1.352 4.809-1.352a11.02 11.02 0 0 1 3.597.624c1.13.372 2.186.943 3.119 1.687l-2.08 2.935a9.567 9.567 0 0 0-2.455-1.456 6.782 6.782 0 0 0-2.455-.462c-.792 0-1.42.127-1.885.381-.465.254-.697.597-.697 1.028a1.11 1.11 0 0 0 .446.936c.297.224.78.39 1.45.497l3.313.555c1.538.246 2.706.762 3.506 1.548.8.785 1.199 1.802 1.199 3.05 0 1.633-.628 2.927-1.884 3.882-1.257.956-2.966 1.433-5.128 1.433a10.81 10.81 0 0 1-3.827-.717 11.236 11.236 0 0 1-3.392-1.987Zm-41.755 2.473L37.62 7.183h4.25l4.545 12.04 4.637-12.04h4.089L48.585 23.36h-4.5ZM58.59 11.135v7.025a2.124 2.124 0 0 0 .605 1.606 2.077 2.077 0 0 0 1.588.612 2.97 2.97 0 0 0 1.256-.254c.356-.162.67-.408.914-.717v-8.272h3.7v12.224h-3.7v-.832c-.452.344-.958.61-1.496.785a5.503 5.503 0 0 1-1.748.278c-1.416 0-2.574-.462-3.472-1.387-.899-.924-1.348-2.102-1.348-3.535v-7.533h3.7Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M77.675 23.15a7.752 7.752 0 0 0 2.34-1.409l-2.443-2.195a3 3 0 0 1-1.051.682 3.709 3.709 0 0 1-1.37.242 3.107 3.107 0 0 1-1.828-.543 3.22 3.22 0 0 1-1.142-1.398h8.612v-.924a7.642 7.642 0 0 0-.457-2.669 6.3 6.3 0 0 0-1.268-2.114 5.907 5.907 0 0 0-1.99-1.413 5.85 5.85 0 0 0-2.384-.482 6.327 6.327 0 0 0-2.479.485 6.106 6.106 0 0 0-1.999 1.34 6.34 6.34 0 0 0-1.336 2.022 6.33 6.33 0 0 0-.49 2.484c-.006.856.17 1.703.513 2.484a6.36 6.36 0 0 0 1.393 2.022 6.339 6.339 0 0 0 2.09 1.34 6.869 6.869 0 0 0 2.582.486 7.839 7.839 0 0 0 2.707-.44Zm-4.626-8.665a2.513 2.513 0 0 1 1.576-.508 2.454 2.454 0 0 1 1.565.532c.454.362.792.852.97 1.41h-5.048c.151-.568.48-1.071.937-1.434Z"
        />
        <path d="M102.949 14.254v5.384c0 1.28.369 2.246 1.108 2.9.739.655 1.831.982 3.278.982.436-.006.871-.04 1.302-.103a7.58 7.58 0 0 0 1.28-.266v-3.027c-.277.086-.56.151-.846.196-.272.04-.547.059-.822.058-.594 0-1.009-.112-1.245-.335-.236-.223-.354-.605-.354-1.144v-4.645h3.381v-3.12h-3.381v-3.95l-3.701.808v3.143h-2.444v3.12h2.444Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M110.921 17.258a6.113 6.113 0 0 1 .514-2.484c.33-.76.804-1.446 1.394-2.022a6.544 6.544 0 0 1 2.078-1.352 6.897 6.897 0 0 1 5.14 0 6.55 6.55 0 0 1 2.079 1.352 6.376 6.376 0 0 1 1.393 2.022 6.255 6.255 0 0 1 0 4.968 6.37 6.37 0 0 1-1.393 2.022 6.385 6.385 0 0 1-2.079 1.34 7.047 7.047 0 0 1-5.14 0 6.37 6.37 0 0 1-2.078-1.34 6.372 6.372 0 0 1-1.394-2.022 6.113 6.113 0 0 1-.514-2.484Zm6.556 3.097c.392.006.78-.07 1.14-.226a2.8 2.8 0 0 0 .951-.676c.55-.6.856-1.388.856-2.206 0-.819-.306-1.607-.856-2.207a2.9 2.9 0 0 0-2.091-.901 2.87 2.87 0 0 0-2.09.901c-.55.6-.856 1.388-.856 2.207 0 .818.306 1.607.856 2.206a2.768 2.768 0 0 0 2.09.901Z"
        />
        <path d="M125.769 11.135v12.224h3.701v-7.765a3.327 3.327 0 0 1 2.809-1.548 4.506 4.506 0 0 1 1.759.37v-3.258a1.361 1.361 0 0 0-.548-.22 6.674 6.674 0 0 0-.845-.08 3.984 3.984 0 0 0-1.782.392 4.21 4.21 0 0 0-1.393 1.11v-1.225h-3.701Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M146.259 21.741a7.752 7.752 0 0 1-2.341 1.41 7.847 7.847 0 0 1-2.708.439 6.87 6.87 0 0 1-2.581-.485 6.35 6.35 0 0 1-2.09-1.34 6.356 6.356 0 0 1-1.393-2.023 6.08 6.08 0 0 1-.514-2.484 6.335 6.335 0 0 1 .491-2.484 6.344 6.344 0 0 1 1.336-2.022 6.106 6.106 0 0 1 1.999-1.34 6.328 6.328 0 0 1 2.478-.485 5.85 5.85 0 0 1 2.385.482c.753.326 1.43.807 1.99 1.413a6.297 6.297 0 0 1 1.268 2.114c.309.855.464 1.759.456 2.669v.924h-8.611a3.222 3.222 0 0 0 1.142 1.398 3.104 3.104 0 0 0 1.827.543c.468.007.933-.076 1.371-.242.393-.15.751-.383 1.051-.682l2.444 2.195Zm-5.391-7.764a2.513 2.513 0 0 0-1.576.508 2.715 2.715 0 0 0-.937 1.433h5.049a2.962 2.962 0 0 0-.971-1.41 2.455 2.455 0 0 0-1.565-.531Z"
        />
        <path d="M158.662 23.359V11.135h3.701v1.224a4.21 4.21 0 0 1 1.393-1.109 3.984 3.984 0 0 1 1.782-.393c.283.01.565.036.845.081.196.032.383.107.548.22v3.258a4.536 4.536 0 0 0-1.759-.37 3.327 3.327 0 0 0-2.809 1.548v7.765h-3.701Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M168.039 14.774a6.08 6.08 0 0 0-.514 2.484 6.08 6.08 0 0 0 .514 2.484c.329.76.803 1.447 1.393 2.022.6.58 1.306 1.035 2.079 1.34a7.045 7.045 0 0 0 5.139 0 6.368 6.368 0 0 0 2.079-1.34 6.356 6.356 0 0 0 1.393-2.022 6.255 6.255 0 0 0 0-4.968 6.378 6.378 0 0 0-1.393-2.022 6.542 6.542 0 0 0-2.079-1.352 6.894 6.894 0 0 0-5.139 0 6.539 6.539 0 0 0-2.079 1.352 6.376 6.376 0 0 0-1.393 2.022Zm7.181 5.355a2.76 2.76 0 0 1-1.14.226 2.786 2.786 0 0 1-2.089-.901 3.263 3.263 0 0 1-.857-2.207c0-.819.306-1.607.857-2.207a2.895 2.895 0 0 1 2.09-.901 2.874 2.874 0 0 1 2.09.901c.55.6.856 1.388.856 2.207 0 .818-.306 1.607-.856 2.206-.267.29-.59.52-.951.676Z"
        />
        <path d="M182.372 11.135h3.701v.832c.452-.345.957-.61 1.496-.786a5.499 5.499 0 0 1 1.747-.277c1.417 0 2.574.462 3.472 1.386.899.924 1.348 2.103 1.348 3.536v7.533h-3.7v-7.025a2.117 2.117 0 0 0-.606-1.606 2.07 2.07 0 0 0-1.587-.612 2.953 2.953 0 0 0-1.256.254c-.357.162-.67.408-.914.716v8.273h-3.701V11.135Zm15.214 3.119v5.384c-.001 1.28.369 2.246 1.107 2.9.739.655 1.831.982 3.278.982.436-.006.871-.04 1.302-.103.433-.052.861-.14 1.279-.266v-3.027a5.885 5.885 0 0 1-.845.196c-.272.04-.547.059-.822.058-.594 0-1.009-.112-1.245-.335-.236-.223-.354-.605-.354-1.144v-4.645h3.381v-3.12h-3.381v-3.95l-3.7.808v3.143h-2.445v3.12h2.445ZM12.458.942c-.247.156-.49.4-.974.891-.485.49-.727.736-.88.985a2.583 2.583 0 0 0 0 2.701c.153.25.395.495.88.985s.727.736.974.891a2.503 2.503 0 0 0 2.67 0c.247-.155.49-.4.974-.89.485-.49.727-.736.88-.986a2.582 2.582 0 0 0 0-2.7c-.153-.25-.395-.496-.88-.986s-.727-.735-.974-.89a2.503 2.503 0 0 0-2.67 0Zm3.189 15.339 5.64-5.705a2.514 2.514 0 0 1 1.779-.745 2.49 2.49 0 0 1 1.779.745l2.834 2.867-13.84 14L0 13.443l2.864-2.897a2.513 2.513 0 0 1 1.778-.745 2.49 2.49 0 0 1 1.778.745l5.67 5.736a2.514 2.514 0 0 0 1.778.745 2.49 2.49 0 0 0 1.779-.746Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 205 28"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "logo-vsf-with-name"}
      content={useContent()}
    />
  );
}
