import tw, { styled } from "twin.macro";
import { useTheme } from "../styles/theme";
import { useIsMounted } from "@/hooks/useIsMounted";

export const XIcon: React.FC<any> = (props) => {
  const { colorMode } = useTheme();

  const isMounted = useIsMounted();

  return (
    <svg
      viewBox="0 0 300 301"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      key={isMounted ? "mounted" : "unmounted"}
      {...props}
    >
      <path
        d="M178.57,127.15L290.27,0L263.81,0L166.78,110.38L89.34,0L0,0L117.13,166.93L0,300.25L26.46,300.25L128.86,183.66L210.66,300.25L300,300.25M36.01,19.54L76.66,19.54L263.79,281.67L223.13,281.67"
        style={{
          fillRule: "nonzero",
          fill: colorMode == "dark" ? "white" : "black",
        }}
      />
    </svg>
  );
};

export const DiscordIcon: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 127.14 96.36"
    {...props}
  >
    <g data-name="\\u56FE\\u5C42 2">
      <g data-name="Discord Logo">
        <path
          d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z"
          style={{
            fill: "#5865f2",
          }}
          data-name="Discord Logo"
        />
      </g>
    </g>
  </svg>
);

export const RailwayIcon = () => (
  <svg
    fill="currentColor"
    data-v-423bf9ae=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 65.99939578809374 66.0"
    aria-hidden="true"
  >
    <g
      data-v-423bf9ae=""
      id="6f639fe5-02e1-4640-a1fb-f4b22b64e5ef"
      transform="matrix(0.5999641134746578,0,0,0.5999641134746578,-437.5538206497148,-266.68705118956507)"
      stroke="none"
    >
      <path d="M729.872 487.327a50.86 50.86 0 0 0-.464 5.033h75.879c-.265-.518-.621-.985-.98-1.442-12.972-16.769-19.95-15.315-29.932-15.741-3.328-.137-5.585-.192-18.832-.192-7.09 0-14.798.018-22.304.038.737-1.746 1.6-3.419 2.525-5.061-2.885 5.106-4.865 10.771-5.805 16.789l.891-4.397c.007-.031.018-.063.024-.094h38.883v5.067h-39.885zM805.885 497.432h-76.438c.08 1.352.206 2.686.388 4.002h70.571c3.146 0 4.907-1.786 5.479-4.002zM733.851 515.257a52.226 52.226 0 0 1-1.98-4.997c6.608 19.89 25.328 34.251 47.433 34.251 20.205 0 37.566-12.007 45.452-29.254h-90.905zM729.38 492.915c-.018.531-.08 1.055-.08 1.589 0 .538.063 1.059.08 1.59v-3.179zM824.77 515.229z"></path>
      <path d="M779.303 444.505c-18.682 0-34.939 10.265-43.524 25.439 6.709-.014 19.775-.022 19.775-.022h.003v-.005c15.444 0 16.018.069 19.035.195l1.868.069c6.507.217 14.505.916 20.798 5.68 3.416 2.584 8.348 8.287 11.288 12.35 2.718 3.758 3.5 8.078 1.652 12.217-1.701 3.804-5.361 6.073-9.793 6.073H730.85l-.884-4.201c.426 2.707 1.037 5.344 1.879 7.886h94.914a49.863 49.863 0 0 0 2.546-15.682c.001-27.611-22.386-49.999-50.002-49.999z"></path>
    </g>
  </svg>
);

export const RssIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#853BCE"
    tw="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
    />
  </svg>
);
