const Chevron = (
  props: React.SVGProps<SVGSVGElement> & { rotate?: string },
) => {
  const { rotate, style, fill, stroke, ...resProps } = props;
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate})`, ...style }}
      stroke={fill ?? stroke}
      {...resProps}
    >
      <path
        d="M13.3015 3L7.15152 9.15C7.10369 9.19489 7.06557 9.24911 7.03951 9.30931C7.01345 9.3695 7 9.4344 7 9.5C7 9.5656 7.01345 9.6305 7.03951 9.69069C7.06557 9.75089 7.10369 9.80511 7.15152 9.85L13.3015 16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Chevron;
