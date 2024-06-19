import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled
} from "@mui/material";
import { BookCardProp } from "../types";
import { useDeleteBookMutation } from "../services/books_api";
import BookDialog from "./BookDialog";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setDialog, setItem } from "../store/slice/book_slice";

const StyledTypography = styled(Typography)({
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical"
});

const BookCard = ({ item }: BookCardProp) => {
  const { update } = useAppSelector(store => store.book);
  const dispatch = useAppDispatch();

  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = () => {
    try {
      deleteBook(`${item.id}`).unwrap();
    } catch (error) {
      console.log("deleted failed");
    }
  };
  const handleUpdate = () => {
    dispatch(setDialog({ open: true, update: true }));
    dispatch(setItem({ item }));
  };
  return (
    <Card sx={{ maxWidth: 230, maxHeight: 300, width: 230 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={
          "https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        title="green iguana"
      />
      <CardContent sx={{ padding: "5px 10px" }}>
        <Typography gutterBottom variant="h5">
          {item.title}
        </Typography>
        <StyledTypography>{item.desc}</StyledTypography>
      </CardContent>
      <CardActions sx={{ margin: 0, justifyContent: "space-around" }}>
        <Button size="small" color="error" onClick={handleDelete}>
          Delete
        </Button>
        <Button size="small" color="primary" onClick={handleUpdate}>
          Update
        </Button>
      </CardActions>
      {update && <BookDialog />}
    </Card>
  );
};

export default BookCard;
