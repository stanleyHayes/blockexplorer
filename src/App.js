import {Route, Routes} from "react-router";
import {lazy, Suspense} from "react";
import Splash from "./components/shared/splash";

const HomePage = lazy(() => import("./pages/home/home-page"));
const TransactionDetailPage = lazy(() => import("./pages/transactions/transaction-detail-page"));

function App() {
    return (
        <Routes>
            <Route element={<Suspense fallback={<Splash/>}><HomePage/> </Suspense>} path="/"/>
            <Route
                element={<Suspense fallback={<Splash/>}><TransactionDetailPage/> </Suspense>}
                path="/transactions/:transactionHash"
            />
        </Routes>
    )
}

export default App;
