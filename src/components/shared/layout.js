import {Box} from "@mui/material";

const Layout = ({children}) => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                maxWidth: "100vw",
                overflowX: "hidden",
                backgroundColor: "background.default",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 4,
                "&:--webkit-scrollbar": {
                    display: "none"
                }
            }}>
            {children}
        </Box>
    )
}

export default Layout;