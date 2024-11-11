export const Transactions = ({
  subject,
  numberOfTransactions,
  amount,
  status,
}) => {
  return (
    <section className="bg-white border border-black w-[80%] mx-auto mb-8 p-6 flex flex-col text-left box-border md:flex-row">
      <div className="flex-1 w-full">
        <h3 className="text-base font-normal m-0 p-0">
          {subject} (x{numberOfTransactions})
        </h3>
        <p className="text-4xl font-bold m-0">${amount}</p>
        <p className="m-0">{status}</p>
      </div>
      <div className="w-full md:w-auto mt-4 md:mt-0">
        <button className="w-full md:w-[200px] py-2 text-lg font-bold bg-[#00bc77] text-white border border-[#00bc77]">
          View transactions
        </button>
      </div>
    </section>
  );
};
