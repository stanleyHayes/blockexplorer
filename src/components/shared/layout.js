import {Box} from "@mui/material";

const Layout = ({children}) => {
    return (
        <Box sx={{
            minHeight: "100vh",
            maxWidth: "100vw",
            overflowX: "hidden",
            backgroundColor: "background.default",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: {xs: 8, md: 4, lg: 0},
            "&:--webkit-scrollbar": {
                display: "none"
            }
        }}>
            {children}
        </Box>
    )
}

export default Layout;