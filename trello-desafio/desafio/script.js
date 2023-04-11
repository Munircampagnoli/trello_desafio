let quadros = [];
let numQuadros = 0;

function gerarCorAleatoria() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function criarQuadro() {
  const texto = prompt("Digite o título do quadro:");
  if (texto) {
    const cor = gerarCorAleatoria();
    const quadro = document.createElement("div");
    
    quadro.classList.add("quadro");
    quadro.style.width = "350px";
    quadro.style.height = "200px";
    quadro.style.backgroundColor = cor;

    quadro.addEventListener ("click",() =>{
        const quadro1=document.createElement("div")
        quadro1.classList.add("clickquadro")

        document.body.appendChild(quadro1)
        quadro1.appendChild(textarea)

        const btnFechar=document.createElement("button")
    btnFechar.classList.add("btnFechar")
    btnFechar.textContent = "Fechar";
    btnFechar.addEventListener("click", ()=>{
        quadro1.remove()
    })

        quadro1.appendChild(btnFechar)
    })


    
    
 
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", () => {
      quadro.remove();
      numQuadros--;
      quadros = quadros.filter((q) => q.titulo !== texto);
      salvarQuadros();
    });

    const btnSalvar=document.createElement("button")
    btnSalvar.classList.add("btnSalvar")
    btnSalvar.textContent = "Salvar";
    btnSalvar.addEventListener("click",()=>{

    })
    quadro.appendChild(btnSalvar)


    const textarea= document.createElement("textarea")
    textarea.classList.add("textarea")


    quadro.appendChild(botaoExcluir);


    const container = document.querySelector("#container");
    container.appendChild(quadro);

    quadros.push({ titulo: texto, cor: cor });
    numQuadros++;

    salvarQuadros();
  }
}

function renderizarQuadros() {
  const container = document.querySelector("#container");

  quadros.forEach((quadroInfo) => {
    const quadro = document.createElement("div");
    quadro.classList.add("quadro");
    quadro.style.width = "350px";
    quadro.style.height = "200px";
    quadro.style.backgroundColor = quadroInfo.cor;

    const btnSalvar=document.createElement("button")
    btnSalvar.classList.add("btnSalvar")
    btnSalvar.textContent = "Salvar";
    btnSalvar.addEventListener("click",()=>{

    })
    quadro.appendChild(btnSalvar)

    const textarea= document.createElement("textarea")
    textarea.classList.add("textarea")

    quadro.appendChild(textarea)

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", () => {
      quadro.remove();
      numQuadros--;
      quadros = quadros.filter((q) => q !== quadroInfo);
      salvarQuadros();
    });

    quadro.appendChild(botaoExcluir);
    quadro.appendChild(titulo);

    container.appendChild(quadro);
  });
}

function salvarQuadros() {
  const json = JSON.stringify(quadros);
  localStorage.setItem("quadros", json);
}

function carregarQuadros() {
  fetch('quadros.json')
    .then((response) => response.json())
    .then((data) => {
      quadros = data;
      numQuadros = quadros.length;
      renderizarQuadros();
    });

  const quadrosJSON = localStorage.getItem("quadros");
  if (quadrosJSON) {
    quadros = JSON.parse(quadrosJSON);
    numQuadros = quadros.length;
    renderizarQuadros();
  }
}

const botaoCriarQuadro = document.querySelector("#criar");
botaoCriarQuadro.addEventListener("click", criarQuadro);

window.addEventListener("load", carregarQuadros);

function excluirTodosQuadros() {
  if (confirm("Tem certeza que deseja excluir todos os quadros?")) {
    const quadros = document.querySelectorAll("#excluirtodososquadros");
    for (let i = 0; i < quadros.length; i++) {
      quadros[i].remove();
    }
    numQuadros = 0;
    quadros.length = 0; 
    localStorage.clear();
  }
}

function acessarArea(){
    alert('página indisponivel')

}
function acessarrecente(){
    alert('pagina indisponivel')

}