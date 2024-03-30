function UserProfile() {
  return (
    <div className="w-[32rem] flex gap-x-4 rounded-3xl bg-white p-12">
      <img
        className="w-32 self-start rounded-full border-[11px] border-[#e6effa]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7caztf3maIfIQkeLMM7IkFRCWdyeKshQGHQKNevUYBw&s"
        alt=""
      />
      <div className="text-md mt-5 flex-col space-y-7 font-medium text-[#1c2b62]">
        <div>
          <h1 className="mb-2 font-popi text-2xl font-bold">Hatake Kakashi</h1>
          <h2>3D Artist</h2>
        </div>

        <div className="space-y-4">
          <p className="flex items-center">
            <svg
              class="mr-1 inline-block h-6 w-6 text-[#1C2B62]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
              />
            </svg>
            4.7 Rating
          </p>

          <p className="flex items-center">
            <svg
              class="mr-1 h-6 w-6 text-[#1C2B62]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17 13c0 2.038-2.239 4.5-5 4.5S7 15.038 7 13c0 1.444 10 1.444 10 0Z"
              />
              <path
                fill="currentColor"
                d="m9 6.811.618 1.253 1.382.2-1 .975.236 1.377L9 9.966l-1.236.65L8 9.239l-1-.975 1.382-.2L9 6.811Zm6 0 .618 1.253 1.382.2-1 .975.236 1.377L15 9.966l-1.236.65L14 9.239l-1-.975 1.382-.2L15 6.811Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 6.811.618 1.253 1.382.2-1 .975.236 1.377L9 9.966l-1.236.65L8 9.239l-1-.975 1.382-.2L9 6.811Zm6 0 .618 1.253 1.382.2-1 .975.236 1.377L15 9.966l-1.236.65L14 9.239l-1-.975 1.382-.2L15 6.811Z"
              />
            </svg>
            4,447 Reviews
          </p>
          <p className="flex items-center">
            <svg
              class="mr-1 h-6 w-6 text-[#1C2B62]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
            </svg>
            478 Student
          </p>
        </div>

        <p>
          David Grant has been making video games for a living for more than 14
          years as a Designer, Producer, Creative Director, and Executive
          Producer, creating games for console, mobile, PC and Facebook.{" "}
        </p>

        <button className="rounded border-[2px] border-[#C4CADF] px-2 py-1.5">
          Show more
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
