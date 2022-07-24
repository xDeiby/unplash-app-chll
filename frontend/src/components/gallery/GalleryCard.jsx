// import noImage from "../../static/no-image.jpg";

import {
  changeModal,
  changeSelectedPhoto,
  useGalleryContext,
} from "../../contexts";

import {
  CardButtonRemove,
  CardButtonUpdate,
  CardHoverStyle,
  CardImage,
  CardLabel,
} from "./GalleryCard.style";

export default function GalleryCard({ photo, pos }) {
  const { dispatch } = useGalleryContext();

  const handleClick = (modal) => {
    dispatch(changeSelectedPhoto(photo));
    dispatch(changeModal(modal));
  };

  return (
    <>
      <CardImage src={photo.image} isPar={pos % 2 !== 0}>
        <CardHoverStyle>
          <div style={{ alignSelf: "flex-end" }}>
            <CardButtonUpdate onClick={() => handleClick({ update: true })}>
              update
            </CardButtonUpdate>
            <CardButtonRemove onClick={() => handleClick({ remove: true })}>
              remove
            </CardButtonRemove>
          </div>

          <CardLabel>{photo.label}</CardLabel>
        </CardHoverStyle>
      </CardImage>
    </>
  );
}
