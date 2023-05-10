import Layout from "../../components/shared/layout";
import {
    Alert, AlertTitle,
    Button, Card, CardContent,
    CircularProgress,
    Container,
    Divider,
    Grid,
    LinearProgress,
    Skeleton, Stack,
    TextField, Typography
} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BLOCK_ACTION_CREATOR, selectBlocks} from "../../redux/features/blocks/blocks-slice";
import Block from "../../components/shared/block";

const HomePage = () => {

    const [blockHash, setBlockHash] = useState("");
    const {loading, error, block} = useSelector(selectBlocks);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(BLOCK_ACTION_CREATOR.getBlock({blockHashOrBlockTag: blockHash}));
    }

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Container>
                <Stack spacing={4}>
                    <Grid container={true} alignItems="center" justifyContent="center" spacing={2}>
                        <Grid item={true} xs={12} md={8}>
                            <TextField
                                fullWidth={true}
                                name="blockHash"
                                required={true}
                                value={blockHash}
                                onChange={event => setBlockHash(event.target.value)}
                                size="medium"
                                placeholder="Enter block hash / No."
                                label="Block Hash / No."
                            />
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            {loading ? <CircularProgress size={50} color="secondary"/> : (
                                <Button
                                    onClick={handleClick}
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                    fullWidth={true}
                                    disabled={loading}
                                    sx={{
                                        color: "text.primary",
                                        backgroundImage: "linear-gradient(to right, #56359f, #d98f39)",
                                        py: 1.5
                                    }}>Unleash</Button>
                            )}
                        </Grid>
                    </Grid>
                    <Divider variant="fullWidth"/>
                    {loading ? <Skeleton variant="rectangular" sx={{height: {xs: 200}}} width="100%"/> :
                        block ? <Block block={block}/> : (
                            <Card
                                variant="outlined"
                                sx={{
                                    borderWidth: 2,
                                    borderStyle: "dashed",
                                    borderColor: "secondary.main",
                                    height: {xs: 200}
                                }}>
                                <Stack
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{height: "100%"}}>
                                    <CardContent>
                                        <Typography
                                            align="center"
                                            variant="h3"
                                            sx={{color: "text.secondary", fontSize: {xs: 20, md: 28, lg: 36}}}>
                                            Block Details will appear here
                                        </Typography>
                                    </CardContent>
                                </Stack>
                            </Card>
                        )
                    }
                    {error && (
                        <Alert variant="standard" severity="error">
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>
                    )}

                </Stack>
            </Container>
        </Layout>
    )
}

export default HomePage;