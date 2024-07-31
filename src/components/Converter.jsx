import React from 'react'
import { useState, useEffect } from 'react'

import Budget from './Budget'
import Buying from './Buying'

const Converter = () => {
    const [rates, setRates] = useState({});

    const [fromPrice, setFromPrice] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('RUB');

    const [toPrice, setToPrice] = useState(0);
    const [toCurrency, setToCurrency] = useState('USD');

    const changeFromPrice = (value) => {
        setFromPrice(value)
    }

    const changeToPrice = (value) => {
        setToPrice(value)
    }

    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((res) => res.json())
            .then((json) => {
                const newRates = {};
                newRates.RUB = 87.5448;

                for (const currency in json.Valute) {
                    const charCode = json.Valute[currency].CharCode;
                    const value = json.Valute[currency].Value;
                    newRates[charCode] = value;
                }
                setRates(newRates);
            })
            .catch((err) => {
                console.warn(err);
                console.log('Не удалось получить запрос')
            })
    }, []);


    return (
        <div className='converter'>
            <Budget
                fromPrice={fromPrice}
                currency={fromCurrency}
                setFromCurrency={setFromCurrency}
                changeFromPrice={changeFromPrice}
            />

            <Buying
                toPrice={toPrice}
                currency={toCurrency}
                setToCurrency={setToCurrency}
                changeToPrice={changeToPrice}
            />
        </div>
    )
}

export default Converter