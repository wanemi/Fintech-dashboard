import React from "react";
import classes from "./RateItem.module.css";
import { FaEdit } from "react-icons/fa";

const currencies = ['USD', 'NGN', 'CNY', 'GHS', 'EUR', 'GBP', 'CAD', 'ZAR']

const RateItem = (props) => {

  const { rates, iso, edit, setEdit, edited, setEdited } = props;


  const changes = (e, currency) => {

    const value = e.target.value

    const from = [...edited.from];
    const to = [...edited.to];
    const rate = [...edited.rate];
                        
    for (let i = 0; i < from.length; i++) {

      if (from[i] === iso && to[i] === currency.isoCode) {

        from[i] = iso
        to[i] = currency.isoCode
        rate[i] = value

        if(!value.length) {
          from.splice(i, 1)
          to.splice(i, 1)
          rate.splice(i, 1)
        }

        setEdited({...edited, from, to, rate})

        return;
      }

    }

    from.push(iso)
    to.push(currency.isoCode)
    rate.push(value)

    setEdited({...edited, from, to, rate})
  }

  return (
    <tbody className={classes.container}>

      {
        currencies.map((item, index) => {

          let currency = rates[item]

          let rate =  `1 ${iso} = ${currency.rate} ${currency.isoCode}`

          if (currency.rate === 0) {
            rate =  `Conversion Not Available`
          }

          return (

            <tr >
              <td> {currency.country} </td>
              <td> {currency.currency} </td>
              <td> {currency.isoCode} </td>
              <td> {currency.symbol} </td>
              <td> {rate} </td>
              <td>
                
                { !edit[iso][index] &&
                  <FaEdit 
                    onClick={() => {
                      const newArr = {...edit}; 
                      newArr[iso][index] = true; 
                      setEdit(newArr)
                    }} 
                    className={classes.icon4} /> 
                }

                { edit[iso][index] && 
                  ( <div> 
                      1 {iso} = 
                      <input 
                        type="text"  
                        onChange={(e) => changes(e, currency)}/> 

                        {currency.isoCode} 

                      </div>
                  ) 
                }

              </td>

            </tr>
          )

        })

      }

    </tbody>
  );
};

export default RateItem;
