import React from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";

import { useGalleryContext, changeModal } from "../../../contexts";
import { ModalLayout } from "../../../layouts";
import { PhotoService } from "../../../services";
import {
  ButtonCancel,
  ButtonSubmit,
  ModalContainer,
  ModalHeader,
} from "./RemovePhotoModal.style";

export default function RemovePhotoModal() {
  const { selectedPhoto: photo, dispatch } = useGalleryContext();
  const queryClient = useQueryClient();

  const onDelete = async () => {
    try {
      await toast.promise(PhotoService.removePhoto(photo._id), {
        error: "There was an error remove the photo :(",
        pending: "Deleting photo...",
        success: "The photo has been removed successfully",
      });
      queryClient.invalidateQueries("photos");
      dispatch(changeModal());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalLayout>
      <ModalContainer>
        <ModalHeader>Are you sure?</ModalHeader>

        <div style={{ marginTop: 24, textAlign: "end" }}>
          <ButtonCancel onClick={() => dispatch(changeModal())}>
            Cancel
          </ButtonCancel>
          <ButtonSubmit onClick={onDelete}>Remove</ButtonSubmit>
        </div>
      </ModalContainer>
    </ModalLayout>
  );
}
