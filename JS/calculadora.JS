_viewScreenOperations = document.querySelector(".calc_view .opts");
_bntAllOperations = document.querySelectorAll("[class *= oper]");
_viewScreenNumber = document.querySelector(".calc_view .numbers");
_bntAllNumber = document.querySelectorAll("[class *= bnt]");
_bntDeletLast = document.querySelector(".delet");
_bntResetAll = document.querySelector(".reset");
_bntEqual = document.querySelector(".equal");
/*_______________________________________________________________________________________________________________________________________________________________________________________________*/

let TestNumber = true;
let old_number;
let newNumber;
let old_opt;
let total;

/*_______________________________________________________________________________________________________________________________________________________________________________________________*/

class Calculator {
  constructor(viewScreenNumber, viewScreenOperation) {
    this.viewScreenNumber = viewScreenNumber;
    this.viewScreenOperation = viewScreenOperation;
  }

  point_number = (num) => {
    this.number = num.value;
    if(this.number === '.' && this.viewScreenNumber.innerText.includes('.')){
      return;
    }
    this.att_view_numbers();
  }

  att_view_numbers = () => {
    if (TestNumber) {
      this.pointCoin = this.number;
      TestNumber = false;
    } else {
      this.pointCoin += this.number;
    }
  }

  att_view_opers = (oper) => {
    if (!TestNumber) {
      old_number = this.pointCoin;

      if(old_number === '.'){
        old_number = 0;
      } 
    
      old_opt = oper.value;
      TestNumber = true;
    } else {
      old_opt = oper.value;
     }
  }

  calculus_math = () => {
    if(this.viewScreenOperation.innerText === ''){
      return;
    } else {
      newNumber = this.pointCoin;

      if(newNumber === '.'){
        newNumber = 0;
      }

      this.new_Number = Number(newNumber);
      this.old_Number = Number(old_number);
  
      switch (old_opt) {
        case "+":
          total = this.new_Number + this.old_Number;
          this.screen_display_opers();
          break;
  
        case "-":
          total = this.new_Number - this.old_Number;
          this.screen_display_opers();
          break;
  
        case "/":
          total = this.new_Number / this.old_Number;
          this.screen_display_opers();
          break;
  
        case "*":
          total = this.new_Number * this.old_Number;
          this.screen_display_opers();
          break;
      }
  
      this.pointCoin = total;
      old_opt = undefined;
    }
  }

  screen_display_opers = () => {
    this.viewScreenOperation.innerText = `${this.new_Number} ${old_opt} ${this.old_Number} =`;
  }

  screen_display_updt = () => {
    if (this.pointCoin != undefined) {
      this.viewScreenNumber.innerText = this.pointCoin;
    }

    if(this.pointCoin.length > 13){
      this.clear_last_digit();
    }


    if (old_opt === undefined || old_number === undefined) {
      return;
    } else {
      if(this.viewScreenNumber.innerText === '' || old_number === ''){
        return;
      } else {
        this.viewScreenOperation.innerText = `${old_number} ${old_opt}`
      }
    }
  }

  clear_all = () => {
    total = '';
    old_opt = '';
    old_number = '';
    newNumber = '';
    this.pointCoin = '';
    this.viewScreenNumber.innerText ='';
    this.viewScreenOperation.innerText = '';
  }

  clear_last_digit = () => {
    this.pointCoin = this.pointCoin.toString().slice(0, -1);
  }
}

const calc = new Calculator(_viewScreenNumber, _viewScreenOperations);

/*_______________________________________________________________________________________________________________________________________________________________________________________________*/

_bntAllOperations.forEach((opers) => opers.addEventListener("click", () => {
  calc.att_view_opers(opers);
  calc.screen_display_updt();
})
);

_bntAllNumber.forEach((nums) => nums.addEventListener("click", () => {
    calc.point_number(nums);
    calc.screen_display_updt();
  })
);

_bntDeletLast.addEventListener('click', ()=>{
  calc.clear_last_digit();
  calc.screen_display_updt();
})

_bntResetAll.addEventListener('click', ()=>{
  calc.clear_all();
  calc.screen_display_updt();
})

_bntEqual.addEventListener("click", () => {
  calc.calculus_math();
  calc.screen_display_updt();
});

/*_______________________________________________________________________________________________________________________________________________________________________________________________*/

let _buttonTheme = document.querySelector('.button');

_buttonTheme.addEventListener('click', ()=>{
  _buttonTheme.classList.toggle('animation')
});


let _allThemes = document.querySelectorAll('.all_themes span');

_allThemes.forEach((theme) => theme.addEventListener('click', ()=>{
    themes_effect(theme);
}));

