import React from "react";

const Card = ({ cardDetails, videoUrls, cardFor }) => {
  console.log(videoUrls, "videourls");
  return (
    <div
      className={`mb-6 lg:mb-0 ${
        cardFor === "video" ? "w-[300px]" : "w-[340px]"
      } m-2`}
    >
      <div className="relative block bg-white  rounded-l-xl rounded-t-xl shadow-lg">
        <div className="flex">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg  rounded-l-xl rounded-t-xl mx-6 -mt-5 w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            {cardFor === "video" ? (
              <iframe
                width="280"
                height="200"
                src={videoUrls.url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              <>
                <img src={cardDetails.imgUrl} className="w-full" alt="" />
                <a href="#!">
                  <div className="bg-[rgba(251, 251, 251, 0.15)] absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                </a>
              </>
            )}
          </div>
        </div>
        <div className="p-6">
          {cardFor === "video" ? (
            <h5 className="text-xl font-bold mb-2">{videoUrls.name} - <span className="text-lg text-gray-700">{videoUrls.subject}</span></h5>
          ) : (
            <div className="py-2 h-64 mb-2 sm:mb-0">
              <h5 className="text-lg font-bold mb-2">- {cardDetails.name}</h5>

              <p className="text-sm text-gray-600">{cardDetails.text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
