import React from 'react';


const SeuComponente = () => {
  return (
    <div>
     <i className="bi bi-list menu-mobile"></i>

<aside id="header">
  <section className="profile">
    <img src="../static/img/fotowesley.jpg" alt="foto wesley" />
    <h1>Wesley Santos</h1>
    <div className="social-links mt-4 text-center">
      <a target="_blank" href="">
        <i className="bi bi-linkedin"></i>
      </a>
      <a target="_blank" href="">
        <i className="bi bi-github"></i>
      </a>
    </div>
  </section>

        <nav id="navbar" class="nav-menu" >
            <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#inicio"> <i class="bi bi-house"></i> Inicio </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#sobre"><i class="bi bi-person"></i> Sobre</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#habilidades"> <i class="bi bi-list-check"></i> Habilidades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#curriculo"> <i class="bi bi-file-earmark"></i> Curriculo</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#portifolio"> <i class="bi bi-collection"></i> Portifólio</a>
                  </li>  
                  <li class="nav-item">
                    <a class="nav-link" href="#contato"> <i class="bi bi-envelope"></i> Contato</a>
                  </li> 
              </ul>
                

        </nav>
</aside>

      <main id="main">

        <section id="inicio" className="row m-0 p-0">
        <div class="col-md-5 d-flex justify-content-center align-items-center flex-column">
            <h2 class="text-white text-shadow">Wesley Santos</h2>
            <span id="subtittle " class="text-white text-shadow">Músico e Entusiasta de Tecnologia</span>
          </div>

        <div class="col-md-7 d-flex justify-content-end align-items-end">
          <div id="arraste" class="d-flex align-items-center">
            <i class="bi bi-arrow-down text-white pe-2 fs-2"></i>
            <a href="#sobre">Arraste para Mais</a>
          </div>
        </div>
        </section>

        <section className="container mt-5" id="sobre">
          <div className="row w-100">
    <div className="col-md-12"> 
      <h2 className="pt-3" >Sobre</h2>
      <p>Um profissional apaixonado por música e tecnologia,
        combinando mais de uma década de experiência como professor de música,
        com domínio em tecnologia. Atualmente cursando Análise e Desenvolvimento de Sistemas na Anhembi Morumbi,
        refinando meus conhecimentos em tecnologias como:
        HTML, CSS, JavaScript, Node.Js, C++, Git, GitHub, MongoDB e MySQL .
      </p>
    </div>
          </div>

          <div className="row mt-4">

    <div className="col-md-4">
      <img className="img-fluid" src="../static/img/fotofundo.jpg" alt="fotowesley" />
    </div>

    <div className="col-md-8">
      <h3>Professor de música</h3>
      <p> 
        Um profissional apaixonado por música e tecnologia,
        combinando mais de uma década de experiência como professor de música, 
        com domínio em tecnologia. Atualmente cursando Análise e Desenvolvimento
        de Sistemas na Anhembi Morumbi, refinando meus conhecimentos
        em tecnologias como: HTML, CSS, JavaScript, Node.Js, C++, Git, GitHub, MongoDB e MySQL .
      </p>

      <div className="row mt-3 mb-3">
        <div className="col-md-6">
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">
              Idade: <span className="fw-lighter">27 Anos</span> 
            </li>
            <li className="list-group-item">
              Cidade: <span className="fw-lighter">Itapevi</span> 
            </li>
            <li className="list-group-item">
              Estado: <span className="fw-lighter">São Paulo</span> 
            </li>  
            <li className="list-group-item">
              Estado: <span className="fw-lighter">São Paulo</span> 
            </li>               
          </ul>
        </div>

        <div className="col-md-6">
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">
              Hobby: <span className="fw-lighter">Música e Esporte</span> 
            </li> 
            <li className="list-group-item">
              Hobby: <span className="fw-lighter">Música e Esporte</span> 
            </li> 
            <li className="list-group-item">
              Hobby: <span className="fw-lighter">Música e Esporte</span> 
            </li> 
            <li className="list-group-item">
              Hobby: <span className="fw-lighter">Música e Esporte</span> 
            </li> 
          </ul>
        </div>
      </div>
      <p>
        lLorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Iste debitis veniam quaerat expedita quibusdam nulla quasi commodi asperiores error fugiat cum
      </p>
    </div>
          </div>
        </section>

        

        <section className="container mt-5 section-bg" id="habilidades">
      <div className="container pb-5">
        <h2 className="pt-5">Hard Skills</h2>

        <div className="row">
          <div className="col-md-6">
            <p className="mt-3 mb-0">HTML</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
            <p className="mt-3 mb-0">CSS</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
            <p className="mt-3 mb-0">JavaScript</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
          </div>

          <div className="col-md-6">
            <p className="mt-3 mb-0">C++</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <p className="mt-3 mb-0">MongoDB</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
            <p className="mt-3 mb-0">MySQL</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
            </div>
          </div>
        </div>

        <hr className="mt-3" />
        <h2>Soft Skills</h2>

        <div className="row">
          <div className="col-md-6">
            <p className="mt-3 mb-0">Trabalho em Equipe</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
            <p className="mt-3 mb-0">Proatividade</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="mt-3 mb-0">Comunicação</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
            <p className="mt-3 mb-0">Empatia</p>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
          </div>
        </div>
      </div>
        </section>

        <section className="mt-5 cv" id="curriculo">
      <div className="container pb-5">
        <h2 className="pt-3 pb-4">Curriculo</h2>

        <div className="row">
          <div className="col-md-6">
            <h3 className="cv-title">Educação</h3>
            <div className="cv-item">
              <h4>Analise e Desenvolvimento de Sistemas</h4>
              <h5>2022-2024</h5>
              <p><em>Anhembi Morumbi</em></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                ro ab magnam perferendis fugiat quidem repellendus! A, fugit tenetur!</p>
            </div>

            <div className="cv-item">
              <h4>Analise e Desenvolvimento de Sistemas</h4>
              <h5>2022-2024</h5>
              <p><em>Anhembi Morumbi</em></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                ro ab magnam perferendis fugiat quidem repellendus! A, fugit tenetur!</p>
            </div>

            <div className="cv-item">
              <h4>Analise e Desenvolvimento de Sistemas</h4>
              <h5>2022-2024</h5>
              <p><em>Anhembi Morumbi</em></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                ro ab magnam perferendis fugiat quidem repellendus! A, fugit tenetur!</p>
            </div>

          </div>


          <div className="col-md-6 mt-1">
            <h3 className="cv-title">Profissional</h3>
            <div className="cv-item">
              <h4>Analise e Desenvolvimento de Sistemas</h4>
              <h5>2022-2024</h5>
              <p><em>Anhembi Morumbi</em></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                ro ab magnam perferendis fugiat quidem repellendus! A, fugit tenetur!</p>
            </div>

            <div className="cv-item">
              <h4>Analise e Desenvolvimento de Sistemas</h4>
              <h5>2022-2024</h5>
              <p><em>Anhembi Morumbi</em></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                ro ab magnam perferendis fugiat quidem repellendus! A, fugit tenetur!</p>
            </div>

            <div className="cv-item">
              <h4>Analise e Desenvolvimento de Sistemas</h4>
              <h5>2022-2024</h5>
              <p><em>Anhembi Morumbi</em></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                ro ab magnam perferendis fugiat quidem repellendus! A, fugit tenetur!</p>
            </div>
          </div>
        </div>
      </div>
        </section>

        <section id="portifolio" className="section-bg mt-5">
      <div className="container pb-5 mt-5">
        <h2 className="pb-4">Portifolio</h2>

        <div id="carouselPortifolio" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselPortifolio" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselPortifolio" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card">
                    <img src="../static/img/fundo2.jpg" className="card-img-top" alt="imagemfundo" />
                    <div className="card-body">
                      <h5 className="card-title">Titulo do Projeto 1</h5>
                      <p className="card-text">explicar o projeto aqui</p>
                      <div>
                        <a href="#" target="_blank" className="btn btn-outline-primary"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card">
                    <img src="../static/img/fundo2.jpg" className="card-img-top" alt="imagemfundo" />
                    <div className="card-body">
                      <h5 className="card-title">Titulo do Projeto 2</h5>
                      <p className="card-text">explicar o projeto aqui</p>
                      <div>
                        <a href="#" target="_blank" className="btn btn-outline-primary"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card">
                    <img src="../static/img/fundo2.jpg" className="card-img-top" alt="imagemfundo" />
                    <div className="card-body">
                      <h5 className="card-title">Titulo do Projeto 3</h5>
                      <p className="card-text">explicar o projeto aqui</p>
                      <div>
                        <a href="#" target="_blank" className="btn btn-outline-primary"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>

        <section className="pt-5 pb-5" id="contato">
      <div className="container mb-5">
        <h2 className="pt-3 pb-3">Contato</h2>

        <div className="row">

          <div className="col-md-5">
            <div className="card p-5 shadow border-0">

              <div className="endereco">
                <h4> <i className="bi bi-geo-alt"></i> Localização</h4>
                <p>Itapevi</p>
              </div>

              <div className="email">
                <h4> <i className="bi bi-envelope"></i> Email:</h4>
                <p>wesleyydev@gmail.com</p>
              </div>

              <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.715632170153!2d-46.93355472575099!3d-23.54272816090581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0697ce64a199%3A0x95673374b731bf45!2sR.%20Bonif%C3%A1cio%20de%20Abreu%20-%20Parque%20Itamarati%2C%20Itapevi%20-%20SP%2C%2006654-000!5e0!3m2!1spt-BR!2sbr!4v1694189399333!5m2!1spt-BR!2sbr" width="400" height="300" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>

          <div className="col-md-7 mt-5 mt-md-0">
            <div className="card p-5 h-100 shadow border-0">

              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nome" className="form-label">Nome</label>
                  <input type="text" className="form-control" id="nome" name="nome" placeholder="Digite seu Nome" />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Digite seu Email" />
                </div>

                <div className="col-12">
                  <label htmlFor="mensagem" className="form-label">Mensagem: </label>
                  <textarea type="text" className="form-control" id="mensagem" placeholder="Digite sua Mensagem" name="mensagem" rows="8"></textarea>
                </div>

                <div className="col-12 d-flex justify-content-center mt-4">
                  <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
        </section>

        
      </main>

      <script src="../static/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../static/script.js"></script>
    </div>
  );
};

export default SeuComponente;
