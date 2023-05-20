import React from 'react';

const BuyersGuide = () => {
  return (
    <>
      <div>
        <h2 className="pb-8 text-center text-3xl font-bold tracking-wide">
          Buyers Guide to Purcheasing Real Estate
        </h2>
        <p className="text-xl">
          Buying a home is a big decision, but we are here to help. Our
          comprehensive buyers guide covers everything you need to know, from
          financing to closing. We will help you navigate the real estate market
          with confidence and ease.
        </p>
      </div>
      <div className="flex flex-col justify-evenly gap-8 px-10 py-8 md:flex-row md:px-0">
        <div className="">
          <h3 className="pb-2 text-center text-xl font-semibold">Financing</h3>
          <p>
            Explore your financing options and get preapproved before you start
            house hunting.
          </p>
        </div>
        <div>
          <h3 className="pb-2 text-center text-xl font-semibold">Searching</h3>
          <p>
            Search for properties online or with one of our real estate agents
            to find the home of you dreams.
          </p>
        </div>
        <div>
          <h3 className="pb-2 text-center text-xl font-semibold">
            Negotiating
          </h3>
          <p>
            Negotiating is a crucial skill that empowers buyers to secure
            favorable terms and prices.
          </p>
        </div>
        <div>
          <h3 className="pb-2 text-center text-xl font-semibold">Closing</h3>
          <p>
            We will take you through the closing process step-by-step and make
            sure that everything is in order.
          </p>
        </div>
      </div>
    </>
  );
};

export default BuyersGuide;
