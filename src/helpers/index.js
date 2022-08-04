export function getYearsDifference ( year ) {
    return new Date().getFullYear() - year;
}

export function calcBrand ( brand ) {
    let increment;
    
    switch ( brand ) {
        case '1':
            increment = 1.30;  
            break;
        case '2':
            increment = 1.15;
            break;
        case '3':
            increment = 1.3;
            break;
    
        default:
            break;
    }

    return increment;
}  

export function calcPlan ( plan ) {
    return ( plan === '1' ? 1.2 : 1.5 );
}

export function formatCurrency ( quantity ) {
    return quantity.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}