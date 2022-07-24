import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { changeModal, useGalleryContext } from "../../../contexts";
import { ModalLayout } from "../../../layouts";
import { PhotoService } from "../../../services";
import {
  ButtonSubmit,
  ButtonCancel,
  ModalContainer,
  FormControl,
  Label,
  Input,
  ModalHeader,
} from "./UpdatePhotoModal.style";

export default function UpdatePhotoModal() {
  const { selectedPhoto: photo, dispatch } = useGalleryContext();
  const queryClient = useQueryClient();

  const methods = useForm({
    defaultValues: {
      label: photo.label,
      image: photo.image,
    },
  });

  const onSubmit = async (values) => {
    try {
      await toast.promise(PhotoService.updatePhoto(photo._id, values), {
        error: "There was an error updating the photo :(",
        pending: "Updating photo...",
        success: "The photo has been updated successfully",
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
        <ModalHeader>Change photo</ModalHeader>

        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormControl>
            <Label htmlFor="label">Label</Label>
            <Input
              placeholder="Suspendisse elit massa"
              id="label"
              type="text"
              {...methods.register("label")}
            />
          </FormControl>

          <FormControl style={{ marginTop: 20 }}>
            <Label htmlFor="image">Photo URL</Label>
            <Input
              placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
              id="image"
              type="url"
              {...methods.register("image")}
            />
          </FormControl>

          <div style={{ marginTop: 24, textAlign: "end" }}>
            <ButtonCancel type="button" onClick={() => dispatch(changeModal())}>
              Cancel
            </ButtonCancel>
            <ButtonSubmit type="submit">Submit</ButtonSubmit>
          </div>
        </form>
      </ModalContainer>
    </ModalLayout>
  );
}
