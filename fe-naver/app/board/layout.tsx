import SideBar from "@/app/components/sideBar";

export default function Layout({
                                   children, // will be a page or nested layout
                               }: {
    children: React.ReactNode
}) {
    return (
        <SideBar children={children}/>
    );
}