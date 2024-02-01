import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";

const Summary = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showData, setShowData] = useState(null);
  const details = useLoaderData();
  console.log(details);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    if (Array.isArray(details) && id && details.length > 0) {
      const summary = details.find((detail) => detail.show.id === parseInt(id));
      setShowData(summary);
    }
  }, [id, details]);
  const onSubmit = (data) => {
    const bookData = {
      userName: data.name,
      movieName: data.showData?.show?.name,
    };
    localStorage.setItem("bookedTicket", JSON.stringify(bookData));
    alert("booked");
  };
  return (
    <div className="my-10 flex flex-col lg:flex-row items-center justify-center">
      {showData && (
        <>
          <img
            className="rounded-lg w-[400px] mr-5 mb-10 lg:mb-10"
            src={showData.show.image?.original}
            alt=""
          />
          <div className="max-w-[450px] lg:max-w-2xl overflow-hidden bg-gray-800 rounded-lg shadow-md">
            <div className="p-6">
              <div>
                <span className="text-xl font-medium text-blue-600 uppercase dark:text-blue-400">
                  {showData.show?.name}
                </span>
                {/* <a
                  href="#"
                  className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                  tabindex="0"
                  role="link"
                >
                  I Built A Successful Blog In One Year
                </a> */}
                <p
                  dangerouslySetInnerHTML={{
                    __html: showData?.show?.summary,
                  }}
                  className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                ></p>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="mx-2 font-semibold text-purple-400 "
                      tabindex="0"
                      role="link"
                    >
                      {showData.show?.genres.join(" , ")}
                    </a>
                  </div>
                  <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    {showData.show?.premiered}
                  </span>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    className="btn rounded-none ml-5"
                  >
                    <span className="">Book</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-7 flex flex-col justify-center items-center"
          >
            <div className="grid grid-cols-2" id="form">
              <div className="flex flex-col gap-3">
                <span className="text-xl font-medium text-blue-600 uppercase dark:text-blue-400">
                  <p className="text-gray-400">Movie:</p>
                  <span>{showData?.show?.name}</span>
                </span>
                <input
                  {...register("name")}
                  className="text-sm rounded-lg border-[1px] border-gray-400 duration-300  focus:shadow-sm  focus:border-[#9e6bd7]  py-3 px-3 w-full placeholder:text-sm"
                  type="text"
                  placeholder="your name"
                  required=""
                />
                <button
                  type="submit"
                  className="btn rounded-none bg-blue-400 w-fit py-2 px-3 border-2"
                >
                  {" "}
                  Book ticket
                </button>
              </div>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Summary;
