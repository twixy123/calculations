/* 
формула для измерения времени двух удаляющихся друг от друга объекта. 
Формула определяет сколько времени требуется одному объекту с более высокой скоростью догнать 
второй объект с менее низкой скоростью
----------
"время" = "расстояние" / ("скорость объекта у которого скорость выше" - "скорость объекта у которого скорость ниже")
----------
*/

//как рещил я
/* 
function race(v1, v2, g) {
    if(v1 > v2 || (v1 <= 0 && v2<= 0 && g <= 0)) return null
    const resForm = g / (v2 - v1)
    const resHour = Math.floor(resForm)
    const checkResForm = resForm > 9 ? resForm - 10 : resForm
    const minDes = resForm - resHour ? '0.' + (checkResForm + 0.000001 + '').match(/\d+(?!\.)/)[0] : resForm - resHour
    const min = (((60/100) * +minDes) + '').match(/\d+(?!\.)/)[0]
    const resMin = +min.slice(0,2)
    const secDes = '0.'+ min.slice(2)
    const sec = (((60/100) * +secDes) + '').match(/\d+(?!\.)/)[0]
    const resSec = +sec.slice(0,2)
    return [resHour, resMin, resSec]
}
*/

//правильное решение

/* 
знак "|" - подразумевает "или"
Формула преобразующая из числа с плаваюшей точкой в минуты|секунды
----------
"минуты|секунды" = "число с плаваюшей точкой" * "60|3600" % 60
----------
"расстояние" = 550
"скорость объекта у которого скорость выше" = 850
"скорость объекта у которого скорость ниже" = 820
"время" = "расстояние" / ("скорость объекта у которого скорость выше" - "скорость объекта у которого скорость ниже")
// "время" = 18.333333333333332
"минуты" = "время" * 60 % 60
// "минуты" = 20
"секунды" = "время" * 3600 % 60
// "секунды" = 0

*/
/* function race(v1, v2, g){
  let time=g/(v2-v1);
  return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
} */