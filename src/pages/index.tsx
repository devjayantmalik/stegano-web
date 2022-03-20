import { NextPage } from "next";
import { GeneralFooter } from "ui/blocks/footer";
import { GeneralHeader } from "ui/blocks/headers";
import { FAQSection, FeaturesSection, HeroSection, NewsletterSection } from "ui/blocks/sections";

interface IWelcomePageProps {}

const WelcomePage: NextPage<IWelcomePageProps> = () => {
  return (
    <main>
      <GeneralHeader />

      <HeroSection />
      <FeaturesSection />
      <FAQSection />
      <NewsletterSection />

      <GeneralFooter />
    </main>
  );
};

export default WelcomePage;
