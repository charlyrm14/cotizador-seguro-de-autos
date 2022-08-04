import { useContext } from "react";
import QuoterContext from '../context/QuoterProvider';

export function useQuoter () {

    return useContext ( QuoterContext );

}