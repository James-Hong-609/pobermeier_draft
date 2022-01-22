interface Props {
  className?: string;
}

const EmailIcon = ({ className }: Props) => {
  return (
    <svg
      width="32"
      height="25"
      viewBox="0 0 32 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M28.8 0H3.2C1.44 0 0.016 1.40625 0.016 3.125L0 21.875C0 23.5938 1.44 25 3.2 25H28.8C30.56 25 32 23.5938 32 21.875V3.125C32 1.40625 30.56 0 28.8 0ZM28.8 6.25L16 14.0625L3.2 6.25V3.125L16 10.9375L28.8 3.125V6.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EmailIcon;
