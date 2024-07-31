import React from 'react'

const Budget = ({ currency, setFromCurrency, fromPrice, changeFromPrice }) => {

    const defaultCurrencies = ["RUB", "USD", "EUR"];

    return (
        <div>
            <div className="budget">
                <p className='budget__text'>У меня есть</p>

                <div className="currency">
                    <ul className='currency-list'>
                        {
                            defaultCurrencies.map((cur) => (
                                <li key={cur}
                                    onClick={() => setFromCurrency(cur)}
                                    className={currency === cur ?
                                        'currency-list__item active' : 'currency-list__item'
                                    }>
                                    {cur}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="budget-input">
                    <label>
                        <input
                            value={fromPrice}
                            onChange={(e) => changeFromPrice(e.target.value)}
                            className='budget-input__field'
                            type="number" />
                    </label>
                    <p className='budget-input__rate'>
                        <span className='budget-input__rate-from'>
                            1 <span>RUR</span>
                        </span>
                        <span> = </span>
                        <span className='budget-input__rate-until'>
                            1 <span>RUR</span>
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )



}

export default Budget