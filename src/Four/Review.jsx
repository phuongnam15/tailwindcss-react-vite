import Star from "./Star";

function Review() {
  return (
    <div className="flex w-[35%] flex-col gap-3 rounded-xl bg-white p-10">
      <h1 className="font-meri text-[20px] font-bold">Overall rating</h1>
      <Star />
      <div>
        <label className="mb-1 block text-[10px] font-bold" htmlFor="title">
          Review title
          <input
            className="w-full rounded-sm border-2 border-[#EEF2FF] px-2 py-1 text-[9px] font-normal focus:outline-none"
            type="text"
            placeholder="Example: Easy to use"
          />
        </label>
      </div>
      <div>
        <p className="text-[10px] font-bold">
          Would you recommend this product to a friend?
        </p>
        <div className="mt-3 flex gap-3">
          <label
            className="items-cente1r flex text-[10px] font-medium accent-black"
            htmlFor="yes"
          >
            <input
              className="mr-1 scale-125"
              type="radio"
              name="recommend"
              id="yes"
            />
            Yes
          </label>
          <label
            className="flex items-center  text-[10px] font-medium accent-black"
            htmlFor="no"
          >
            <input
              className="mr-1 scale-125"
              type="radio"
              name="recommend"
              id="no"
            />
            No
          </label>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-[10px] font-bold">
          Product review
          <textarea
            className="w-full overflow-visible rounded border-2 border-[#EEF2FF] px-2 py-1 text-[11px] text-[9px] font-normal focus:outline-none"
            placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
          />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-2">
        <div>
          <label className="mb-1 block text-[10px] font-bold" htmlFor="">
            Nick name
            <input
              className="w-full rounded border-2 border-[#EEF2FF] px-2 py-2 text-[11px] text-[9px] font-normal focus:outline-none"
              type="text"
              placeholder="Example: bob27"
            />
          </label>
        </div>
        <div>
          <label className="mb-1 block text-[10px] font-bold" htmlFor="">
            Email address (will not be published)
            <input
              className="w-full rounded border-2 border-[#EEF2FF] px-2 py-2 text-[11px] text-[9px] font-normal focus:outline-none"
              type="text"
              placeholder="Example: your@email.com"
            />
          </label>
        </div>
      </div>
      <div className="flex gap-3">
        <label
          className="items-cente1r flex text-[10px] font-medium"
          htmlFor="accept"
        >
          <input
            className="mr-1 scale-125 accent-black"
            type="radio"
            name="accept"
            id="accept"
          />
          I accept the
          <a className="underline" href="">
            terms and conditions
          </a>
        </label>
      </div>
      <p className="text-[10px] font-bold">
        You will be able to receive emails in connection with this review (eg if
        others comment on your review). All emails contain the option to
        unsubscribe. We can use the text and star rating from your review in
        other marketing.
      </p>
      <button className="rounded bg-[#121633] p-2 text-[12px] font-medium text-white">
        Submit product preview
      </button>
    </div>
  );
}

export default Review;
