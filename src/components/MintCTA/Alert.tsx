import { PropsWithChildren } from "react";

interface AlertProps {
  status: "success" | "error";
}

export const Alert: React.FC<PropsWithChildren<AlertProps>> = ({
  status,
  children,
}) => {
  if (status === "error") {
    return (
      <div
        className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-5"
        role="alert"
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-5"
      role="alert"
    >
      {children}
    </div>
  );
};
