import {configureStore} from "@reduxjs/toolkit";

import blockReducer from "./../features/blocks/blocks-slice";
import transactionReducer from "./../features/transactions/transactions-slice";

const store  = configureStore({
    reducer: {
        block: blockReducer,
        transaction: transactionReducer
    }
});

export default store;