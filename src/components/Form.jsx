import { Fragment } from 'react';
import { TYPEINSURANCE, YEARS, PLANS } from '../constants';
import { useQuoter } from '../hooks/useQuoter';
import { Error } from './Error';

export default function Form () {

    const { data, handleChangeData, error, setError, quoterInsurance } = useQuoter();

    const handleSubmit = e => {
        e.preventDefault();

        // Validación
        if ( Object.values( data ).includes('') ) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setError('');

        // Cotizar seguro
        quoterInsurance();
    }

    return (
       <>

            { error && <Error /> }

            <form onSubmit={ handleSubmit }>

                <div className="my-5">
                    <label className="block mb-4 font-bold text-[#fffffe] uppercase"> Tipo de Seguro </label>
                    <select name="brand"
                            className="w-full p-3 border border-[#7f5af0] bg-[#242629] rounded-lg text-[#fffffe]"
                            onChange={ e => handleChangeData( e ) }
                            value={ data.brand }>
                            
                            <option value=""> Selecciona </option>

                            {
                                TYPEINSURANCE.map( insurance => (
                                    <option key={ insurance.id } value={ insurance.id }> { insurance.name } </option>
                                ))
                            }

                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-4 font-bold text-[#fffffe] uppercase"> Año </label>
                    <select name="year"
                            className="w-full p-3 border border-[#7f5af0] bg-[#242629] rounded-lg text-[#fffffe]"
                            onChange={ e => handleChangeData( e ) }
                            value={ data.year }>
                            
                            <option value=""> Selecciona </option>

                            {
                                YEARS.map( year => (
                                    <option key={ year } value={ year }> { year } </option>
                                ))
                            }

                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-4 font-bold text-[#fffffe] uppercase"> Elige un Plan </label>
                    
                    <div className='flex gap-3 text-[#fffffe] items-center'>
                            {
                                PLANS.map( plan => (
                                    <Fragment key={ plan.id }>
                                        <div className='border border-[#7f5af0] px-3 py-2 rounded-lg'>
                                            <label className='pr-3'> 
                                                { plan.name } 
                                            </label>
                                            <input type='radio'
                                                    name='plan'
                                                    value={ plan.id }
                                                    className='accent-[#7f5af0]'
                                                    onChange={ e => handleChangeData( e ) }/>
                                        </div>
                                    </Fragment>
                                ))
                            }
                    </div>
                </div>

                <button type='submit' className='w-full bg-[#7f5af0] text-[#fffffe] p-3 uppercase font-bold rounded-lg mt-5'>
                    Cotizar
                </button>

            </form>
       </>
    )
}