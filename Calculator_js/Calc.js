var TypeOfButton =
{
    Digit: 1,
    Operator: 2,
    Equality: 3
};  

class Memory
{
    Var1 = "";
    Var2 = "";
    Operation = "";
    Press_Btn = "";   
    static replaceForNumber(text)
    {
        return text.replace(",", ".");

    }
    static replaceForText(number)
    {
        var fixed_number = number.toFixed(12);
        var newString = fixed_number;
        if (fixed_number.includes("."))
        {
            var i;
            for (i = fixed_number.length; i > 0; i--)
            {
                if (fixed_number.substring(i-1, i) === ".")
                {
                    i--;
                    break;
                }

                if (fixed_number.substring(i-1, i) != "0")
                    break;   
            }
            newString = fixed_number.substring(0, i);
        }
       
        return newString.replace(".", ",");

    }
    static FillMemory(Result, sign)
    {
        if (!Memory.Operation || Memory.Press_Btn === TypeOfButton.Equality)
        {
            Memory.Var1 = Result.textContent;
            if (sign === "%")
            {
                Result.textContent = Memory.CalculatePercent();
                    return;
            }
                Memory.Var2 = "";
            }
        else
        {
            Memory.Var2 = Result.textContent; // Memory.Press_Btn == TypeOfButton.Digit
            if (Memory.Press_Btn != TypeOfButton.Digit) // Memory.Press_Btn == TypeOfButton.Operator
                if (sign != "%") 
                    Memory.Var2 = "";             
            if (sign === "%")
            {
                Result.textContent = Memory.CalculatePercent();
                if (Memory.Press_Btn === TypeOfButton.Operator) 
                    Memory.Var2 = Result.textContent;
                return;
            }                            
            if (Memory.Var1 && Memory.Var2)
            {
                Result.textContent = Memory.Execute();
                Memory.Var1 = Result.textContent;
            }                        
        }
        Memory.Operation = sign;
        Memory.Press_Btn = TypeOfButton.Operator;
    }
            
    static Clear()
    {   
        Memory.Var1 = ""; //or this.Var1
        Memory.Var2 = ""; //or this.Var2
        Memory.Operation = "";
    }
    static Execute()
    {
        if (Memory.Operation === "+")
            return this.replaceForText(Memory.AddNumbers());
        else if (Memory.Operation === "-")
            return this.replaceForText(Memory.DeductionNumbers());
        else if (Memory.Operation === "/")
            return this.replaceForText(Memory.DevideNumbers());
        else if (Memory.Operation === "x")
            return this.replaceForText(Memory.MultiplicateNumbers());   
        return "";
    }
    static CalculatePercent()
    {
        if (!Memory.Var2)
            return (parseFloat(this.replaceForNumber(Memory.Var1))/100).toString();
        return (parseFloat(this.replaceForNumber(Memory.Var1))* parseFloat(this.replaceForNumber(Memory.Var2))/100);
    }

    static MultiplicateNumbers()
    {
        return (parseFloat(this.replaceForNumber(this.Var1)) * parseFloat(this.replaceForNumber(this.Var2)));
    }
    static DeductionNumbers()
    {
        return (parseFloat(this.replaceForNumber(this.Var1)) - parseFloat(this.replaceForNumber(this.Var2)));
    }
    static DevideNumbers()
    {
        return parseFloat(this.replaceForNumber(this.Var2)) === 0 ? "0" : (parseFloat(this.replaceForNumber(this.Var1)) / parseFloat(this.replaceForNumber(this.Var2)));
    }
    static AddNumbers()
    {
        return (parseFloat(this.replaceForNumber(Memory.Var1)) + parseFloat(this.replaceForNumber(Memory.Var2)));
    }
}

function OnLoad() {    
    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) 
    {
        buttons[i].onclick = DoSomething;
    }
}

function DoSomething(event)
{

    var current_result;
    if (Memory.Press_Btn === TypeOfButton.Operator || Memory.Press_Btn === TypeOfButton.Equality)
        current_result = "0";
    else
        current_result = Result.textContent;
    var current_button = event.target.textContent; //or innerText
    switch (current_button)
    {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":                
            if (Memory.Press_Btn === TypeOfButton.Equality)
                Memory.Clear();                                               
            if (current_result === "0")                   
                Result.textContent = current_button;  //or innerText                 
            else if (current_result === "-0")
                Result.textContent = "-" + current_button;
            else      
                Result.textContent += current_button;       
            Memory.Press_Btn = TypeOfButton.Digit;
            break;
        case ",":
            if (Memory.Press_Btn === TypeOfButton.Equality)
            {
                Memory.Clear();
                Result.textContent = "0,";
            }                        
            if (Memory.Press_Btn === TypeOfButton.Operator)                   
                Result.textContent = "0,";                  
            else if (!Result.textContent.includes(","))                                       
                Result.textContent += current_button;                                     
            Memory.Press_Btn = TypeOfButton.Digit;
            break;
        case "+":
            Memory.FillMemory(Result, "+");                    
            break;
        case "-":
            Memory.FillMemory(Result, "-");
            break;
        case "x":
            Memory.FillMemory(Result, "x");
            break;
        case "/":
            Memory.FillMemory(Result, "/");                    
        break;
        case "=":
            if (Memory.Var1 && Memory.Operation)
            {
                if (Memory.Press_Btn === TypeOfButton.Digit || !Memory.Var2)
                    Memory.Var2 = Result.textContent;

                Result.textContent = Memory.Execute();
            }                    
            Memory.Var1 = Result.textContent;
            Memory.Press_Btn = TypeOfButton.Equality;
            break;
        case "+/-":
            if (Result.textContent.includes("-"))
                Result.textContent = Result.textContent.substring(1);
            else
                Result.textContent = "-" + Result.textContent;
            if (Memory.Press_Btn === TypeOfButton.Operator)                   
                Result.textContent = "-0";            
            if (Memory.Press_Btn === TypeOfButton.Equality)
                Memory.Clear();
            Memory.Press_Btn = TypeOfButton.Digit;
            break;
        case "%":
            if (Memory.Press_Btn === TypeOfButton.Equality)
                Memory.Var2 = "";
            Memory.FillMemory(Result, "%");
            break;
        case "AC":                    
            Result.textContent = "0";
            Memory.Clear();
            break;
        default:
            break;
    }
}
