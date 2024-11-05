import iconMoney from "@/assets/icon-money.png";
import iconChat from "@/assets/icon-chat.png";
import iconSecurity from "@/assets/icon-security.png";

const Home = () => {
  return (
    <main>
      <div className="relative h-[300px] sm:h-[400px] bg-cover bg-no-repeat bg-[url('../assets/bank-tree.jpeg')] bg-[0_-50px] sm:bg-[0_33%]">
        <section className="relative top-8 sm:absolute sm:top-12 sm:right-12 w-[200px] sm:w-[300px] bg-white p-8 text-left m-auto sm:my-8">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="font-semibold text-base sm:text-xl m-0">No fees.</p>
          <p className="font-semibold text-base sm:text-xl m-0">
            No minimum deposit.
          </p>
          <p className="font-semibold text-base sm:text-xl m-0">
            High interest rates.
          </p>
          <p className="mt-4 text-sm sm:text-lg">
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>
      <section className="flex flex-col sm:flex-row">
        <h2 className="sr-only">Features</h2>
        <div className="flex-1 p-10 text-center">
          <img
            src={iconChat}
            alt="Chat Icon"
            className="size-32 border-8 border-[#00bc77] rounded-full p-4 mx-auto"
          />
          <h3 className="text-xl font-bold mt-4 text-[#222]">
            You are our #1 priority
          </h3>
          <p className="mt-4 font-light">
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="flex-1 p-10 text-center">
          <img
            src={iconMoney}
            alt="Money Icon"
            className="size-32 border-8 border-[#00bc77] rounded-full p-4 mx-auto"
          />
          <h3 className="text-xl font-bold mt-4 text-[#222]">
            More savings means higher rates
          </h3>
          <p className="mt-4 font-light">
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="flex-1 p-10 text-center">
          <img
            src={iconSecurity}
            alt="Security Icon"
            className="size-32 border-8 border-[#00bc77] rounded-full p-4 mx-auto"
          />
          <h3 className="text-xl font-bold mt-4 text-[#222]">
            Security you can trust
          </h3>
          <p className="mt-4 font-light">
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