/*_______________________________________________________________________________________________________________________________________________________________________________________________*/
/*_______________________________________________________________________________________________________________________________________________________________________________________________*/
/*_______________________________________________________________________________________________________________________________________________________________________________________________*/

let h1Calc = document.querySelector('.title');
let _bodyAll = document.querySelector('.style');
let _bodyThemes = document.querySelector('.themes');
let _menuThemes = document.querySelector('.button');
let _calcBody = document.querySelector('.calc_quite');
let _calcDisplay = document.querySelector('.calc_view');
let _buttonsRI = document.querySelectorAll('.ri input');
let _buttonsZDP = document.querySelectorAll('.ZDP input');
let _buttonsOTT = document.querySelectorAll('.OTT input');
let _buttonsFFS = document.querySelectorAll('.FFS input');
let _buttonsSEN = document.querySelectorAll('.SEN input');
let _calcOpers = document.querySelector('.calc_view .opts');
let _buttonsDMMX = document.querySelectorAll('.DMMX input');
let _calcNumber = document.querySelector('.calc_view .numbers');

/*_______________________________________________________________________________________________________________________________________________________________________________________________*/

let moon = document.querySelector('.lua');
let sunny = document.querySelector('.sol');
let cloudy = document.querySelector('.nuvem');
let moonTheme = document.querySelector('.moon');
let sunnyTheme = document.querySelector('.sunny');
let cloudyTheme = document.querySelector('.cloudy');


checkbox_check = (bnt_check) => {
  if(bnt_check.checked != true){
    bnt_check.checked = true;
    console.log('test')
  } else {
    return;
  }
  return bnt_check.checked;
}


moon_theme = () => { 

  if(checkbox_check(moon) == true){

    h1Calc.style.color = '#fff544';
    moonTheme.style.color = '#fff544';
    sunnyTheme.style.color = 'white';
    cloudyTheme.style.color = 'white';
    _bodyThemes.style.backgroundColor = '#2a0b48'
    _menuThemes.style.backgroundColor = '#8632ae';

    /*______________________________________________*/

    _bodyAll.style.backgroundColor = '#17062a';
    _calcBody.style.backgroundColor = '#2a0b4b';
    _calcDisplay.style.backgroundColor = '#2a0b4b';
    _calcNumber.style.color = '#fff544';
    _calcOpers.style.color = '#fff544';
    
    /*______________________________________________*/
    /*______________________SEN_____________________*/
    /*______________________________________________*/

    _buttonsSEN[0].style.color = '#fff544'
    _buttonsSEN[0].style.backgroundColor = '#412262';
    _buttonsSEN[0].style.boxShadow = 'inset 0px -3px #78188f';

    _buttonsSEN[1].style.color = '#fff544'
    _buttonsSEN[1].style.backgroundColor = '#412262';
    _buttonsSEN[1].style.boxShadow = 'inset 0px -3px #78188f';

    _buttonsSEN[2].style.color = '#fff544'
    _buttonsSEN[2].style.backgroundColor = '#412262';
    _buttonsSEN[2].style.boxShadow = 'inset 0px -3px #78188f';
    
    /*______________________________________________*/
    /*______________________FFS_____________________*/
    /*______________________________________________*/

    _buttonsFFS[0].style.color = '#fff544'
    _buttonsFFS[0].style.backgroundColor = '#412262';
    _buttonsFFS[0].style.boxShadow = 'inset 0px -3px #78188f';

    _buttonsFFS[1].style.color = '#fff544'
    _buttonsFFS[1].style.backgroundColor = '#412262';
    _buttonsFFS[1].style.boxShadow = 'inset 0px -3px #78188f';

    _buttonsFFS[2].style.color = '#fff544'
    _buttonsFFS[2].style.backgroundColor = '#412262';
    _buttonsFFS[2].style.boxShadow = 'inset 0px -3px #78188f';

    /*______________________________________________*/
    /*______________________OTT_____________________*/
    /*______________________________________________*/

    _buttonsOTT[0].style.color = '#fff544'
    _buttonsOTT[0].style.backgroundColor = '#412262';
    _buttonsOTT[0].style.boxShadow = 'inset 0px -3px #78188f';

    _buttonsOTT[1].style.color = '#fff544'
    _buttonsOTT[1].style.backgroundColor = '#412262';
    _buttonsOTT[1].style.boxShadow = 'inset 0px -3px #78188f';

    _buttonsOTT[2].style.color = '#fff544'
    _buttonsOTT[2].style.backgroundColor = '#412262';
    _buttonsOTT[2].style.boxShadow = 'inset 0px -3px #78188f';

    /*______________________________________________*/
    /*______________________ZDP_____________________*/
    /*______________________________________________*/

    _buttonsZDP[0].style.color = '#fff544'
    _buttonsZDP[0].style.backgroundColor = '#412262';
    _buttonsZDP[0].style.boxShadow = 'inset 0px -3px #78188f';

    _buttonsZDP[1].style.color = '#fff544'
    _buttonsZDP[1].style.backgroundColor = '#412262';
    _buttonsZDP[1].style.boxShadow = 'inset 0px -3px #78188f';

    _buttonsZDP[2].style.color = '#fff544'
    _buttonsZDP[2].style.backgroundColor = '#412262';
    _buttonsZDP[2].style.boxShadow = 'inset 0px -3px #78188f';

    /*______________________________________________*/
    /*_____________________DMMX_____________________*/
    /*______________________________________________*/

    _buttonsDMMX[0].style.color = '#ffffff'
    _buttonsDMMX[0].style.backgroundColor = '#8632ae';
    _buttonsDMMX[0].style.boxShadow = 'inset 0px -3px #aa25c9';

    _buttonsDMMX[1].style.color = '#fff544'
    _buttonsDMMX[1].style.backgroundColor = '#412262';
    _buttonsDMMX[1].style.boxShadow = 'inset 0px -3px #78188f';

    _buttonsDMMX[2].style.color = '#fff544'
    _buttonsDMMX[2].style.backgroundColor = '#412262';
    _buttonsDMMX[2].style.boxShadow = 'inset 0px -3px #78188f';

    _buttonsDMMX[3].style.color = '#fff544'
    _buttonsDMMX[3].style.backgroundColor = '#412262';
    _buttonsDMMX[3].style.boxShadow = 'inset 0px -3px #78188f';

    /*______________________________________________*/
    /*______________________RI______________________*/
    /*______________________________________________*/

    _buttonsRI[0].style.color = '#ffffff'
    _buttonsRI[0].style.backgroundColor = '#8632ae';
    _buttonsRI[0].style.boxShadow = 'inset 0px -3px #aa25c9';

    _buttonsRI[1].style.color = '#ffffff'
    _buttonsRI[1].style.backgroundColor = '#60a7a3';
    _buttonsRI[1].style.boxShadow = 'inset 0px -3px #488582';
    
  } else {
    return;
  }
  
}

