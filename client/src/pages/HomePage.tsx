import { useGetBooksQuery } from "../services/books_api";
import BookCard from "../components/BookCard";
import { Box, Container, Typography } from "@mui/material";

const HomePage = () => {
  const { data } = useGetBooksQuery("");

  return (
    <Container fixed sx={{ marginTop: "50px" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
            md: data?.length == 0 ? "center" : "start"
          },
          alignItems: data?.length == 0 ? "center" : "start",
          height: data?.length == 0 ? "calc(100vh - 200px)" : "100%"
        }}
        gap={5}
        mb={5}
      >
        {data?.map(item => (
          <BookCard key={item.id} item={item} />
        ))}
        {data && data?.length <= 0 && (
          <Typography>You haven't added any books yet</Typography>
        )}
      </Box>
    </Container>
  );
};

export default HomePage;
