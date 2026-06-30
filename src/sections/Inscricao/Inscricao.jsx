import { useState } from "react";
import { supabase } from "../../supabaseClient";
import confetti from 'canvas-confetti';
import "./Inscricao.css";

export default function Formulario() {
 const [etapaAtual, setEtapaAtual] = useState(1);
  const [mostrarPopup, setMostrarPopup] = useState(false); // 2. Estado do Popup

  const [formData, setFormData] = useState({
    nome: '', genero: '', raca: '', idade: '', whatsapp: '',
    unidade: '', cidade: '', bairro: '', escola: '', renda: '',
    profissao: '', sobre: '', comoConheceu: '',
    // ... campos "Outro" auxiliares continuam aqui
  });

  // 3. Função para limpar e resetar
  const resetarFormulario = () => {
    setFormData({
      nome: '', genero: '', raca: '', idade: '', whatsapp: '',
      unidade: '', cidade: '', bairro: '', escola: '', renda: '',
      profissao: '', sobre: '', comoConheceu: ''
    });
    setEtapaAtual(1);
    setMostrarPopup(false);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Tratamento para permitir SOMENTE NÚMEROS no WhatsApp (e limita a 11 dígitos)
    if (name === "whatsapp") {
      value = value.replace(/\D/g, ""); // \D significa "tudo que não for dígito"
      value = value.slice(0, 11); // Limita o tamanho (ex: 48999999999)
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const etapaAnterior = () => {
    if (etapaAtual > 1) setEtapaAtual(etapaAtual - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (etapaAtual < 4) {
      setEtapaAtual(etapaAtual + 1);
    } else {
      // 1. Organizamos os dados para a estrutura exata do banco
      const dadosFinais = {
        nome: formData.nome,
        genero:
          formData.genero === "Outro" ? formData.generoOutro : formData.genero,
        raca: formData.raca === "Outro" ? formData.racaOutro : formData.raca,
        idade:
          formData.idade === "Outro" ? formData.idadeOutro : formData.idade,
        whatsapp: formData.whatsapp,
        unidade: formData.unidade,
        cidade:
          formData.cidade === "Outro" ? formData.cidadeOutro : formData.cidade,
        bairro: formData.bairro,
        escola: formData.escola,
        renda: formData.renda,
        profissao: formData.profissao,
        sobre: formData.sobre,
        como_conheceu:
          formData.comoConheceu === "Outro"
            ? formData.comoConheceuOutro
            : formData.comoConheceu,
      };

      try {
        // 2. Fazemos o envio para a tabela "inscricoes"
        const { error } = await supabase
          .from("inscricoes")
          .insert([dadosFinais]);

        if (!error) {
        setMostrarPopup(true); // Abre o popup
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } }); // Dispara o confete
      }

       
      } catch (err) {
        console.error("Erro inesperado:", err);
      }
    }
  };

  return (
    <section id="formulario" className="form-wrapper">
      <div className="container">
        <div className="form-card">
          {/* --- Stepper (Barra de Progresso) --- */}
          <div className="form-stepper">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="step-wrapper">
                <div
                  className={`step-circle ${etapaAtual >= num ? "active" : ""}`}
                >
                  {num}
                </div>
                <span
                  className={`step-title ${etapaAtual >= num ? "active-text" : ""}`}
                >
                  {num === 1 && "Dados Pessoais"}
                  {num === 2 && "Onde você mora"}
                  {num === 3 && "Sua Realidade"}
                  {num === 4 && "Sobre você"}
                </span>
                {num < 4 && (
                  <div
                    className={`step-line ${etapaAtual > num ? "active-line" : ""}`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="form-content">
            {/* --- Coluna da Esquerda (Textos) --- */}
            <div className="form-sidebar">
              {etapaAtual === 1 && (
                <>
                  <h2>Vamos começar pelo básico 👋</h2>
                  <p>
                    Queremos te conhecer melhor! Preencha seus dados com atenção
                    para darmos o primeiro passo juntos.
                  </p>
                </>
              )}
              {etapaAtual === 2 && (
                <>
                  <h2>Conta pra gente onde você mora 📍</h2>
                  <p>
                    Essas informações ajudam a gente a entender a logística para
                    os encontros presenciais.
                  </p>
                </>
              )}
              {etapaAtual === 3 && (
                <>
                  <h2>Queremos entender sua realidade 💜</h2>
                  <p>
                    O PAQ é focado em jovens de periferia e escola pública. Seja
                    sincero nas respostas abaixo.
                  </p>
                </>
              )}
              {etapaAtual === 4 && (
                <>
                  <h2>Agora queremos conhecer você ✨</h2>
                  <p>
                    Não existe resposta certa ou errada. Queremos saber o que te
                    move e como você chegou até aqui!
                  </p>
                </>
              )}

              <div className="form-security-badge">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22S21 17.5 21 12V5L12 2L3 5V12C3 17.5 12 22 12 22Z"
                    stroke="var(--color-secondary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="var(--color-secondary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  Todas as informações são confidenciais e usadas apenas para o
                  processo seletivo.
                </span>
              </div>
            </div>

            {/* --- Coluna da Direita (Inputs) --- */}
            <div className="form-fields-container">
              <form onSubmit={handleSubmit}>
                {/* ETAPA 1 */}
                {etapaAtual === 1 && (
                  <div className="form-grid">
                    <div className="input-group full-width">
                      <label>Qual é o seu nome completo? *</label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>

                    <div className="input-group">
                      <label>Com qual gênero você se identifica? *</label>
                      <select
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Não-binarie">Não-binarie</option>
                        <option value="Outro">Outro</option>
                      </select>
                      {/* Campo extra que só aparece se "Outro" for selecionado */}
                      {formData.genero === "Outro" && (
                        <input
                          type="text"
                          name="generoOutro"
                          value={formData.generoOutro}
                          onChange={handleChange}
                          placeholder="Qual?"
                          style={{ marginTop: "0.5rem" }}
                          required
                        />
                      )}
                    </div>

                    <div className="input-group">
                      <label>Você se considera uma pessoa: *</label>
                      <select
                        name="raca"
                        value={formData.raca}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="Branca">Branca</option>
                        <option value="Preta">Preta</option>
                        <option value="Parda">Parda</option>
                        <option value="Indígena">Indígena</option>
                        <option value="Amarela">Amarela</option>
                        <option value="Outro">Outro</option>
                      </select>
                      {formData.raca === "Outro" && (
                        <input
                          type="text"
                          name="racaOutro"
                          value={formData.racaOutro}
                          onChange={handleChange}
                          placeholder="Qual?"
                          style={{ marginTop: "0.5rem" }}
                          required
                        />
                      )}
                    </div>

                    <div className="input-group">
                      <label>Qual a sua idade? *</label>
                      <select
                        name="idade"
                        value={formData.idade}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione...</option>
                        {[15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(
                          (idade) => (
                            <option key={idade} value={idade}>
                              {idade}
                            </option>
                          ),
                        )}
                        <option value="Outro">Outro</option>
                      </select>
                      {formData.idade === "Outro" && (
                        <input
                          type="text"
                          name="idadeOutro"
                          value={formData.idadeOutro}
                          onChange={handleChange}
                          placeholder="Digite sua idade"
                          style={{ marginTop: "0.5rem" }}
                          required
                        />
                      )}
                    </div>

                    <div className="input-group">
                      <label>Qual seu número de celular? (WhatsApp) *</label>
                      {/* O handleChange já está filtrando para permitir só números */}
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="Apenas números (Ex: 48999999999)"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* ETAPA 2 */}
                {etapaAtual === 2 && (
                  <div className="form-grid">
                    <div className="input-group full-width">
                      <label>
                        Para qual unidade você gostaria de se inscrever? *
                      </label>
                      <select
                        name="unidade"
                        value={formData.unidade}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione a unidade...</option>
                        <option value="Centro">
                          Unidade Centro - Centro - Florianópolis
                        </option>
                        <option value="Pedra Branca">
                          Unidade Pedra Branca - Pedra Branca - Palhoça
                        </option>
                      </select>
                    </div>

                    <div className="input-group full-width">
                      <label>Em que cidade você mora? *</label>
                      <select
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione sua cidade...</option>
                        <option value="Florianópolis">Florianópolis</option>
                        <option value="Palhoça">Palhoça</option>
                        <option value="São José">São José</option>
                        <option value="Biguaçu">Biguaçu</option>
                        <option value="Outro">Outro</option>
                      </select>
                      {formData.cidade === "Outro" && (
                        <input
                          type="text"
                          name="cidadeOutro"
                          value={formData.cidadeOutro}
                          onChange={handleChange}
                          placeholder="Qual cidade?"
                          style={{ marginTop: "0.5rem" }}
                          required
                        />
                      )}
                    </div>

                    <div className="input-group full-width">
                      <label>Qual é o seu bairro? *</label>
                      <input
                        type="text"
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        placeholder="Digite o nome do seu bairro"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* ETAPA 3 */}
                {etapaAtual === 3 && (
                  <div className="form-grid">
                    <div className="input-group full-width">
                      <label>
                        Você é estudante ou formado em escola pública? *
                      </label>
                      <select
                        name="escola"
                        value={formData.escola}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                        <option value="Não, mas sou/era bolsista">
                          Não, mas sou/era bolsista
                        </option>
                      </select>
                    </div>

                    <div className="input-group full-width">
                      <label>
                        Qual é aproximadamente a renda per capita da sua
                        família? *
                      </label>
                      <span className="input-hint">
                        Cálculo: some a renda total da sua casa e divida pelo
                        número total de moradores.
                      </span>
                      <select
                        name="renda"
                        value={formData.renda}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione a faixa de renda...</option>
                        <option value="Até meio salário mínimo">
                          Até meio salário mínimo (até R$ 810,50)
                        </option>
                        <option value="Até 1 salário mínimo">
                          Até 1 salário mínimo (até R$ 1.621,00)
                        </option>
                        <option value="Até 1,5 salário mínimo">
                          Até 1,5 salário mínimo (até R$ 2.431,50)
                        </option>
                        <option value="Até 2 salários mínimos">
                          Até 2 salários mínimos (até R$ 3.242,00)
                        </option>
                        <option value="Até 2,5 salários mínimos">
                          Até 2,5 salários mínimos (até R$ 4.052,50)
                        </option>
                        <option value="Acima de 2,5 salários mínimos">
                          Acima de 2,5 salários mínimos (acima de R$ 4.052,50)
                        </option>
                      </select>
                    </div>

                    <div className="input-group full-width">
                      <label>
                        Qual é a profissão ou ocupação da pessoa com a principal
                        renda da casa? *
                      </label>
                      <input
                        type="text"
                        name="profissao"
                        value={formData.profissao}
                        onChange={handleChange}
                        placeholder="Ex: Pedreiro, Diarista, Vendedor..."
                        required
                      />
                    </div>
                  </div>
                )}

                {/* ETAPA 4 */}
                {etapaAtual === 4 && (
                  <div className="form-grid">
                    <div className="input-group full-width">
                      <label>
                        Agora é hora de nos contar um pouco mais sobre você! *
                      </label>
                      <span className="input-hint">
                        O que curte fazer? Tem algum sonho? Algo diferente que é
                        só seu? Pode soltar o verbo!
                      </span>
                      <textarea
                        name="sobre"
                        value={formData.sobre}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Escreva aqui..."
                        required
                      ></textarea>
                    </div>

                    <div className="input-group full-width">
                      <label>
                        Como você ficou sabendo sobre essa chamada do PAQ? *
                      </label>
                      <select
                        name="comoConheceu"
                        value={formData.comoConheceu}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="Fiquei sabendo através do projeto/organização que faço parte">
                          Fiquei sabendo através do projeto/organização que faço
                          parte
                        </option>
                        <option value="Visitaram a minha escola">
                          Visitaram a minha escola
                        </option>
                        <option value="Alguém do PAQ me indicou">
                          Alguém do PAQ me indicou
                        </option>
                        <option value="Vi nas redes sociais do PAQ">
                          Vi nas redes sociais do PAQ
                        </option>
                        <option value="Vi no patrocinado do Instagram">
                          Vi no patrocinado do Instagram
                        </option>
                        <option value="Flyer">Flyer</option>
                        <option value="Outro">Outro</option>
                      </select>
                      {formData.comoConheceu === "Outro" && (
                        <input
                          type="text"
                          name="comoConheceuOutro"
                          value={formData.comoConheceuOutro}
                          onChange={handleChange}
                          placeholder="Conta pra gente como foi!"
                          style={{ marginTop: "0.5rem" }}
                          required
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* --- Botões de Navegação --- */}
                <div className="form-actions">
                  {etapaAtual > 1 && (
                    <button
                      type="button"
                      className="btn-voltar"
                      onClick={etapaAnterior}
                    >
                      Voltar
                    </button>
                  )}

                  {etapaAtual < 4 ? (
                    <button type="submit" className="btn-continuar">
                      Continuar →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-continuar btn-finalizar"
                    >
                      Finalizar Inscrição
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 4. O Popup de Sucesso */}
      {mostrarPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>🎉 Inscrição Realizada!</h2>
            <p>Seus dados foram recebidos com sucesso. Agora é só aguardar! Entraremos em contato pelo seu WhatsApp.</p>
            <button onClick={resetarFormulario} className="btn-out">Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
}
