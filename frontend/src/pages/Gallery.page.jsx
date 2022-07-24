import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";

import GalleryCard from "../components/gallery/GalleryCard";
import RemovePhotoModal from "../components/modals/remove-photo/RemovePhotoModal";
import UpdatePhotoModal from "../components/modals/update-photo/UpdatePhotoModal";
import { useGalleryContext } from "../contexts";
import { UserService } from "../services";

const InfiniteScrollGallery = styled(InfiniteScroll)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  gap: 40px;
  justify-content: space-between;
  margin-top: 40px;
`;

export default function GalleryPage() {
  const { modals, search } = useGalleryContext();

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["photos", search],
    ({ pageParam = 1 }) => UserService.gallery(pageParam, 10, search),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      getPreviousPageParam: (firstPage) => firstPage.prevPage,
    }
  );

  const photos =
    data?.pages.reduce(
      (allPhotos, page) => allPhotos.concat(page.results),
      []
    ) ?? [];

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (!photos.length) return <h1>No hay fotos</h1>;

  return (
    <div>
      {modals.remove && <RemovePhotoModal />}
      {modals.update && <UpdatePhotoModal />}

      <InfiniteScrollGallery
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h1>loading page</h1>}
      >
        {photos.map((photo, pos) => (
          <GalleryCard
            key={`${photo._id}-${photo.label}`}
            photo={photo}
            pos={pos}
          />
        ))}
      </InfiniteScrollGallery>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
