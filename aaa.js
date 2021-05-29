                                                                                                     //29.05

fetch("https://api.github.com/emojis")
.then(
	function(data){
             return data.json()}
             )
.then(
	function(data){
		let a = document.querySelector("body")
		for (let q in data){
			let x = document.createElement("img")
			x.setAttribute("src", data[q])
			a.appendChild(x)
		}
	})




























                                                                                                        /*15.05.21
let g = document.querySelector("input")
let b = document.querySelector("button")
let l = document.querySelector("ul")

b.addEventListener('click', ()=>{
   g = document.querySelector("input")
   let t=document.createElement("li")
   t.innerHTML= g.value
             t.addEventListener('click', ()=>{
                        t.classList.toggle("crossed")
 })
             t.addEventListener('dblclick', ()=>{
                        l.removeChild(t)
 })
     g.value= ""
     g.focus()
     l.appendChild(t)
})







                                                                                                        /*08.05.21
let b = document.querySelector("button")
let g = document.querySelector("input[type='checkbox']")
let i = document.querySelector("button")
let l = document.querySelector("input[name='l']")

g.addEventListener('click', ()=>{
	if (g.checked) {
		b.disabled= false
	}
	else{
		b.disabled = true
	}
})


i.addEventListener('click', ()=>{
	if (i.disabled = true) {
		alert("Ви зареєструвались")}
})


b.addEventListener('click', ()=>{
	console.log(l.value)
	window.localStorage.setItem("user",l.value)
})

l.value= window.localStorage.getItem("user")




24
/*let x= document.getElementById("n")
let p= document.getElementById("t")

function f(){
	p.innerHTML = "Привіт, "+x.value
}









/*let r = parseInt(Math.random()*255)
let g = parseInt(Math.random()*255)

let b = parseInt(Math.random()*255)
document.write("<div style='background-color: rgb("+r+","+g+","+b+");'></div>")








/*function s(year,month){
	let NowDate = new Date()
	let NowY = NowDate.getFullYear()-year
 console.log(NowY)
 let NowM = NowDate.getMonth()+1-month
console.log(NowM)
 if (NowM < 0){
return ''+(NowY-1)+" років і "+(12+NowM)+" місяців"
 	}else{
return ''+(NowY)+" років і "+(NowM)+" місяців"
 	}
 
 

}

let x = prompt("Який рік народження?")
let i = prompt("Який місяць народження?")
let y = s(x,i)


document.write("Вам "+y)










/*y=prompt("Введіть к-ть рядків")
o=1
if(t==1){
	document.write("<ol>")

}
while(o<=y){
document.write("<li></li>")
o++
}

if()







/*document.write("<table>")
for (let r=1; r<=8; r++){
	document.write(`<tr>`)
	for(let k =1; k<=8; k++){
		if(r)
		document.write(`<td>${r}-${k}</td>`)
	}
	document.write('</tr>')
}


document.write("</table>")

/*for (let year = 2000; year <= 2080; year++){
	if(year % 400 == 0|| (year % 4 == 0 && !(year % 100 == 0))){
		console.log(year+` - високосний`)
	}else{
		console.log(year+` - не високосний`)
	}
	
}


/*let i =0
let sum = 0
//let a =prompt("Введіть число до якого ви хочете знайти суму")
document.write("<pre>")
for (i=1; i<=10; i++){
	for (j=1; j<=10; j++)
	sum = i*j
	document.write(i+"*"+j+" = "+sum+"\t")
}
document.write()



/*let a = prompt ( "Введіть 1 число " ) 
let b = prompt ( "Введіть 2 число " ) 
let diia = prompt ( "Введіть символ математичної дії" )
let result = null
switch  ( diia )  {   
case  "+" : result = a+b
break
case  "-" : result = a-b
break
case  "*" : result = a*b
break
case  "**" : result = a**b
break
case  ":" :
case "/" : result = Math.round(a/b*100)/100
break
default : `Мені не зрозумілий вираз ${a}${diia}${b}`
}
document.write (`${a}${diia}${b}=${result}`)
*/