sunny_theme = () => {
  if(checkbox_check(sunny) == true){

    h1Calc.style.color = '#313125';
    moonTheme.style.color = '#3c3c34';
    sunnyTheme.style.color = '#c85401';
    cloudyTheme.style.color = '#3c3c34';
    _bodyThemes.style.backgroundColor = '#d3cdcd'
    _menuThemes.style.backgroundColor = '#4baeb5';

    /*______________________________________________*/

    _bodyAll.style.backgroundColor = '#e6e6e6';
    _calcBody.style.backgroundColor = '#d3cdcd  ';
    _calcDisplay.style.backgroundColor = '#d3cdcd';
    _calcNumber.style.color = '#313125';
    _calcOpers.style.color = '#3131257d';

    /*______________________________________________*/
    /*______________________SEN_____________________*/
    /*______________________________________________*/

    _buttonsSEN[0].style.color = '#3c3c34'
    _buttonsSEN[0].style.backgroundColor = '#e5e4e0';
    _buttonsSEN[0].style.boxShadow = 'inset 0px -3px #a79e8f';

    _buttonsSEN[1].style.color = '#3c3c34'
    _buttonsSEN[1].style.backgroundColor = '#e5e4e0';
    _buttonsSEN[1].style.boxShadow = 'inset 0px -3px #a79e8f';

    _buttonsSEN[2].style.color = '#3c3c34'
    _buttonsSEN[2].style.backgroundColor = '#e5e4e0';
    _buttonsSEN[2].style.boxShadow = 'inset 0px -3px #a79e8f';

    /*______________________________________________*/
    /*______________________FFS_____________________*/
    /*______________________________________________*/

    _buttonsFFS[0].style.color = '#3c3c34'
    _buttonsFFS[0].style.backgroundColor = '#e5e4e0';
    _buttonsFFS[0].style.boxShadow = 'inset 0px -3px #a79e8f';

    _buttonsFFS[1].style.color = '#3c3c34'
    _buttonsFFS[1].style.backgroundColor = '#e5e4e0';
    _buttonsFFS[1].style.boxShadow = 'inset 0px -3px #a79e8f';

    _buttonsFFS[2].style.color = '#3c3c34'
    _buttonsFFS[2].style.backgroundColor = '#e5e4e0';
    _buttonsFFS[2].style.boxShadow = 'inset 0px -3px #a79e8f';

    /*______________________________________________*/
    /*______________________OTT_____________________*/
    /*______________________________________________*/

    _buttonsOTT[0].style.color = '#3c3c34'
    _buttonsOTT[0].style.backgroundColor = '#e5e4e0';
    _buttonsOTT[0].style.boxShadow = 'inset 0px -3px #a79e8f';

    _buttonsOTT[1].style.color = '#3c3c34'
    _buttonsOTT[1].style.backgroundColor = '#e5e4e0';
    _buttonsOTT[1].style.boxShadow = 'inset 0px -3px #a79e8f';
    
    _buttonsOTT[2].style.color = '#3c3c34'
    _buttonsOTT[2].style.backgroundColor = '#e5e4e0';
    _buttonsOTT[2].style.boxShadow = 'inset 0px -3px #a79e8f';

    /*______________________________________________*/
    /*______________________ZDP_____________________*/
    /*______________________________________________*/

    _buttonsZDP[0].style.color = '#3c3c34'
    _buttonsZDP[0].style.backgroundColor = '#e5e4e0';
    _buttonsZDP[0].style.boxShadow = 'inset 0px -3px #a79e8f';

    _buttonsZDP[1].style.color = '#3c3c34'
    _buttonsZDP[1].style.backgroundColor = '#e5e4e0';
    _buttonsZDP[1].style.boxShadow = 'inset 0px -3px #a79e8f';

    _buttonsZDP[2].style.color = '#3c3c34'
    _buttonsZDP[2].style.backgroundColor = '#e5e4e0';
    _buttonsZDP[2].style.boxShadow = 'inset 0px -3px #a79e8f';

    /*______________________________________________*/
    /*_____________________DMMX_____________________*/
    /*______________________________________________*/

    _buttonsDMMX[0].style.color = '#ffffff'
    _buttonsDMMX[0].style.backgroundColor = '#4baeb5';
    _buttonsDMMX[0].style.boxShadow = 'inset 0px -3px #327a7f';

    _buttonsDMMX[1].style.color = '#3c3c34'
    _buttonsDMMX[1].style.backgroundColor = '#e5e4e0';
    _buttonsDMMX[1].style.boxShadow = 'inset 0px -3px #a79e8f';

    _buttonsDMMX[2].style.color = '#3c3c34'
    _buttonsDMMX[2].style.backgroundColor = '#e5e4e0';
    _buttonsDMMX[2].style.boxShadow = 'inset 0px -3px #a79e8f';

    _buttonsDMMX[3].style.color = '#3c3c34'
    _buttonsDMMX[3].style.backgroundColor = '#e5e4e0';
    _buttonsDMMX[3].style.boxShadow = 'inset 0px -3px #a79e8f';

    /*______________________________________________*/
    /*______________________RI______________________*/
    /*______________________________________________*/

    _buttonsRI[0].style.color = '#ffffff';
    _buttonsRI[0].style.backgroundColor = '#4baeb5';
    _buttonsRI[0].style.boxShadow = 'inset 0px -3px #327a7f';

    _buttonsRI[1].style.color = '#ffffff';
    _buttonsRI[1].style.backgroundColor = '#c85401';
    _buttonsRI[1].style.boxShadow = 'inset 0px -3px #863901';

  } else {
    return;
  }

}

