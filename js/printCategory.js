function printCategory(id) {
  fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((res) => res.json())
    .then((data) => printVideos(data.data));
}

function printVideos(data) {
  infoContainer.innerHTML = "";
  videosContainer.innerHTML = ``;
  if (data.length != 0) {
    data.forEach((video) => {
      const videoDiv = document.createElement("a");
      videoDiv.href = "#";
      videoDiv.classList.add("video", "w-full");
      videoDiv.innerHTML = `
        <div class="thumbnail-container w-full rounded-lg overflow-hidden relative mb-5">
            <img
                src="${video.thumbnail}"
                alt=""
                class="w-full aspect-video"
            />
            ${
              video.others?.posted_date
                ? `<span class="badge absolute bottom-2 right-2 bg-black text-neutral-300 text-xs p-1 rounded-md">
                ${parseInt(video.others.posted_date / 3600)}hrs ${parseInt(
                    (video.others.posted_date % 3600) / 60
                  )}mins ago
            </span>`
                : ""
            }
        </div>
        <div class="flex flex-row">
            <div>
                <img
                    src="${video.authors[0].profile_picture}"
                    alt=""
                    class="w-16 rounded-full mt-1 aspect-square object-fill"
                />
            </div>
            <div class="pl-3">
                <p class="text-lg font-semibold text-neutral-950 text-left mb-2">
                    Building a Winning UX Strategy Using the Kano Model
                </p>
                <p class="text-neutral-500 mb-2 text-base text-left">
                    ${video.authors[0].profile_name}
                    ${
                      video.authors[0].verified == true
                        ? `<img
                        src="./media/images/blue_tick.png"
                        alt=""
                        class="inline"
                    />`
                        : ""
                    }
                </p>
                <p class="text-neutral-500 mb-2 text-base text-left">
                    ${video.others.views} views
                </p>
            </div>
        </div>
        `;
      videosContainer.appendChild(videoDiv);
    });
  } else {
    videosContainer.innerHTML = ``;
    infoContainer.innerHTML = `
        <img src="./media/images/Icon.png" alt="" class="w-28 mb-4 mx-auto" />
        <p class="text-2xl text-black font-semibold text-center">
        Oops!! Sorry, there is no content here
        </p>
    `;
  }
}
