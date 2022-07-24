import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { ModalLayout } from "../../../layouts";
import { PhotoService } from "../../../services";
import {
  ModalButton,
  ModalButtonCancel,
  ModalButtonSubmit,
  NewPhotoModalContainer,
  NewPhotoModalFormControl,
  NewPhotoModalHeader,
  NewPhotoModalInput,
  NewPhotoModalLabel,
} from "./NewPhotoModal.style";

export default function NewPhotoModal() {
  const [open, setIsOpen] = useState(false);

  const methods = useForm();

  const handleClick = () => setIsOpen((prev) => !prev);

  const onSubmit = async (values) => {
    try {
      toast.promise(PhotoService.addPhoto(values), {
        error: "There was an error adding the photo :(",
        pending: "Saving photo...",
        success: "The photo has been saved successfully",
      });
      methods.reset();
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ModalButton onClick={handleClick}>Add a photo</ModalButton>

      {open && (
        <ModalLayout>
          <NewPhotoModalContainer>
            <NewPhotoModalHeader>Add new photo</NewPhotoModalHeader>

            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <NewPhotoModalFormControl>
                <NewPhotoModalLabel htmlFor="label">Label</NewPhotoModalLabel>
                <NewPhotoModalInput
                  placeholder="Suspendisse elit massa"
                  id="label"
                  type="text"
                  {...methods.register("label")}
                />
              </NewPhotoModalFormControl>

              <NewPhotoModalFormControl style={{ marginTop: 20 }}>
                <NewPhotoModalLabel htmlFor="image">
                  Photo URL
                </NewPhotoModalLabel>
                <NewPhotoModalInput
                  placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
                  id="image"
                  type="url"
                  {...methods.register("image")}
                />
              </NewPhotoModalFormControl>

              <div style={{ marginTop: 24, textAlign: "end" }}>
                <ModalButtonCancel type="reset" onClick={handleClick}>
                  Cancel
                </ModalButtonCancel>
                <ModalButtonSubmit type="submit">Submit</ModalButtonSubmit>
              </div>
            </form>
          </NewPhotoModalContainer>
        </ModalLayout>
      )}

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
