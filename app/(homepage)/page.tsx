import FindCreators from "./_components/find-creators";
import Hero from "./_components/hero";
import Linkbio from "./_components/linkbio";
import Shop from "./_components/shop";
import Transaction from "./_components/transaction";
import Tribe from "./_components/tribe";
import Withdraw from "./_components/withdraw";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Tribe */}
      <Tribe />

      {/* Shop */}
      <Shop />

      {/* LinkBio */}
      <Linkbio />

      {/* Transaction */}
      <Transaction />

      {/* Withdraw */}
      <Withdraw />

      {/* FindCreators */}
      <FindCreators />
    </>
  );
};

export default HomePage;
