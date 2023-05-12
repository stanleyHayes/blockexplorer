import Layout from "../../components/shared/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Card,
    CardContent,
    Container,
    Divider, LinearProgress,
    Skeleton,
    Stack,
    Typography
} from "@mui/material";
import {useParams} from "react-router";
import moment from "moment/moment";
import {selectTransactions, TRANSACTION_ACTION_CREATOR} from "../../redux/features/transactions/transactions-slice";
import Block from "../../components/shared/transaction";
import {useDispatch, useSelector} from "react-redux";
import {red, green} from "@mui/material/colors";
import Text from "./../../components/shared/text";
import {useEffect} from "react";

const TransactionDetailPage = () => {

    const {transactionHash} = useParams();
    const {transaction, loading, error} = useSelector(selectTransactions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TRANSACTION_ACTION_CREATOR.getTransactionReceipt({transactionHash}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transactionHash]);

    return (
        <Layout>
            {loading && <LinearProgress color="secondary" variant="query"/>}
            <Container>
                <Typography variant="h4" sx={{color: "text.secondary"}}>Transaction Receipt</Typography>
                <Divider sx={{my: 2}} variant="middle"/>
                {loading ? <Skeleton variant="rectangular" sx={{height: {xs: 200}}} width="100%"/> :
                    (
                        <Card variant="elevation" elevation={1}>
                            <CardContent>
                                <Stack spacing={2} divider={<Divider variant="middle"/>}>
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                            Block Number
                                        </Typography>
                                        <Typography variant="body1" sx={{color: "text.primary"}}>
                                            {parseInt(transaction?.blockNumber)}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                            To
                                        </Typography>
                                        <Text text={transaction?.to} />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                            From
                                        </Typography>
                                        <Text text={transaction?.from} />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                            Transaction Index
                                        </Typography>
                                        <Typography variant="body1" sx={{color: "text.primary"}}>
                                            {transaction?.transactionIndex}
                                        </Typography>
                                    </Box>
                                    {transaction?.contractAddress && (
                                        <Box>
                                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                                Contract Address
                                            </Typography>
                                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                                {transaction?.contractAddress}
                                            </Typography>
                                        </Box>
                                    )}
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                            Gas Used
                                        </Typography>
                                        <Typography variant="body1" sx={{color: "text.primary"}}>
                                            {parseInt(transaction?.gasUsed)}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                            Hash
                                        </Typography>
                                        <Text text={transaction?.transactionHash} />

                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>Nonce</Typography>
                                        <Typography variant="body1" sx={{color: "text.primary"}}>
                                            {transaction?.nonce}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                            Timestamp
                                        </Typography>
                                        <Typography variant="body1" sx={{color: "text.primary",}}>
                                            {moment(transaction?.timestamp).fromNow()}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                            Status
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{color: transaction?.status === 1 ? green[600]: red[600]}}>
                                            {transaction?.status === 1 ? "Success": "Failure"}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                            Effective Gas Price
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{color: "text.primary"}}>
                                            {parseInt(transaction?.effectiveGasPrice)}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                            Effective Gas Price
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{color: "text.primary"}}>
                                            {parseInt(transaction?.effectiveGasPrice)}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    )
                }

                {error && (
                    <Alert variant="standard" severity="error">
                        <AlertTitle>{error}</AlertTitle>
                    </Alert>
                )}
            </Container>
        </Layout>
    )
}

export default TransactionDetailPage;