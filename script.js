document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);
document.querySelector("#qtde").addEventListener("change", atualizapreco)
document.querySelector("#js").addEventListener("change", atualizapreco)
document.querySelector("#layout-yes").addEventListener("change", atualizapreco)
document.querySelector("#layout-no").addEventListener("change", atualizapreco)
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo =  document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML= `${prazo} semana`
    atualizapreco()
})

function atualizapreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS =document.querySelector("#js").checked
    const incluilayout = document.querySelector("#layout-yes").checked
    const prazo = document.querySelector("#prazo").value
    let preco= qtde *100.00;
    if(temJS)preco*=1.10;
    if(incluilayout){
        preco+=500;
    }
    let taxaurgencia=1-prazo*0.1;
    preco*= 1+taxaurgencia;
    document.querySelector("#preco").innerHTML= `R$ ${preco.toFixed(2)}`
}
