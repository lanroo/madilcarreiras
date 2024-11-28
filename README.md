
# Plataforma de Carreiras Madil <img src="src/img/foto.png" alt="Madil Logo" width="60" align="center">

## Visão Geral
A Plataforma de Carreiras Madil é uma aplicação web moderna e responsiva, projetada para conectar talentos excepcionais com organizações visionárias. Esta plataforma oferece uma variedade de recursos, incluindo coaching de carreira, serviços de recrutamento e consultoria de RH, todos personalizados para atender às necessidades únicas.

## Funcionalidades
- **Suporte multilíngue:** Traduções disponíveis em inglês e português (PT).
- **Barra de navegação dinâmica:** Inclui seções para Início, Sobre Nós, Serviços, Parceiros, Depoimentos e Contato.
- **Componentes personalizáveis:** Componentes totalmente modularizados para escalabilidade e facilidade de manutenção.
- **Design responsivo:** Otimizado para usuários de desktop e dispositivos móveis.
- **Animações:** Transições suaves e animações alimentadas pelo `framer-motion`.
- **Ícones:** Elementos visuais fornecidos pelo `lucide-react`.
- **Layouts estilizados:** Construído com `Tailwind CSS` para designs modernos e responsivos.

## Stack de Tecnologias
- **Framework de Frontend:** React
- **Gerenciamento de Estado:** React Hooks
- **Roteamento:** React Router
- **Estilização:** Tailwind CSS
- **Animações:** framer-motion
- **Ícones:** lucide-react
- **Internacionalização (i18n):** `react-i18next` para suporte multilíngue
- **Ferramenta de Build:** Vite

## Estrutura do Projeto
```
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Barra de navegação com alternador de idioma
│   │   ├── Footer.tsx       # Rodapé com links e informações de contato
│   │   ├── PartnersSlider.tsx  # Slider animado para exibir parceiros
│   ├── pages/
│   │   ├── Home.tsx         # Página inicial
│   │   ├── About.tsx        # Página Sobre Nós
│   │   ├── Services.tsx     # Página de Serviços
│   ├── translations/
│   │   ├── en.json          # Traduções em inglês
│   │   ├── pt.json          # Traduções em português
│   ├── img/
│   │   ├── logo.jpg         # Logotipo da empresa
│   ├── App.tsx              # Arquivo principal da aplicação
│   ├── main.tsx             # Ponto de entrada da aplicação
│   └── index.css            # Estilos globais
├── public/
├── README.md                # Documentação do projeto
```

## Como Executar o Projeto
### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/lanroo/madilcarreiras.git
   cd madilcarreiras
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra a aplicação no navegador:
   ```text
   http://localhost:5173
   ```

### Build para Produção
Para criar um build de produção, execute:
```bash
npm run build
# ou
yarn build
```

## Implantação
Este projeto pode ser implantado em plataformas como Vercel, Netlify ou qualquer provedor de hospedagem estática que suporte aplicações de página única (SPA).

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com suas melhorias.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
