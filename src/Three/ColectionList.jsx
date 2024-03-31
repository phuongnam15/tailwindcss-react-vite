const buttons = ["Profile", "Newyork", "Relaxing", "Person", "Fashion"];
function ColectionList() {
  return (
    <div className="bg-[#eff0f1] p-10">
      <h1 className="mb-3 font-serif text-22 font-bold">
        Poppular Collections
      </h1>
      <div className="flex flex-wrap gap-2">
        {buttons.map((button) => (
          <button className="rounded-md bg-[#fff] px-2 py-1 text-[12px] font-medium text-black hover:bg-black hover:text-white">
            {button}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-4">
          <div className="mb-2">
            <img
              className="aspect-video w-full rounded-2xl"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg"
              alt=""
            />
          </div>
          <div className="mb-3 grid grid-cols-3 gap-2">
            <img
              className="aspect-video w-full rounded-lg"
              src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
              alt=""
            />
            <img
              className="aspect-video w-full rounded-lg"
              src="https://st4.depositphotos.com/13193658/29103/i/450/depositphotos_291038364-stock-photo-smiling-beautiful-girl-white-shirt.jpg"
              alt=""
            />
            <img
              className="aspect-video w-full rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1Vt44Z3MiQodWa4LJDVV3-JReVlF9gW33A&usqp=CAU"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <p className="grow font-popi text-sm font-semibold">People</p>
            <p className="flex items-center text-[9px] font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-1 inline-block h-6 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span>4.500</span>
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-4">
          <div className="mb-2">
            <img
              className="aspect-video w-full rounded-2xl"
              src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?b=1&s=612x612&w=0&k=20&c=8xbZvMyptEaqMW46diKakhVgkPkAzBi5l7J1yveCZFk="
              alt=""
            />
          </div>
          <div className="mb-3 grid grid-cols-3 gap-2">
            <img
              className="aspect-video w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg"
              alt=""
            />
            <img
              className="aspect-video w-full rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwQwy0darw093qEwdK1NyQuWEy7kTMuTq5g&usqp=CAU"
              alt=""
            />
            <img
              className="aspect-video w-full rounded-lg"
              src="https://th-thumbnailer.cdn-si-edu.com/vSnitgUqCQCRSx7mkHZtHZHry4U=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <p className="grow font-popi text-sm font-semibold">Nature</p>
            <p className="flex items-center text-[9px] font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-1 inline-block h-6 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span>4.500</span>
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-4">
          <div className="mb-2">
            <img
              className="aspect-video w-full rounded-2xl"
              src="https://images.ctfassets.net/3s5io6mnxfqz/6bP1ZC2RgEK2Ue1EzrfjSA/d6f7039a3c46cde8591976484ac746ed/classical-architecture-guide.jpeg"
              alt=""
            />
          </div>
          <div className="mb-3 grid grid-cols-3 gap-2">
            <img
              className="aspect-video w-full rounded-lg"
              src="https://www.grollohomes.com.au/wp-content/uploads/2020/03/shutterstock_518975902.jpg"
              alt=""
            />
            <img
              className="aspect-video w-full rounded-lg"
              src="https://www.classicist.org/assets/images/events/https___cdn.evbuc.com_images_70613247_104388458733_1_original.jpeg"
              alt=""
            />
            <img
              className="aspect-video w-full rounded-lg"
              src="https://archinect.gumlet.io/uploads/4a/4af27619f68401c9ebf2a9f63062793a.jpeg?auto=compress%2Cformat"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <p className="grow font-popi text-sm font-semibold">History</p>
            <p className="flex items-center text-[9px] font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-1 inline-block h-6 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span>4.500</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColectionList;
