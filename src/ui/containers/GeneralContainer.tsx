import React from "react";
import { GeneralFooter } from "ui/blocks/footer";
import { GeneralHeader } from "ui/blocks/headers";

interface IGeneralContainerProps {}

export const GeneralContainer: React.FC<IGeneralContainerProps> = ({ children }) => {
  return (
    <main>
      <GeneralHeader />
      {children}
      <GeneralFooter />
    </main>
  );
};