cloudy_theme = () => {
  if(checkbox_check(cloudy) == true){
    
    h1Calc.style.color = 'white';
    moonTheme.style.color = '#455c8b';
    sunnyTheme.style.color = '#455c8b';
    cloudyTheme.style.color = '#b50f17';
    _bodyThemes.style.backgroundColor = '#ffffff';
    _menuThemes.style.backgroundColor = '#242c43';

    /*______________________________________________*/

    _bodyAll.style.backgroundColor = '#5b698e';
    _calcBody.style.backgroundColor = '#242c43';
    _calcDisplay.style.backgroundColor = '#182533';
    _calcNumber.style.color = 'white';
    _calcOpers.style.color = 'rgba(255, 255, 255, 0.497)';
    
    /*______________________________________________*/
    /*______________________SEN_____________________*/
    /*______________________________________________*/

    _buttonsSEN[0].style.color = '#455c8b'
    _buttonsSEN[0].style.backgroundColor = '#eae3db';
    _buttonsSEN[0].style.boxShadow = 'inset 0px -3px #bdb7b0';

    _buttonsSEN[1].style.color = '#455c8b'
    _buttonsSEN[1].style.backgroundColor = '#eae3db';
    _buttonsSEN[1].style.boxShadow = 'inset 0px -3px #bdb7b0';

    _buttonsSEN[2].style.color = '#455c8b'
    _buttonsSEN[2].style.backgroundColor = '#eae3db';
    _buttonsSEN[2].style.boxShadow = 'inset 0px -3px #bdb7b0';

    /*______________________________________________*/
    /*______________________FFS_____________________*/
    /*______________________________________________*/

    _buttonsFFS[0].style.color = '#455c8b'
    _buttonsFFS[0].style.backgroundColor = '#eae3db';
    _buttonsFFS[0].style.boxShadow = 'inset 0px -3px #bdb7b0';

    _buttonsFFS[1].style.color = '#455c8b'
    _buttonsFFS[1].style.backgroundColor = '#eae3db';
    _buttonsFFS[1].style.boxShadow = 'inset 0px -3px #bdb7b0';

    _buttonsFFS[2].style.color = '#455c8b'
    _buttonsFFS[2].style.backgroundColor = '#eae3db';
    _buttonsFFS[2].style.boxShadow = 'inset 0px -3px #bdb7b0';

    /*______________________________________________*/
    /*______________________OTT_____________________*/
    /*______________________________________________*/

    _buttonsOTT[0].style.color = '#455c8b'
    _buttonsOTT[0].style.backgroundColor = '#eae3db';
    _buttonsOTT[0].style.boxShadow = 'inset 0px -3px #bdb7b0';

    _buttonsOTT[1].style.color = '#455c8b'
    _buttonsOTT[1].style.backgroundColor = '#eae3db';
    _buttonsOTT[1].style.boxShadow = 'inset 0px -3px #bdb7b0';

    _buttonsOTT[2].style.color = '#455c8b'
    _buttonsOTT[2].style.backgroundColor = '#eae3db';
    _buttonsOTT[2].style.boxShadow = 'inset 0px -3px #bdb7b0';

    /*______________________________________________*/
    /*______________________ZDP_____________________*/
    /*______________________________________________*/

    _buttonsZDP[0].style.color = '#455c8b'
    _buttonsZDP[0].style.backgroundColor = '#eae3db';
    _buttonsZDP[0].style.boxShadow = 'inset 0px -3px #bdb7b0';

    _buttonsZDP[1].style.color = '#455c8b'
    _buttonsZDP[1].style.backgroundColor = '#eae3db';
    _buttonsZDP[1].style.boxShadow = 'inset 0px -3px #bdb7b0';

    _buttonsZDP[2].style.color = '#455c8b'
    _buttonsZDP[2].style.backgroundColor = '#eae3db';
    _buttonsZDP[2].style.boxShadow = 'inset 0px -3px #bdb7b0';

    /*______________________________________________*/
    /*_____________________DMMX_____________________*/
    /*______________________________________________*/

    _buttonsDMMX[0].style.color = '#ffffff'
    _buttonsDMMX[0].style.backgroundColor = '#8da5e8';
    _buttonsDMMX[0].style.boxShadow = 'inset 0px -3px #798ec6';

    _buttonsDMMX[1].style.color = '#455c8b'
    _buttonsDMMX[1].style.backgroundColor = '#eae3db';
    _buttonsDMMX[1].style.boxShadow = 'inset 0px -3px #bdb7b0';

    _buttonsDMMX[2].style.color = '#455c8b'
    _buttonsDMMX[2].style.backgroundColor = '#eae3db';
    _buttonsDMMX[2].style.boxShadow = 'inset 0px -3px #bdb7b0';

    _buttonsDMMX[3].style.color = '#455c8b'
    _buttonsDMMX[3].style.backgroundColor = '#eae3db';
    _buttonsDMMX[3].style.boxShadow = 'inset 0px -3px #bdb7b0';

    /*______________________________________________*/
    /*______________________RI______________________*/
    /*______________________________________________*/

    _buttonsRI[0].style.color = '#ffffff';
    _buttonsRI[0].style.backgroundColor = '#8da5e8';
    _buttonsRI[0].style.boxShadow = 'inset 0px -3px #798ec6';

    _buttonsRI[1].style.color = '#ffffff';
    _buttonsRI[1].style.backgroundColor = '#b50f17';
    _buttonsRI[1].style.boxShadow = 'inset 0px -3px #940c13';
    
  } else {
    return;
  }

}

themes_effect = (themes) => {
  switch(themes.textContent){
    case 'bedtime':
      moon_theme();
      break;
    
    case 'clear_day':
      sunny_theme();
      break;

    case 'cloudy_filled':
      cloudy_theme();
      break;
  }
}
