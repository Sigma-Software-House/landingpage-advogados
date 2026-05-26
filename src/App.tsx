import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    area: 'Direito Civil',
    mensagem: ''
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Formatar a mensagem estruturada e elegante para o WhatsApp
    const textoMensagem = `Olá, Dr. Rodrigo Jose Soares!
Gostaria de agendar uma consulta jurídica através do site.

*Dados de Contato:*
• *Nome:* ${formData.nome}
• *E-mail:* ${formData.email}
• *WhatsApp:* ${formData.telefone}
• *Área de Interesse:* ${formData.area}

*Resumo do Caso / Dúvida:*
${formData.mensagem}`

    // Link da API do WhatsApp com o número oficial do Dr. Rodrigo
    const linkWhatsapp = `https://api.whatsapp.com/send?phone=5511967284008&text=${encodeURIComponent(textoMensagem)}`
    
    setFormSubmitted(true)
    
    // Abre a conversa no WhatsApp em uma nova aba
    window.open(linkWhatsapp, '_blank')
    
    // Limpa o formulário e fecha o estado de envio após 4 segundos
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        area: 'Direito Civil',
        mensagem: ''
      })
    }, 4000)
  }

  return (
    <>
      {/* Dynamic Background Textures */}
      <div className="bg-grid-overlay"></div>
      
      {/* Header / Navbar */}
      <header className="site-header">
        <div className="header-container">
          <a href="#hero" className="logo">
            <span className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="9" y1="22" x2="15" y2="22"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="12" y1="6" x2="12" y2="18"></line>
                <line x1="12" y1="6" x2="4" y2="10"></line>
                <line x1="12" y1="6" x2="20" y2="10"></line>
                <path d="M4 10a4 4 0 0 0 8 0H4z"></path>
                <path d="M12 10a4 4 0 0 0 8 0H12z"></path>
              </svg>
            </span>
            <div className="logo-text">
              <span className="logo-title">Dr. Rodrigo Jose Soares</span>
              <span className="logo-subtitle">Advogado Especialista</span>
            </div>
          </a>
          
          <nav className="main-nav">
            <a href="#atuacao" className="nav-link">Áreas de Atuação</a>
            <a href="#sobre" className="nav-link">Sobre</a>
            <a href="#credenciais" className="nav-link">Credenciais</a>
            <a href="#contato" className="btn-contact">Fale Conosco</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-container">
            <div className="hero-text-content">
              <h1 className="hero-title animate-fade-in">
                Advocacia com <br />
                <span className="text-highlight">Ética, Rigor &amp; Excelência</span>
              </h1>
              <p className="hero-description animate-slide-up">
                Soluções jurídicas personalizadas para proteger seus direitos e interesses. 
                Tradição, rigor intelectual e foco em resultados para garantir sua total tranquilidade.
              </p>
              <div className="hero-actions animate-slide-up">
                <a href="#contato" className="btn-primary">
                  Fale com o Especialista
                  <span className="btn-icon-right">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
                <a href="#atuacao" className="btn-secondary">Conhecer Áreas</a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="image-frame-wrapper">
                <div className="image-frame-bg"></div>
                <img 
                  src="/rodrigo-jose.jpeg" 
                  alt="Doutor Rodrigo Jose Soares" 
                  className="hero-image"
                />
                <div className="image-frame-border"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise Section */}
        <section id="atuacao" className="expertise-section">
          <div className="section-header">
            <span className="section-tagline">Serviços Profissionais</span>
            <h2 className="section-title">Áreas de Atuação</h2>
            <div className="gold-separator"></div>
            <p className="section-subtitle">
              Especialidade e foco técnico rigoroso para oferecer a melhor defesa e assessoria aos nossos clientes.
            </p>
          </div>

          <div className="expertise-grid">
            {/* Card 1 */}
            <div className="expertise-card">
              <div className="card-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="9" y1="22" x2="15" y2="22"></line>
                  <line x1="12" y1="18" x2="12" y2="22"></line>
                  <line x1="12" y1="6" x2="12" y2="18"></line>
                  <line x1="12" y1="6" x2="4" y2="10"></line>
                  <line x1="12" y1="6" x2="20" y2="10"></line>
                  <path d="M4 10a4 4 0 0 0 8 0H4z"></path>
                  <path d="M12 10a4 4 0 0 0 8 0H12z"></path>
                </svg>
              </div>
              <h3 className="card-title">Direito Civil</h3>
              <p className="card-description">
                Contratos, responsabilidade civil, obrigações, direito de propriedade e posse. Atuação altamente especializada no âmbito preventivo e contencioso.
              </p>
              <a href="#contato" className="card-link">Consultar Área →</a>
            </div>

            {/* Card 2 */}
            <div className="expertise-card">
              <div className="card-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="card-title">Direito Trabalhista</h3>
              <p className="card-description">
                Defesa sólida de interesses em litígios laborais, cálculo de provisões, passivos trabalhistas e consultoria preventiva completa para empresas e profissionais.
              </p>
              <a href="#contato" className="card-link">Consultar Área →</a>
            </div>

            {/* Card 3 */}
            <div className="expertise-card">
              <div className="card-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="card-title">Direito de Família</h3>
              <p className="card-description">
                Suporte humanizado em divórcio consensuais e litigiosos, fixação de pensão alimentícia, regulamentação de guarda, inventários, testamentos e planejamentos sucessórios.
              </p>
              <a href="#contato" className="card-link">Consultar Área →</a>
            </div>

            {/* Card 4 */}
            <div className="expertise-card">
              <div className="card-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="9" y1="22" x2="9" y2="16"></line>
                  <line x1="15" y1="22" x2="15" y2="16"></line>
                  <line x1="9" y1="16" x2="15" y2="16"></line>
                  <circle cx="9" cy="6" r="0.5"></circle>
                  <circle cx="15" cy="6" r="0.5"></circle>
                  <circle cx="9" cy="10" r="0.5"></circle>
                  <circle cx="15" cy="10" r="0.5"></circle>
                  <circle cx="12" cy="6" r="0.5"></circle>
                  <circle cx="12" cy="10" r="0.5"></circle>
                </svg>
              </div>
              <h3 className="card-title">Direito Empresarial</h3>
              <p className="card-description">
                Assessoria corporativa na elaboração de contratos comerciais, reestruturações societárias, marcas e patentes, governança familiar e recuperação de ativos financeiros.
              </p>
              <a href="#contato" className="card-link">Consultar Área →</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="about-section">
          <div className="about-container">
            <div className="about-visual">
              <div className="about-image-wrapper">
                <img 
                  src="/signing-document.png" 
                  alt="Assinatura de Documento Oficial" 
                  className="about-image"
                />
              </div>
            </div>
            
            <div className="about-text-content">
              <span className="section-tagline">Conheça o Profissional</span>
              <h2 className="about-title">Sobre Rodrigo Jose Soares</h2>
              <div className="gold-decor-line"></div>
              
              <div className="about-paragraphs">
                <p className="about-p-highlight">
                  Com inscrição definitiva na Ordem dos Advogados do Brasil desde 2007, consolidamos uma atuação sólida fundamentada no rigor acadêmico, transparência ética e atendimento focado na proteção dos direitos de nossos clientes.
                </p>
                <p>
                  Nossa abordagem moderna une a robustez e seriedade da advocacia clássica às ferramentas digitais e dinâmicas do mundo corporativo atual. Cada litígio ou consulta preventiva é examinado com o mais alto nível de detalhe analítico, definindo estratégias jurídicas de alta performance intelectual.
                </p>
              </div>

              <div className="about-highlights-list">
                <div className="highlight-item">
                  <span className="highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="highlight-text">Advogado Especialista com pós-graduação e foco em Direito Civil</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="highlight-text">Vasta experiência em assessoria preventiva e contenciosa civil</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="highlight-text">Membro com participação ativa em fóruns de debate sobre Direito e Sociedade</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OAB Credentials Section (Dynamic Trust Badge) */}
        <section id="credenciais" className="credentials-section">
          <div className="credentials-container">
            <div className="cred-card">
              <div className="cred-card-header">
                <div className="cred-badge">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Inscrição Verificada na OAB SP</span>
                </div>
                <div className="cred-status">
                  <span className="status-dot"></span>
                  <span className="status-text">Ativo - Regular</span>
                </div>
              </div>
              
              <div className="cred-card-body">
                <div className="cred-avatar-container">
                  <img src="/rodrigo-jose.jpeg" alt="Rodrigo Jose Soares OAB" className="cred-avatar" />
                </div>
                
                <div className="cred-info-grid">
                  <div className="cred-info-item">
                    <span className="info-label">Profissional</span>
                    <span className="info-value text-bold">Rodrigo Jose Soares</span>
                  </div>
                  
                  <div className="cred-info-item">
                    <span className="info-label">Inscrição</span>
                    <span className="info-value">OAB SP nº 265568</span>
                  </div>
                  
                  <div className="cred-info-item">
                    <span className="info-label">Tipo de Inscrição</span>
                    <span className="info-value">Definitivo</span>
                  </div>
                  
                  <div className="cred-info-item">
                    <span className="info-label">Data de Admissão</span>
                    <span className="info-value">30/08/2007</span>
                  </div>

                  <div className="cred-info-item">
                    <span className="info-label">Subseção Local</span>
                    <span className="info-value">Santo Amaro</span>
                  </div>

                  <div className="cred-info-item">
                    <span className="info-label">Região Cadastrada</span>
                    <span className="info-value">São Paulo - SP</span>
                  </div>
                </div>
              </div>
              
              <div className="cred-card-footer">
                <p className="cred-disclaimer">
                  * Registro profissional público verificado de acordo com os dados estatutários e do Cadastro Nacional dos Advogados (CNA).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="contact-section">
          <div className="contact-container">
            <div className="contact-info-column">
              <span className="section-tagline">Atendimento Agendado</span>
              <h2 className="contact-title">Inicie uma Consulta Jurídica</h2>
              <div className="gold-decor-line"></div>
              
              <p className="contact-intro">
                Entre em contato hoje mesmo para obter uma análise estratégica prévia do seu caso ou agendar uma reunião em nosso escritório.
              </p>

              <div className="contact-details">
                {/* Detail 1 */}
                <div className="detail-item">
                  <div className="detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Telefone e WhatsApp</span>
                    <a href="tel:+5511967284008" className="detail-link">+55 (11) 96728-4008</a>
                  </div>
                </div>

                {/* Detail 2 */}
                <div className="detail-item">
                  <div className="detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">E-mail Corporativo</span>
                    <a href="mailto:rodrigosoaresadvogado@gmail.com" className="detail-link">rodrigosoaresadvogado@gmail.com</a>
                  </div>
                </div>

                {/* Detail 3
                <div className="detail-item">
                  <div className="detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Localização</span>
                    <span className="detail-text">Av. Adolfo Pinheiro, Santo Amaro — São Paulo / SP</span>
                  </div>
                </div> */}
              </div>

              {/* Secure note */}
              <div className="secure-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="none"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Sigilo e confidencialidade absoluta assegurados pelo Código de Ética e Disciplina da OAB.</span>
              </div>
            </div>

            <div className="contact-form-column">
              <div className="form-card">
                {formSubmitted ? (
                  <div className="form-success-state">
                    <div className="success-icon-container">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3 className="success-title">Redirecionando...</h3>
                    <p className="success-message">
                      Sua solicitação foi formatada! Estamos abrindo o WhatsApp do Dr. Rodrigo para iniciar o seu atendimento de forma prioritária.
                    </p>
                    <div className="progress-bar-success"></div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="legal-contact-form">
                    <div className="form-group">
                      <label htmlFor="nome">Seu Nome Completo *</label>
                      <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        value={formData.nome}
                        onChange={handleInputChange}
                        required 
                        placeholder="Ex: João da Silva"
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">E-mail *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                          placeholder="Ex: joao@email.com"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="telefone">Telefone / WhatsApp *</label>
                        <input 
                          type="tel" 
                          id="telefone" 
                          name="telefone" 
                          value={formData.telefone}
                          onChange={handleInputChange}
                          required 
                          placeholder="Ex: (11) 98765-4321"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="area">Área de Interesse Jurídico *</label>
                      <select 
                        id="area" 
                        name="area" 
                        value={formData.area}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Direito Civil">Direito Civil</option>
                        <option value="Direito Trabalhista">Direito Trabalhista</option>
                        <option value="Direito de Família">Direito de Família</option>
                        <option value="Direito Empresarial">Direito Empresarial</option>
                        <option value="Outros">Outros Temas / Dúvida Geral</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="mensagem">Breve Descrição do Caso *</label>
                      <textarea 
                        id="mensagem" 
                        name="mensagem" 
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        rows={4}
                        required 
                        placeholder="Por favor, explique resumidamente seu problema jurídico..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-submit-form">
                      <span>Enviar Solicitação de Contato</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="9" y1="22" x2="15" y2="22"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="12" y1="6" x2="12" y2="18"></line>
                <line x1="12" y1="6" x2="4" y2="10"></line>
                <line x1="12" y1="6" x2="20" y2="10"></line>
                <path d="M4 10a4 4 0 0 0 8 0H4z"></path>
                <path d="M12 10a4 4 0 0 0 8 0H12z"></path>
              </svg>
              <span>Dr. Rodrigo Jose Soares</span>
            </a>
            <p className="footer-tagline">
              Atuação jurídica pautada pela ética profissional, rigor científico e transparência na defesa dos direitos.
            </p>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-nav">
              <h4>Navegação</h4>
              <a href="#hero">Início</a>
              <a href="#atuacao">Áreas de Atuação</a>
              <a href="#sobre">Sobre Nós</a>
              <a href="#credenciais">Credenciais</a>
            </div>
            
            <div className="footer-nav">
              <h4>Credenciamento</h4>
              <span>OAB SP nº 265568</span>
              <span>Subseção Santo Amaro</span>
              <span>Situação: Ativo - Normal</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2026 Dr. Rodrigo Jose Soares - Advogado. Todos os direitos reservados.
          </p>
          <div className="footer-legal">
            <a href="#credenciais">Código de Ética OAB</a>
            <span className="divider">|</span>
            <a href="#hero">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
