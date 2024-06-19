import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setDialog } from "../store/slice/book_slice";
import BookDialog from "./BookDialog";
const Navbar = () => {
  const { add } = useAppSelector(store => store.book);

  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setDialog({ open: true, add: true }));
  };
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center ",
          justifyContent: "space-between"
        }}
      >
        <Typography variant="h6">Books App</Typography>
        <Button
          onClick={handleClick}
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: "transparent",
            color: "white",
            border: "1px solid #ffffff",
            "&:hover": {
              border: "1px solid blue",
              bgcolor: "white",
              color: "blue"
            }
          }}
        >
          Add Book
        </Button>
      </Toolbar>
      {add && <BookDialog />}
    </AppBar>
  );
};

export default Navbar;
