import React from 'react'

const Buying = ({ toPrice, currency, setToCurrency, changeToPrice }) => {

    const defaultCurrency = ["RUB", "USD", "EUR"];

    return (
        <div className="buying">
            <p className='buying__text'>Хочу приобрести</p>

            <div className="currency">
                <ul className='currency-list'>
                    {
                        defaultCurrency.map(cur =>
                            <li key={cur}
                                onClick={() => setToCurrency(cur, console.log(cur))}
                                className={currency === cur ?
                                    "currency-list__item active"
                                    : "currency-list__item"}>
                                {cur}
                            </li>
                        )
                    }
                </ul>
            </div>
            {/* currency end*/}

            <div className="buying-input">
                <label>
                    <input
                        value={toPrice}
                        onChange={(event) => changeToPrice(event.target.value)}
                        className='buying-input__field'
                        type="number"
                    />

                    <p className='buying-input__rate'>
                        <span className='buying-input__rate-from'>
                            1 <span>RUR</span>
                        </span>
                        <span> = </span>
                        <span className='buying-input__rate-until'>
                            1 <span>RUR</span>
                        </span>
                    </p>
                </label>

            </div>
        </div>
    )
}

export default Buying