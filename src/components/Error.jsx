import { useQuoter } from '../hooks/useQuoter';


export function Error () {

    const { error } = useQuoter();


    return (
        <div className="border border-[#fa5246] rounded-lg p-3 mt-5 text-center">
            <p className='text-[#fa5246]'> { error } </p>
        </div>

    );
}