import { useEffect, useState } from 'react';

const useAmount = ( keyName, item ) => {
    const [ amount, setAmount ] = useState('');
    useEffect(() => {
        const keyNameAmount = item[keyName].toString().split('').reverse();
        const result = [];
        keyNameAmount.forEach((num, i) => {
            if (num > 0 && i === 8) result.push(num+'억'); // 억 단위
            else if (num > 0 && i === 7) result.push(num+'000'); // 천만 단위
            else if (num > 0 && i === 6) result.push(num+'00'); // 백만 단위
            else if (num > 0 && i === 5) result.push(num+'0'); // 십만 단위
            else if (num > 0 && i === 4) result.push(num); // 만원 단위
        });
        setAmount(result.reverse().join(''));
    }, [amount, item]);
    return amount;
}

export default useAmount;

