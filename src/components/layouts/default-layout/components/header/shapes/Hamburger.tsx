const Hamburger = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
    </svg>
  );
};

export default Hamburger;
