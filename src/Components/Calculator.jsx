import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const [result, setresult] = useState("");
    const [status, setstatus] = useState(false);
    const display = document.getElementById("display")

    const handleClick = (e) => {
        if (status) {
            console.log("true");
            setstatus(!status)
            setresult(e.target.name)
            display.innerHTML = e.target.name
        } else {
            setresult(result.concat(e.target.name))
            console.log(e.target.name);
            if (e.target.name === '+') {
                display.innerHTML = '+'
            } else {
                display.innerHTML = ''
                display.innerHTML += e.target.name
            }
        }
    }

    const clear = () => {
        setresult("")
        display.innerHTML = "0"
    }

    const output = () => {
        let num = eval(result)
        setresult(result + '=' + num.toString());
        console.log(typeof (num.toString()), num);
        display.innerHTML = ''
        display.innerHTML = num.toString()
        setstatus(!status);
        console.log(!status);
    }

    return (
        <div className="calculator">
            <div className="formulaScreen" >{result}</div>
            <div className="outputScreen" id='display'>0</div>
            <div className="btns">
                <div className="rows">
                    <button style={{ background: "rgb(172, 57, 57)", width: "160px" }} id="clear" onClick={clear}>AC</button>
                    <button name='/' onClick={handleClick} style={{ background: "rgb(102, 102, 102)" }}>/</button>
                    <button name='*' onClick={handleClick} style={{ background: "rgb(102, 102, 102)" }}>x</button>
                </div>
                <div className="rows">
                    <button name='7' onClick={handleClick}>7</button>
                    <button name='8' onClick={handleClick}>8</button>
                    <button name='9' onClick={handleClick}>9</button>
                    <button name='-' onClick={handleClick} style={{ background: "rgb(102, 102, 102)" }}>-</button>
                </div>
                <div className="rows">
                    <button name='4' onClick={handleClick}>4</button>
                    <button name='5' onClick={handleClick}>5</button>
                    <button name='6' onClick={handleClick}>6</button>
                    <button name='+' onClick={handleClick} style={{ background: "rgb(102, 102, 102)" }}>+</button>
                </div>
                <div className="rows_holder">
                    <div className="rows">
                        <div className="top">
                            <button name='1' onClick={handleClick}>1</button>
                            <button name='2' onClick={handleClick}>2</button>
                            <button name='3' onClick={handleClick}>3</button>
                        </div>
                        <div className="bottom">
                            <button name='0' onClick={handleClick} style={{ width: "160px" }}>0</button>
                            <button name='.' onClick={handleClick}>.</button>
                        </div>
                    </div>
                    <button name='=' onClick={output} style={{ background: "rgb(0, 68, 102)", height: "130px" }}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator