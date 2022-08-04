import { useState, createContext } from "react";
import { getYearsDifference, calcBrand, calcPlan, formatCurrency } from '../helpers';

const QuoterContext     = createContext();

const QuoterProvider    = ( { children } ) => {

    const [ data, setData ] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    const [ error, setError ]       = useState('');
    const [ result, setResult ]     = useState(0);
    const [ loading, setLoading ]   = useState( false );

    // actualiza state
    const handleChangeData = e => {
        
        setData({
            ...data,
            [ e.target.name ] : e.target.value
        });
    }

    const quoterInsurance = () => {
        // Base
        let result = 2000;

        // Obtener diferencia de años
        const difference    = getYearsDifference( parseInt( data.year ) );

        // Restar 3%  por cada año
        result -= ( ( difference * 3 ) * result ) / 100;


        // Americano 15%
        // Europeo 30%
        // Asiatico 5%
        result *= calcBrand( data.brand );

        // Básico 20%
        // Completo 50%
        result *= calcPlan( data.plan );

        // Formatear Total del resultado a tipo Moneda
        result = formatCurrency( result );

        setLoading( true );
        

        // Spinner
        setTimeout( () => {
            setResult( result );
            setLoading( false );
        }, 1500 );
    }

    return (
        <QuoterContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                quoterInsurance,
                result,
                loading
            }}>
            { children }
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}

export default QuoterContext;