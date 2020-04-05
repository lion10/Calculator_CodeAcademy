
        
                // insert an operation and number to sceren
                function insertElement(num){
                    document.form.textView.value = document.form.textView.value + num ;
                }


                // to compute the opration 
                function equalOpreation(){
                  let exp = document.form.textView.value;
                  
                    if(eval(exp) !== null && eval(exp) !== undefined && eval(exp) !== -Infinity && eval(exp) !== Infinity ){
                        document.form.textView.value =eval(exp);
                    }else {
                        document.form.textView.value ="Error -_-";
                    }
                }

                // clean the screen after we get result
                function cleanTheScreen()
                {
                    document.form.textView.value = "";   
                }

                // to remove last oprator => get back one step
                function backOneStep(){
                    let exp = document.form.textView.value;
                    document.form.textView.value =exp.substring(0,exp.length -1);
                }


/* -------------------------------------------------------------------------- */
/*                        convert coins sectioon                              */
/* -------------------------------------------------------------------------- */

                // convert Dollars To Shekels
                function convertDollarsToShekels(){
                    let result = document.form.textView.value / 3.60 ;
                    document.form.textView.value = result ; 
                }

                // convert Shekels To Dollars
                function convertShekelsToDollars(){
                    let result = document.form.textView.value * 3.60 ;
                    document.form.textView.value = result ; 
                }

                // convert Euros To Shekels
                function convertEurosToShekels(){
                    let result = document.form.textView.value * 3.94 ;
                    document.form.textView.value = result ; 
                }

                // convert Shekels ToEuros
                function convertShekelsToEuros(){
                    let result = document.form.textView.value / 3.94 ;
                    document.form.textView.value = result ; 
                }

               
/* -------------------------------------------------------------------------- */
/*           dive in detial for insertElement function and divide into getNumber() func and getOperand() func  */
/* -------------------------------------------------------------------------- */

            // for numbers 
                function getNumber(num){
                    let inputValue  = document.getElementById('inputToViewTheResult');
                    switch(num){
                        case 0 :
                            inputValue.value +='0';
                            break;
                        case 1 :
                                inputValue.value +='1';
                                break;
                        case 2 :
                                inputValue.value +='2';
                                break;  
                        case 3 :
                                inputValue.value +='3';
                                break;

                        case 4 :
                                inputValue.value +='4';
                                break;
                        case 5 :
                                inputValue.value +='5';
                                break;
                        case 6 :
                                inputValue.value +='6';
                                break;
                        case 7 :
                                inputValue.value +='7';
                                break;

                        case 8 :
                                inputValue.value +='8';
                                break;
                        case 9 :
                                inputValue.value +='9';
                                break;                                                
                            
                    }
                }

                // for operand 
                function getOperand(operand){
                    let inputValue  = document.getElementById('inputToViewTheResult');
                    switch(operand){
                        case '+' :
                            inputValue.value +='+';
                            break;
                        case '-' :
                                inputValue.value +='-';
                                break;
                        case 'X' :
                                inputValue.value +='*';
                                break;  
                        case '/' :
                                inputValue.value +='/';
                                break;
                
                        case '^' :
                                inputValue.value +='**';
                                break;
                        case '%' :
                                inputValue.value +='%';
                                break;
                        case '1/x' :
                                inputValue.value +='1/';
                                break;
                                
                    }
                }
                        
                