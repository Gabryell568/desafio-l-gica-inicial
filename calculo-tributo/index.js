let imposto =['15%', '25%', '35%']
let salarioLiquido= ''


if (salarioLiquido > 0 && salarioLiquido < 1100){
		console.log(`seu salario é de ${salarioLiquido} R$ e sua tributação foi de ${imposto[0]}`)
		salarioLiquido5()
} else if (salarioLiquido > 1101 && salarioLiquido < 2500){
		console.log(`seu salario é de ${salarioLiquido} R$ e sua tributação foi de ${imposto[1]}`)
		salarioLiquido10()
} else if (salarioLiquido > 2501){
	console.log(`seu salario é de ${salarioLiquido} R$ e sua tributação foi de ${imposto[2]}`)
	salarioLiquido15()
}




function salarioLiquido5(){
	let valorDesconto = (salarioLiquido * 15/100)
	const tributo = 'o valor descontado foi de: '
	console.log(tributo + valorDesconto+' R$')
}

function salarioLiquido10(){
	let valorDesconto = (salarioLiquido * 25/100)
	const tributo = 'o valor descontado foi de: '
	console.log(tributo + valorDesconto+' R$')
}

function salarioLiquido15(){
	let valorDesconto = (salarioLiquido * 35/100)
	const tributo = 'o valor descontado foi de: '
	console.log(tributo + valorDesconto+' R$')
}
