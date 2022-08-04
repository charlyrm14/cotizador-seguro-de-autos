export const TYPEINSURANCE = [
    {
        id: 1,
        name: 'Europeo'
    },
    {
        id: 2,
        name: 'Americano'
    },
    {
        id: 3,
        name: 'Asiatico'
    }
]

const MAXYEAR           = new Date().getFullYear();
export const YEARS      = Array.from( new Array( 20 ), ( value, index ) => MAXYEAR - index );

export const PLANS      = [
    {
        id: 1,
        name: "Básico"
    },
    {
        id: 2,
        name: "Completo"
    },
] 