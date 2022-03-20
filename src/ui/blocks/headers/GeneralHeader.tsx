import React from "react";
import { RoutesDict } from "src/constants/RoutesDict";
import { Anchor } from "ui/elements/anchor";
import { Button } from "ui/elements/button";
import { GeneralLogo } from "ui/elements/logo";

interface IGeneralHeaderProps {}

export const GeneralHeader: React.FC<IGeneralHeaderProps> = () => {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Anchor href={RoutesDict.common.welcome}>
          <GeneralLogo className="h-14 w-24" />
        </Anchor>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Anchor href={RoutesDict.common.welcome} className="mr-5">
            Home
          </Anchor>
          <Anchor href={RoutesDict.common.features} className="mr-5">
            Features
          </Anchor>
          <Anchor href="#" className="mr-5">
            Articles
          </Anchor>
          <Anchor href={RoutesDict.common.about} className="mr-5">
            About
          </Anchor>
          <Anchor href={RoutesDict.common.contact} className="mr-5">
            Contact
          </Anchor>
        </nav>
        <Button className="mt-4 md:mt-0">Learn More</Button>
      </div>
    </header>
  );
};
