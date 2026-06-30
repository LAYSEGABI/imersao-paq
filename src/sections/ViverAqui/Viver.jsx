import './Viver.css';
import { Lightbulb, MonitorSmartphone, BrainCircuit, Building2, Users, HeartHandshake } from 'lucide-react';

// Importando todas as imagens
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import missao from '../../assets/missaocumprida.png';

export default function ViverAqui() {
  const experiencias = [
    {
      id: 1,
      titulo: "Tecnologia e Inovação",
      icone: <Lightbulb className="lucide-icon" size={28} />,
      imagem: img1, // Adicionando a imagem específica aqui
      texto: <>Aprenda a resolver problemas de forma <span className="text-highlight">inovadora</span> e transforme suas ideias em <span className="text-highlight">soluções reais</span> por meio de projetos práticos.</>
    },
    {
      id: 2,
      titulo: "Competências técnicas",
      icone: <MonitorSmartphone className="lucide-icon" size={28} />,
      imagem: img2,
      texto: <>Aprenda sobre as principais <span className="text-highlight">ferramentas digitais</span> do mercado e tenha acesso a plataformas de aprendizagem nas áreas de programação, design e criação de jogos.</>
    },
    {
      id: 3,
      titulo: "Desenvolvimento pessoal",
      icone: <BrainCircuit className="lucide-icon" size={28} />,
      imagem: img3,
      texto: <>Desenvolva habilidades <span className="text-highlight">essenciais</span> para o mercado de trabalho e para a vida, como comunicação, colaboração, responsabilidade, autoconhecimento e <span className="text-highlight">inteligência emocional</span>.</>
    },
    {
      id: 4,
      titulo: "Visitas e eventos",
      icone: <Building2 className="lucide-icon" size={28} />,
      imagem: img4,
      texto: <>Conheça <span className="text-highlight">empresas</span>, participe de eventos e vivencie de perto a cultura dos <span className="text-highlight">ambientes de tecnologia</span>.</>
    },
    {
      id: 5,
      titulo: "Conexões",
      icone: <Users className="lucide-icon" size={28} />,
      imagem: missao, // Usando de placeholder até você converter a img5.CR2
      texto: <>Converse com profissionais de diferentes áreas, descubra carreiras e tenha acesso a <span className="text-highlight">mentores especialistas</span> para apoiar sua jornada de aprendizagem.</>
    },
    {
      id: 6,
      titulo: "Comunidade",
      icone: <HeartHandshake className="lucide-icon" size={28} />,
      imagem: img5, // Usando de placeholder para a sexta foto
      texto: <>Aprenda junto com outros jovens em uma <span className="text-highlight">rede de apoio</span> ativa, tenha figuras de referência e inspiração e viva momentos que <span className="text-highlight">vão além</span> de aprender na frente do computador.</>
    }
  ];

  return (
    <section className="viver-wrapper" id='vivencias'>
      <div className="container">
        
        <div>
          <div className="viver-header">
            <h2>
              O QUE VOCÊ <span className="text-highlight">VAI VIVER</span> AQUI
            </h2>
          </div>

          <div className="viver-grid">
            {experiencias.map((item) => (
              <div key={item.id} className="viver-card">
                
                {/* Lado Esquerdo: Imagem com Gradiente */}
                <div className="viver-card-image">
                  {/* Trocamos a variável fixa pela imagem dinâmica do map (item.imagem) */}
                  <img src={item.imagem} alt={`Capa ${item.titulo}`} />
                  <div className="image-gradient"></div>
                </div>

                {/* Lado Direito: Conteúdo */}
                <div className="viver-card-content">
                  <div className="viver-card-header">
                    <div className="viver-card-icon">
                      {item.icone}
                    </div>
                    <h3>{item.titulo}</h3>
                  </div>

                  <div className="viver-card-body">
                    <p>{item.texto}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}