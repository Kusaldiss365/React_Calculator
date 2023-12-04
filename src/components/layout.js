import React ,{useState} from 'react';
import './layout.css'
import 'bootstrap/dist/css/bootstrap.css'
import Output from './output';

const Layout = (props) => {
    let [input, setInput] = useState('0');
    let [result,setResult] = useState('')

    const handleClick = (event) => {
        const value = event.target.value;
        if(value === '='){
            if(input !== ''){
                let res = '';
                try{
                    res = eval(input)
                }catch(err){
                    setResult('Math Error')}
                if(res === undefined){
                    setResult('Math error')
                }else{
                    setResult(input + '=');
                    setInput(res);
                }                   
                }
            }else if( value === 'C'){
                setResult('')
                setInput('0')
            }
            else if(value === 'DEL'){
                let str = input;
                str = str.substr(0, str.length-1)
                setInput(str);
            }else if(input === '0'){
                setInput(value);
            }else{
                setInput((input += value))
            }
    }


    return(
        <>
        <div className='frame'>
            <div className='calculator'>
                <Output user={input} answer={result}/>
                <br></br>
                <div className='keys'>
                    <div className="row g-0">
                    <div className='col'><input type="button" value={"C"} className='btn btn-danger btn-lg button-clear' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"DEL"} className='btn btn-danger button-clear' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"%"} className='btn btn-primary button-op' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"/"} className='btn btn-primary button-op' onClick={handleClick}/></div>
                    </div>
                    <div className="row g-0">
                    <div className='col'><input type="button" value={"7"} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"8"} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"9"} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"*"} className='btn btn-primary button-op' onClick={handleClick}/></div>
                    </div>
                    <div className="row g-0">
                    <div className='col'><input type="button" value={"4"} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"5"} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"6"} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"-"} className='btn btn-primary button-op' onClick={handleClick}/></div>
                    </div>
                    <div className="row g-0">
                    <div className='col'><input type="button" value={"1"} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"2"} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"3"} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col'><input type="button" value={"+"} className='btn btn-primary button-op' onClick={handleClick}/></div>
                    </div>
                    <div className="row g-0">
                    <div className='col'><input type="button" id="zero" value={"0"} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col'></div>
                    <div className='col'><input type="button" value={"."} className='btn btn-light button-num' onClick={handleClick}/></div>
                    <div className='col-3'><input type="button" value={"="} className='btn btn-primary button-op' onClick={handleClick}/></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    };
export default Layout;