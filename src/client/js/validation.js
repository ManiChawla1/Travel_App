// this funnction validates whether destination or startdate or enddate is blank.

export function inputValidation(destValue, startDatetValue , endDateValue){

    if(destValue == ''){
    alert("Where you want to Go ?..Please add destination");
    return false;
    }
    else
    if(startDatetValue == ''){
        alert("Please enter  trip start Date");
        }
    else
    if(endDateValue ==''){
        alert("Please enter Trip end date ");
        }
        else{
            return true;
        }
    }