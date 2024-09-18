import { ReactNode, useState } from "react";

const CopyElement = ({
  children,
  text,
}: {
  text: string;
  children: ReactNode;
}) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className="copy-container" onClick={handleCopy}>
      <p className="lg:text-sm md:text-sm font-medium text-text-color-3">
        {children}
      </p>
      <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
    </div>
  );
};

export default CopyElement;
