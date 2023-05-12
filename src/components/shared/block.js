import {
    Box,
    Card,
    CardContent,
    Divider,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
    Paper
} from "@mui/material";
import {VisibilityOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Text from "./text";
import moment from "moment";

const Block = ({block}) => {
    return (
        <Stack spacing={2}>
            <Card variant="elevation" elevation={1}>
                <CardContent>
                    <Stack spacing={2} divider={<Divider variant="middle"/>}>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>Number</Typography>
                            <Typography variant="body1" sx={{color: "text.primary",}}>{block?.number}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>Hash</Typography>
                            <Typography variant="body1" sx={{color: "text.primary",}}>{block?.hash}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>Miner</Typography>
                            <Typography variant="body1" sx={{color: "text.primary",}}>{block?.miner}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>Gas Limit</Typography>
                            <Typography variant="body1"
                                        sx={{color: "text.primary",}}>{parseInt(block?.gasLimit)}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>Gas Used</Typography>
                            <Typography variant="body1"
                                        sx={{color: "text.primary",}}>{parseInt(block?.gasUsed)}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>Nonce</Typography>
                            <Typography variant="body1"
                                        sx={{color: "text.primary",}}>{parseInt(block?.nonce)}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>Timestamp</Typography>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary",}}>
                                {/*{moment(block?.timestamp).fromNow()}*/}
                            </Typography>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>

            <Box>
                <Typography variant="h4" sx={{color: "text.secondary"}}>Transactions
                    ({block?.transactions?.length})</Typography>
                <Divider sx={{my: 2}} variant="middle"/>
                <TableContainer component={Paper} elevation={1}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Hash</TableCell>
                                <TableCell>To</TableCell>
                                <TableCell>From</TableCell>
                                <TableCell>Value</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {block?.transactions.map((transaction, index) => {
                                return (
                                    <TableRow key={transaction.hash} hover={true}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>
                                            <Text text={transaction.hash}/></TableCell>
                                        <TableCell><Text text={transaction.to}/></TableCell>
                                        <TableCell><Text text={transaction.from}/></TableCell>
                                        <TableCell>{parseInt(transaction.value)}</TableCell>
                                        <TableCell>
                                            <Tooltip title={`View transaction receipt`}>
                                                <Link
                                                    style={{textDecoration: "none"}}
                                                    to={`/transactions/${transaction.hash}`}>

                                                    <VisibilityOutlined
                                                        sx={{
                                                            color: "secondary.main",
                                                            fontSize: 32,
                                                            padding: 1,
                                                            backgroundColor: "light.secondary",
                                                            borderRadius: "25%",
                                                            borderWidth: 1,
                                                            borderColor: "light.secondary"
                                                        }}
                                                    />
                                                </Link>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </Stack>
    )
}

export default Block;