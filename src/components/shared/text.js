import {Stack, Tooltip, Typography} from "@mui/material";
import {ContentCopyOutlined} from "@mui/icons-material";
import {UTILS} from "../../utils/utils";

const Text = ({text}) => {

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
    }

    return (
        <Stack sx={{cursor: "pointer"}} direction="row" spacing={2} alignItems="center">
            <Tooltip title={`${text}`}>
                <Typography variant="body2">
                    {UTILS.display(text)}
                </Typography>
            </Tooltip>
            <Tooltip title="Copy info">
                <ContentCopyOutlined sx={{fontSize: 20}} onClick={handleCopy}/>
            </Tooltip>
        </Stack>
    )
}
export default Text;