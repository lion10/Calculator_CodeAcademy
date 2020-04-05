
                // insert an operation and number to sceren
                function insertElement(num){
                    document.form.textView.value = document.form.textView.value + num ;
                }

                // for = operation
                function equalOpreation(){
                  var exp = document.form.textView.value;
                    if(exp){
                        document.form.textView.value =eval(exp);
                    }
                }

                // clean the screen after we get result
                function cleanTheScreen()
                {
                    document.form.textView.value = "";   
                }

                // to remove last oprator => get back one step
                function backOneStep(){
                    var exp = document.form.textView.value;
                    document.form.textView.value =exp.substring(0,exp.length -1);
                }



                // swap between postive and negative sign
                function swapBtwPosAndNeg(){
                    var result = document.form.textView.value;
                    document.form.textView.value +='-';
                    if(result.charAt(result.length - 1) === '-'){
                        backOneStep();
                    }
                    
                }


                // convert Dollars To Shekels
                function convertDollarsToShekels(){
                    var result = document.form.textView.value / 3.60 ;
                    document.form.textView.value = result ; 
                }

                // convert Shekels To Dollars
                function convertShekelsToDollars(){
                    var result = document.form.textView.value * 3.60 ;
                    document.form.textView.value = result ; 
                }

                // convert Euros To Shekels
                function convertEurosToShekels(){
                    var result = document.form.textView.value * 3.94 ;
                    document.form.textView.value = result ; 
                }

                // convert Shekels ToEuros
                function convertShekelsToEuros(){
                    var result = document.form.textView.value / 3.94 ;
                    document.form.textView.value = result ; 
                }

               

