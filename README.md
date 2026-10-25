# Progresso Projeto Hub — Painel de Conformidade Web III

> **Painel Interativo de Auditoria e Adequação ao Template Oficial de Desenvolvimento Web III**  
> **FATEC Olímpia** · CST em Desenvolvimento de Software Multiplataforma · 2026/2  
> **Repositório Base Avaliado:** [web3-fatec-olimpia-2026-2/template-projeto](https://github.com/web3-fatec-olimpia-2026-2/template-projeto)  
> **Repositório do Hub Central:** [MrSautchuk/WEB-III---Project](https://github.com/MrSautchuk/WEB-III---Project)

---

## 🌐 Demonstração Online (GitHub Pages)

Acesse o painel interativo diretamente pelo navegador:  
👉 **[https://mrsautchuk.github.io/Progresso-Projeto-Hub/](https://mrsautchuk.github.io/Progresso-Projeto-Hub/)**

---

## 📌 Sobre Este Projeto

Este mini-aplicativo web foi desenvolvido especificamente para gerenciar, auditar e acompanhar o progresso de adequação do projeto **Hub Central de Marketplaces** às exigências estipuladas pelo docente no repositório template da disciplina.

### Funcionalidades:
- **Checklist Interativo com Persistência:** Marque ou desmarque os 28 requisitos mapeados com salvamento automático no `localStorage` do navegador.
- **Barra de Progresso & Métricas em Tempo Real:** Atualização imediata da taxa percentual de conformidade e contadores de itens concluídos e pendentes.
- **Filtros Avançados & Pesquisa:** Filtre por status (Todos, Pendentes, Concluídos), categorias (Governança, CI/CD, Documentação, Dependências, Testes, Configurações, Arquitetura) ou por busca textual.
- **Detalhamento Didático por Requisito:** Cada tarefa conta com:
  - Por que é necessário & O que resolve.
  - Critério de aceite estipulado na disciplina.
  - Arquivos envolvidos no projeto do Hub.
  - Como implementar e próximos passos práticos.
- **Importação / Exportação de Progresso:** Exporte o estado atual da sua equipe em arquivo `.json` ou importe para continuar em outro dispositivo.
- **Tema Claro / Escuro:** Alternância dinâmica de cores para melhor legibilidade.

---

## 🚀 Como Ativar o GitHub Pages neste Repositório

Para ativar a hospedagem gratuita deste painel no GitHub Pages:

1. Acesse este repositório no GitHub: `https://github.com/MrSautchuk/Progresso-Projeto-Hub`.
2. Clique na aba **Settings** (Configurações).
3. No menu lateral esquerdo, clique em **Pages**.
4. Na seção **Build and deployment**:
   - **Source:** Selecione `Deploy from a branch`.
   - **Branch:** Selecione `main` e a pasta `/ (root)`.
5. Clique em **Save**.
6. Em cerca de 1 a 2 minutos, o GitHub disponibilizará a URL pública:  
   `https://mrsautchuk.github.io/Progresso-Projeto-Hub/`.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estrutura acessível com suporte a leitores de tela e metadados.
- **Vanilla CSS3 Moderno:** Variáveis CSS (`var(--...)`), CSS Grid, Flexbox, micro-animações e compatibilidade Dark/Light mode sem dependências externas.
- **JavaScript ES6+ Puro:** Manipulação reativa de DOM, persistência em `localStorage` e eventos nativos.
