import Rating from "@mui/material/Rating";

export let Ratings = ({ value }) => {
  return (
    <>
      <Rating
        name="size-large"
        defaultValue={value}
        size="large"
         readOnly
        sx={{
          "& .MuiRating-icon": {
            fontSize: "28px",
          },
        }}
        style={{ direction: "ltr" }}
      />
    </>
  );
};
