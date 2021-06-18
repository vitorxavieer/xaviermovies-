const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';

function obtemInfos() {
    $.ajax({
        url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
        data: {
            api_key: '945dc618bdc1351433d8c81db313bff3'
        }
    })

        .done(function (data) {

            let codigo_html = '';
            for (i = 0; i < 12; i++) {

                titulo = data.results[i].title;
                ano = data.results[i].release_date
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;


                codigo_html += `<div class="col-md-2 w3l-movie-gride-agile">
            <a href="single.html" class="hvr-shutter-out-horizontal"><img src="${imagem}" title="album-name" class="img-responsive" alt=" " />
                <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
            </a>
            <div class="mid-1 agileits_w3layouts_mid_1_home">
                <div class="w3l-movie-text">
                    <h6><a href="single.html">${titulo}</a></h6>							
                </div>
                <div class="mid-2 agile_mid_2_home">
                    <button id = "${data.results[i].id}"onClick=ricardo(this.id)>Ver mais sobre</button>
                </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="ribben">
                <p>Novo</p>
            </div>
        </div>
        
        `;
            }

            $('#cards_de_filme').html(codigo_html);
        });

    completainfo()
}

function obtemInfos2() {
    $.ajax({
        url: TMDB_ENDPOINT_BASE + '/movie/now_playing',
        data: {
            api_key: '945dc618bdc1351433d8c81db313bff3'
        }
    })

        .done(function (data) {

            let codigo_html = '';

            for (i = 0; i < 12; i++) {
                titulo = data.results[i].title;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                descricao = data.results[i].overview;

                codigo_html += `<div class="item">
            <div class="w3l-movie-gride-agile w3l-movie-gride-agile1">
                <a href="single.html" class="hvr-shutter-out-horizontal"><img src="${imagem}/m13.jpg" title="album-name" class="img-responsive" alt=" " />
                    <div class="w3l-action-icon"><i class="fa fa-play-circle" aria-hidden="true"></i></div>
                </a>
                <div class="mid-1 agileits_w3layouts_mid_1_home">
                    <div class="w3l-movie-text">
                        <h6><a href="single.html">${titulo}</a></h6>							
                    </div>
                    <div class="mid-2 agile_mid_2_home">
                        <p>2016</p>
                        <div class="block-stars">
                            <ul class="w3l-ratings">
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="ribben">
                    <p>Novo</p>
                </div>
            </div>
        </div>`
            }

            $('#banana').html(codigo_html);
        });
}

function completainfo() {
    let tela = document.getElementById('exemplo')
    let titulo =
        tela.innerHTML += `
    <div class="song-info">
        <h3>THE LEGEND OF TARZAN - Official Trailer 2</h3>
    </div>
    <div class="video-grid-single-page-agileits">
        <div data-video="dLmKio67pVQ" id="video"> <img src="images/5.jpg" alt=""
            class="img-responsive" /> </div>
    </div>
    `

}
function ricardo(id) {
    location.href = `single.html?id=${id}`    
}