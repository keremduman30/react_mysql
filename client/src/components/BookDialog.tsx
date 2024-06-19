import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  styled
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Book } from "../types";
import {
  useAddBooksMutation,
  useUpdateBooksMutation
} from "../services/books_api";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setDialog, setItem } from "../store/slice/book_slice";

const StyledErrorText = styled(Typography)({
  margin: 0,
  padding: "0px 0",
  color: "#C70039",
  fontSize: "12px"
});
const BookDialog = () => {
  const [updateBooks] = useUpdateBooksMutation();
  const [addBooks] = useAddBooksMutation();
  const { open, update, add, item } = useAppSelector(store => store.book);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<Book>({
    defaultValues: item
  });
  useEffect(() => {
    reset(item);
  }, [item, reset]);

  const handleClose = () => {
    reset(item);
    dispatch(setDialog({ open: false }));
    dispatch(setItem({ item: { title: "", desc: "", price: 0 } }));
  };

  const onSubmitBook: SubmitHandler<Book> = data => {
    try {
      if (update) {
        updateBooks(data).unwrap();
      }
      if (add) {
        addBooks({ ...data, price: 0 }).unwrap();
      }
      handleClose();
    } catch (error) {
      console.log("update failed");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      component={"form"}
      onSubmit={handleSubmit(onSubmitBook)}
    >
      <DialogTitle>{update ? "Update Book" : "Add Book"}</DialogTitle>
      <DialogContent>
        <TextField
          {...register("title", { required: "title is required" })}
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
        />
        {errors.title && (
          <StyledErrorText>{errors.title.message}</StyledErrorText>
        )}
        <TextField
          {...register("desc", { required: "desciption is required" })}
          autoFocus
          margin="dense"
          label="desciption"
          type=""
          fullWidth
          variant="standard"
          multiline
        />
        {errors.desc && (
          <StyledErrorText>{errors.desc.message}</StyledErrorText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" disabled={isSubmitting}>
          {update ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookDialog;
