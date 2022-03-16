import { NextPage } from "next";

interface IWelcomePageProps {}

const WelcomePage: NextPage<IWelcomePageProps> = () => {
  return (
    <main className="container mx-auto">
      <h1>Jai, Hind!</h1>
      <p>Welcome, to WelcomePage!</p>
    </main>
  );
};

export default WelcomePage;
