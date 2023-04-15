import {configureStore} from "@reduxjs/toolkit";

import globalSlice from "./slices/globalSlice";

const Store = configureStore({
    reducer:{
        global: globalSlice
    }
});

export default Store;