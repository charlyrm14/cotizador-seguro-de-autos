import { useQuoter } from '../hooks/useQuoter';
import { TYPEINSURANCE, PLANS } from '../constants';
import { useCallback, useMemo, useRef } from 'react';

export function Result () {

    const { result, data }      = useQuoter();
    const { brand, year, plan } = data;

    // Evita hacer re-render con useCallback o useMemo solo cuando 'result' haya cambiado su valor
    const [ brandName ] = useMemo ( () =>
        TYPEINSURANCE.filter( typeBrand => typeBrand.id === Number( brand ) ), 
        [ result ] 
    );

    const [ planName ]  = useMemo ( () =>
        PLANS.filter( typePlan => typePlan.id === Number( plan ) ), 
        [ result ] 
    );

    const yearRef = useRef( year );


    if ( result === 0 ) return null;

    return (
        <div className='mt-5 py-2'>
            <h2 className='text-[#fffffe] font-bold text-4xl'> Resumen </h2>

            <p className='text-[#fffffe] mt-5 py-1 border border-transparent border-b-[#7f5af0]'>
                Marca: <span className='block text-lg'> { brandName.name } </span>
            </p>

            <p className='text-[#fffffe] mt-5 py-1 border border-transparent border-b-[#7f5af0]'>
                Plan: <span className='block text-lg'> { planName.name } </span> 
            </p>

            <p className='text-[#fffffe] mt-5 py-1 border border-transparent border-b-[#7f5af0]'>
                Año del Auto: <span className='block text-lg'> { yearRef.current } </span> 
            </p>

            <p className='text-[#fffffe] mt-5 py-3 border border-transparent border-b-[#2cb67d]'>
                Total Cotización: <span className='text-[#2cb67d] block text-2xl'> { result } </span> 
            </p>

        </div>
    )
}