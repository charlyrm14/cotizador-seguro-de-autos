import Form from "./Form"
import { useQuoter } from '../hooks/useQuoter';
import { Spinner } from "./Spinner";
import { Result } from "./Result";


export default function AppInsurance () {

    const { result, loading } = useQuoter();


    return (
        <>
            <header className="my-10">
                <h1 className="text-[#fffffe] text-center text-4xl font-black">
                    Cotizador de seguros de autos
                </h1>
            </header>

            <main className="bg-[#242629] md:w-2/3 lg:w-2/4 mx-auto rounded-lg p-10">
                <Form/>


                {
                    loading ? <Spinner/> : <Result/>
                }

            </main>
        </>
    )
}