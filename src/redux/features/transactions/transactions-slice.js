import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Alchemy, Network} from "alchemy-sdk";

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};


const getTransactionReceipt = createAsyncThunk(
    'transactions/getTransactionReceipt',
    async ({tx}, thunkAPI) => {
    try {
        const alchemy = new Alchemy(settings);
        return await alchemy.core.getTransactionReceipt(tx);
    }catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});


const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        transaction: null,
        error: null,
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTransactionReceipt.pending, (state) => {
            state.error = null;
            state.loading = true
        }).addCase(getTransactionReceipt.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.transaction = action.payload
        }).addCase(getTransactionReceipt.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.transaction = null
        })
    }
});

const {reducer} = transactionsSlice;

export const selectTransactions = state => state.transaction;
export const TRANSACTION_ACTION_CREATOR = {getTransactionReceipt};
export default reducer;