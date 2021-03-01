var submit=document.getElementById("calculate");
var brideEducation=document.getElementById("Bride's education");
var brideNetWorth=document.getElementById("Bride's family net worth");
var skill=document.getElementsByName("skill");
var pr=document.querySelector('b');
var age=document.getElementsByClassName("age");
var reputation=document.getElementsByName("reputation");
var love_letter=document.getElementById("Letter");

const calculate = ()=>
{
     let name=document.getElementById("Bride's name").value;
     let price=document.getElementById("Starting bid").value;
     if(name.length==0  &&  price.length!=0) {alert("You have to input Bride's name");}
     else if(name.length!=0 && price.length==0) {alert("You have to input your starting bid!");}
     else if(name.length==0 && price.length==0) {alert("You have to input Bride's name and your starting bid!");}
     else  
     {
        price=Number(price);
        if(brideEducation[brideEducation.selectedIndex].text=="Undergraduate degree") {price=price*(brideEducation[0].value*1);}
        else if(brideEducation[brideEducation.selectedIndex].text=="College degree") {price=price*(brideEducation[1].value*1);}
        else if(brideEducation[brideEducation.selectedIndex].text=="High school degree") {price=price*(brideEducation[2].value*1);}
        else {price=price*(brideEducation[3].value*1);}
        
        if(brideNetWorth[brideNetWorth.selectedIndex].text=="More than 100,000$") {price=price*(brideNetWorth[0].value*1)}
        else if(brideNetWorth[brideNetWorth.selectedIndex].text=="Between 50,000$ and 100,000$") {price=price*(brideNetWorth[1].value*1);}
        else {price=price*(brideNetWorth[2].value*1);}
        
        let sk=[100,200,150,100];
        for(let i=0;i<skill.length;i++)
        {
            if(skill[i].checked==false) {sk[i]=0;}
        }
        let result=sk.reduce((sum,current)=>sum+current,0);
        price=price+result;

        let coeff=[];
        for(i=0;i<age.length;i++)
        {
            coeff[i]=Number(age[i].value);
        }
        
        for(let i=0;i<age.length;i++)
        {
            if(age[i].checked==false) {coeff[i]=0;}
        }
        coeff.forEach((item) => {if (item>0){price=price*item;} });

        let coeff1=[0.85,0.9,-200];
        for(i=0;i<3;i++)
         {
          if(i!=2 && reputation[i].checked==true){price=price*coeff1[i];}
          else if(i==2 && reputation[i].checked==true) {price=price+coeff1[i];}
         }
         
        price=Math.round(price);
     }
      let person =
      {
          bride_name: name,
          bride_price: price,
          letter_to_bride: love_letter.value 
      };
      

     pr.innerText=`Your price for ${person.bride_name} is ${person.bride_price}.\n Your love letter is ${person.letter_to_bride} `;
     

    
};


submit.addEventListener('click',calculate);
