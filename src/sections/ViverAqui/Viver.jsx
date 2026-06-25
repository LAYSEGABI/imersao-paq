import './Viver.css';
// Usando a imagem do hero como placeholder conforme solicitado
import placeholderIcon from '../../assets/heroImg.png';

export default function ViverAqui() {
  const experiencias = [
    {
      id: 1,
      titulo: "Tecnologia e Inovação",
      texto: "Aprenda a resolver problemas de forma inovadora e transforme suas ideias em soluções reais por meio de projetos práticos."
    },
    {
      id: 2,
      titulo: "Competências técnicas",
      texto: "Aprenda sobre as principais ferramentas digitais do mercado e tenha acesso a plataformas de aprendizagem nas áreas de programação, design e criação de jogos."
    },
    {
      id: 3,
      titulo: "Desenvolvimento pessoal",
      texto: "Desenvolva habilidades essenciais para o mercado de trabalho e para a vida, como comunicação, colaboração, responsabilidade, autoconhecimento e inteligência emocional."
    },
    {
      id: 4,
      titulo: "Visitas e eventos",
      texto: "Conheça empresas, participe de eventos e vivencie de perto a cultura dos ambientes de tecnologia."
    },
    {
      id: 5,
      titulo: "Conexões",
      texto: "Converse com profissionais de diferentes áreas, descubra carreiras e tenha acesso a mentores especialistas para apoiar sua jornada de aprendizagem."
    },
    {
      id: 6,
      titulo: "Comunidade",
      texto: "Aprenda junto com outros jovens em uma rede de apoio ativa, tenha figuras de referência e inspiração e viva momentos que vão além de aprender na frente do computador."
    }
  ];

  return (
    <section className="viver-wrapper">
      <div className="container">
        
        <div className="viver-main-container">
          <div className="viver-header">
            <h2>
              O QUE VOCÊ <span className="text-highlight">VAI VIVER</span> AQUI
            </h2>
          </div>

          <div className="viver-grid">
            {experiencias.map((item) => (
              <div key={item.id} className="viver-card">
                
                {/* Nova estrutura: Header do card com ícone e título lado a lado */}
                <div className="viver-card-header">
                  <div className="viver-card-icon">
                    <img src={placeholderIcon} alt={`Ícone ${item.titulo}`} />
                  </div>
                  <h3>{item.titulo}</h3>
                </div>

                {/* Corpo do card com o texto de ponta a ponta */}
                <div className="viver-card-body">
                  <p>{item.texto}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}