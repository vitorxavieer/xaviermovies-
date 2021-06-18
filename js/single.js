const API_KEY = '945dc618bdc1351433d8c81db313bff3'
function exibeFilmes(){
    let telqa = document.getElementById('exemplo')
    let dados = JSON.parse(this.responseText)
    console.log(dados)
        let filme = dados.title;
        let imagem = 'https://image.tmdb.org/t/p/w500' + dados.poster_path;
        let descricao = dados.overview;
        let id = dados.id

        telqa.innerHTML = `
        
        <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="${imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p>${dados.status}</p>
                      <h5 class="card-title">${filme}</h5>
                      <h3 class="card-title">${dados.genres[0].name}</h3>
                      <h2>${dados.vote_average}</h2>
                      <p>${dados.release_date}</p>
                      <p class="card-text">${descricao}</p>
                    </div>
                  </div>
            </div>
        `

}


function executa(id){
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeFilmes;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
    xhr.send()
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

onload = () => {
    let id = getParameterByName("id")
    executa(id)
}
