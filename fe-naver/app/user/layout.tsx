import BasicTabs from "../components/tabs"
import Grid from "@mui/material/Grid";
import SideBar from "@/app/components/sideBar";
import MainBody from "@/app/components/mainBody";

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <Grid container>
            <SideBar />
            <MainBody  children={children}/>
        </Grid>
    );
  }