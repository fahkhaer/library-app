type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={`max-w-7xl md:pt-12 mx-auto w-full  bg-[#fafafa]  ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
}
