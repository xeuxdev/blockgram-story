export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  chevronLeft: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  chevronRight: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  telegram: (props: IconProps) => (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.1105 1.43971C18.2517 0.527216 17.3841 -0.193022 16.5728 0.163205L0.413286 7.25807C-0.168538 7.51353 -0.125977 8.39489 0.477462 8.58702L3.80991 9.64828C4.44601 9.85084 5.13467 9.74605 5.69011 9.36235L13.2035 4.1716C13.43 4.01504 13.677 4.33722 13.4834 4.53672L8.07512 10.1126C7.55049 10.6536 7.6546 11.5702 8.28572 11.9659L14.3408 15.763C15.02 16.1888 15.8936 15.7611 16.0206 14.9403L18.1105 1.43971Z"
        fill="currentColor"
      />
    </svg>
  ),
};
