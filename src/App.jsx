import { QuoterProvider } from './context/QuoterProvider';
import AppInsurance from './components/AppInsurance';


export default function App () {

    return (
        <QuoterProvider>
            <AppInsurance/>
        </QuoterProvider>
    )
}