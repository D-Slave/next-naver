import Grid from "@mui/material/Grid";

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <Grid container>
          {children}
         </Grid>

    );
  }