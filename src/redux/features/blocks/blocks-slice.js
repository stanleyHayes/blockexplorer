import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Alchemy, Network} from "alchemy-sdk";

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};


const getBlock = createAsyncThunk(
    'blocks/getBlock',
    async ({blockHashOrBlockTag}, thunkAPI) => {
        try {
            const alchemy = new Alchemy(settings);
            return await alchemy.core.getBlockWithTransactions(blockHashOrBlockTag);
        }catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    });


const blocksSlice = createSlice({
    name: 'blocks',
    initialState: {
        block: null,
        error: null,
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlock.pending, (state) => {
            state.error = null;
            state.loading = true
        }).addCase(getBlock.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.block = action.payload
        }).addCase(getBlock.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.block = null
        })
    }
});

const {reducer} = blocksSlice;

export const selectBlocks = state => state.block;
export const BLOCK_ACTION_CREATOR = {getBlock};
export default reducer;