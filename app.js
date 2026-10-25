// Os códigos foram gerados com auxilio de I.A.

/**
 * Mapeamento integral dos 28 requisitos do Template Web III
 * Contém os 8 itens já conformes (completos) e os 20 itens pendentes de adequação.
 */
const DEFAULT_ITEMS = [
  // -------------------------------------------------------------
  // CATEGORIA 1: GOVERNANÇA E CONTRATOS (RAIZ)
  // -------------------------------------------------------------
  {
    id: "gov-contributing",
    title: "1. Criar CONTRIBUTING.md (Contrato do Time e Regras de PR)",
    category: "governanca",
    categoryLabel: "🏛️ Governança & Comunidade",
    priority: "critica",
    priorityLabel: "Crítica",
    completed: false,
    summary: "Guia oficial de colaboração: Conventional Commits, fluxo Git, regras de merge e papéis Scrum rotativos.",
    details: {
      necessidade: "O professor e o contrato pedagógico exigem que o repositório possua regras claras de trabalho em equipe. O CONTRIBUTING.md define como o time abre branches (feature/*, fix/*, docs/*), como nomeia commits com Conventional Commits e o checklist obrigatório antes de abrir PR.",
      criterio: "Existência do arquivo CONTRIBUTING.md na raiz contendo: regras de aprovação de PR (mínimo 1 colega), CI verde obrigatório, squash and merge, padrões de código com Ruff, e matriz de papéis Scrum rotativos a cada Sprint (PO, Scrum Master e Dev Team).",
      arquivos: "CONTRIBUTING.md",
      instrucoes: "Copiar o modelo do template-projeto e ajustar os nomes do grupo. Certificar-se de manter as seções de Conventional Commits e rotação de papéis."
    }
  },
  {
    id: "gov-security",
    title: "2. Criar SECURITY.md (Política de Segurança Formal)",
    category: "governanca",
    categoryLabel: "🏛️ Governança & Comunidade",
    priority: "alta",
    priorityLabel: "Alta",
    completed: false,
    summary: "Política formal da disciplina contra vazamento de segredos e canal direto de reporte ao docente.",
    details: {
      necessidade: "Define o protocolo de resposta a incidentes de segurança: nunca commitar arquivos .env, fluxo imediato de revogação caso uma credencial seja exposta por engano (git reset HEAD~1 e force push) e instruções de comunicação privada ao professor sem abrir issue pública.",
      criterio: "Arquivo SECURITY.md commitado na raiz contendo os 4 pilares: Dependabot, Secret Scanning, Gitleaks e auditoria pip-audit.",
      arquivos: "SECURITY.md",
      instrucoes: "Criar o arquivo na raiz alinhado com o template base do repositório da disciplina."
    }
  },
  {
    id: "gov-license",
    title: "3. Adicionar LICENSE (Licença MIT)",
    category: "governanca",
    categoryLabel: "🏛️ Governança & Comunidade",
    priority: "media",
    priorityLabel: "Média",
    completed: false,
    summary: "Licença de software livre MIT preenchida com a FATEC Olímpia e o ano 2026.",
    details: {
      necessidade: "Garante a conformidade de propriedade intelectual e código aberto do projeto acadêmico.",
      criterio: "Arquivo LICENSE na raiz com copyright atribuído ao Grupo e FATEC Olímpia Web III 2026/2.",
      arquivos: "LICENSE",
      instrucoes: "Criar o arquivo com o texto padrão MIT License."
    }
  },

  // -------------------------------------------------------------
  // CATEGORIA 2: CI/CD E SEGURANÇA GITHUB ACTIONS (.github/)
  // -------------------------------------------------------------
  {
    id: "cicd-workflow",
    title: "4. Configurar Pipeline de CI (.github/workflows/ci.yml)",
    category: "cicd",
    categoryLabel: "⚙️ CI/CD & Segurança GitHub",
    priority: "critica",
    priorityLabel: "Crítica",
    completed: false,
    summary: "Workflow automatizado que roda em todo push/PR: Python 3.11, Ruff linter, Pytest, cobertura >= 40% e pip-audit.",
    details: {
      necessidade: "O professor avalia se o repositório possui integração contínua ativa que impeça código quebrado ou sem testes de entrar na main. O CI valida formatação, testes e vulnerabilidades de pacotes.",
      criterio: "Workflow .github/workflows/ci.yml executando e gerando status verde (check) nos PRs da main, com bloqueio estrito se a cobertura for inferior a 40% (coverage report --fail-under=40).",
      arquivos: ".github/workflows/ci.yml",
      instrucoes: "Criar o arquivo de workflow conforme o template, garantindo a execução do pytest com coverage e do pip-audit."
    }
  },
  {
    id: "cicd-gitleaks",
    title: "5. Configurar Scanner de Segredos (.github/workflows/secret-scan.yml)",
    category: "cicd",
    categoryLabel: "⚙️ CI/CD & Segurança GitHub",
    priority: "alta",
    priorityLabel: "Alta",
    completed: false,
    summary: "Action contínua do Gitleaks com checkout de histórico completo (fetch-depth: 0) contra vazamento de credenciais.",
    details: {
      necessidade: "Complementa o scanner nativo do GitHub com regras estritas para detectar chaves de API do Mercado Livre, senhas ou certificados privados commitados no repositório.",
      criterio: "Arquivo secret-scan.yml configurado usando gitleaks/gitleaks-action@v2.",
      arquivos: ".github/workflows/secret-scan.yml",
      instrucoes: "Adicionar o workflow para execução em todo push e pull request."
    }
  },
  {
    id: "cicd-dependabot",
    title: "6. Configurar Dependabot (.github/dependabot.yml)",
    category: "cicd",
    categoryLabel: "⚙️ CI/CD & Segurança GitHub",
    priority: "media",
    priorityLabel: "Média",
    completed: false,
    summary: "Varredura semanal automatizada de vulnerabilidades em dependências Python (pip) e GitHub Actions.",
    details: {
      necessidade: "Garante que pacotes desatualizados ou com falhas de segurança CVE conhecidas recebam PRs automáticos de correção.",
      criterio: "Arquivo .github/dependabot.yml ativo no repositório com agendamento semanal às segundas-feiras no fuso America/Sao_Paulo.",
      arquivos: ".github/dependabot.yml",
      instrucoes: "Criar o arquivo de configuração na pasta .github/."
    }
  },

  // -------------------------------------------------------------
  // CATEGORIA 3: DOCUMENTAÇÃO CANÔNICA E README
  // -------------------------------------------------------------
  {
    id: "doc-readme",
    title: "7. Reestruturar o README.md no Padrão Oficial da FATEC",
    category: "documentacao",
    categoryLabel: "📚 Documentação & README",
    priority: "critica",
    priorityLabel: "Crítica",
    completed: false,
    summary: "Substituir o README de 3 linhas pelo modelo completo com identificação do grupo, equipe Scrum, Taiga, demo e stack.",
    details: {
      necessidade: "O README é a porta de entrada da avaliação docente. Ele precisa conter todas as seções obrigatórias: problema que resolve, público-alvo, organização parceira real, tabela de membros e perfis do GitHub, comandos de setup local, testes com pytest e links de entregas.",
      criterio: "README.md formatado com todas as seções do template preenchidas: Grupo XX, tabela da equipe, tabela das 4 Sprints com links do Taiga, links da demo/Swagger e instruções locais.",
      arquivos: "README.md",
      instrucoes: "Adotar a estrutura do template/main:README.md e preencher os dados reais do Hub Central e da equipe."
    }
  },
  {
    id: "doc-arquitetura",
    title: "8. Criar docs/arquitetura.md (C4 e Visão Geral)",
    category: "documentacao",
    categoryLabel: "📚 Documentação & README",
    priority: "alta",
    priorityLabel: "Alta",
    completed: false,
    summary: "Documento canônico explicando a arquitetura modular, diagrama C4, bounded contexts e topologia do sistema.",
    details: {
      necessidade: "O template referencia explicitamente docs/arquitetura.md. Nele devem constar os componentes de catálogo, sincronização de anúncios, precificação, multi-tenant e webhooks.",
      criterio: "Arquivo docs/arquitetura.md existente, com diagramas (Mermaid) e explicação clara da arquitetura.",
      arquivos: "docs/arquitetura.md",
      instrucoes: "Consolidar a visão dos apps modulares e do fluxo de integração com marketplaces neste documento."
    }
  },
  {
    id: "doc-requisitos",
    title: "9. Criar docs/requisitos.md (User Stories e Regras de Negócio)",
    category: "documentacao",
    categoryLabel: "📚 Documentação & README",
    priority: "alta",
    priorityLabel: "Alta",
    completed: false,
    summary: "Centralizar os Requisitos Funcionais (RF-01 a RF-08) e Regras de Negócio em formato ágil de User Stories.",
    details: {
      necessidade: "O template organiza o escopo do produto em docs/requisitos.md. Precisamos sintetizar as regras de multi-tenant, bloqueio de preço por usuário, trava de limite (guardrail) e broadcast de estoque.",
      criterio: "Arquivo docs/requisitos.md linkado no README contendo as histórias de usuário mapeadas para as Sprints.",
      arquivos: "docs/requisitos.md",
      instrucoes: "Sintetizar as regras de negócio em formato de User Stories ágeis."
    }
  },
  {
    id: "doc-decisoes",
    title: "10. Criar docs/decisoes.md (Índice Consolidado de ADRs)",
    category: "documentacao",
    categoryLabel: "📚 Documentação & README",
    priority: "media",
    priorityLabel: "Média",
    completed: false,
    summary: "Documento-índice que sintetiza e direciona para as 14 ADRs existentes em docs/design/.",
    details: {
      necessidade: "Temos um caderno de design incrível com 14 ADRs em docs/design/. O template pede um arquivo docs/decisoes.md como ponto focal de fácil acesso para o professor avaliar as decisões de projeto.",
      criterio: "Arquivo docs/decisoes.md criado, listando as 14 ADRs com resumo, padrão de projeto GoF envolvido e link para o arquivo correspondente.",
      arquivos: "docs/decisoes.md",
      instrucoes: "Criar uma tabela consolidada com as 14 ADRs mapeando contexto, decisão e consequências."
    }
  },
  {
    id: "doc-manual",
    title: "11. Criar docs/manual-usuario.md (Guia de Operação)",
    category: "documentacao",
    categoryLabel: "📚 Documentação & README",
    priority: "media",
    priorityLabel: "Média",
    completed: false,
    summary: "Guia passo a passo ilustrado para o usuário e avaliador operarem todas as telas e recursos do Hub.",
    details: {
      necessidade: "Permite que qualquer pessoa ou avaliador execute o sistema e compreenda como navegar entre lojas, cadastrar produtos, sincronizar anúncios e usar o simulador promocional.",
      criterio: "docs/manual-usuario.md contendo instruções de login com perfis DEV/ADMIN/USUÁRIO, uso do simulador e telas principais.",
      arquivos: "docs/manual-usuario.md",
      instrucoes: "Elaborar o manual com instruções claras dos fluxos operacionais."
    }
  },

  // -------------------------------------------------------------
  // CATEGORIA 4: DEPENDÊNCIAS CURRICULARES (requirements.txt)
  // -------------------------------------------------------------
  {
    id: "dep-drf",
    title: "12. Adicionar Django REST Framework e SimpleJWT (Sprint 3)",
    category: "dependencias",
    categoryLabel: "📦 Dependências (requirements.txt)",
    priority: "critica",
    priorityLabel: "Crítica",
    completed: false,
    summary: "Incluir djangorestframework, djangorestframework-simplejwt, django-cors-headers e django-filter.",
    details: {
      necessidade: "A Sprint 3 da disciplina exige a exposição de endpoints RESTful com autenticação por tokens Bearer JWT.",
      criterio: "Pacotes declarados no requirements.txt e testados sem conflito com o Django atual.",
      arquivos: "requirements.txt, hub/settings.py",
      instrucoes: "Adicionar djangorestframework>=3.15, djangorestframework-simplejwt>=5.3, django-cors-headers>=4.3 e django-filter>=24.0."
    }
  },
  {
    id: "dep-spectacular",
    title: "13. Adicionar Swagger/OpenAPI via drf-spectacular (Sprint 3)",
    category: "dependencias",
    categoryLabel: "📦 Dependências (requirements.txt)",
    priority: "alta",
    priorityLabel: "Alta",
    completed: false,
    summary: "Documentação interativa de API em /api/docs/ exigida na entrega do projeto.",
    details: {
      necessidade: "O template prevê rota de documentação interativa Swagger na entrega para teste de endpoints REST.",
      criterio: "drf-spectacular>=0.27 adicionado e rota /api/docs/ configurada.",
      arquivos: "requirements.txt, hub/urls.py",
      instrucoes: "Instalar drf-spectacular e registrar em INSTALLED_APPS e urlpatterns."
    }
  },
  {
    id: "dep-nosql",
    title: "14. Adicionar Driver NoSQL pymongo / MongoDB Atlas (Sprint 2)",
    category: "dependencias",
    categoryLabel: "📦 Dependências (requirements.txt)",
    priority: "alta",
    priorityLabel: "Alta",
    completed: false,
    summary: "Driver pymongo para integração com cluster MongoDB Atlas, requisito pedagógico da Sprint 2.",
    details: {
      necessidade: "A disciplina exige o uso pedagógico de banco de dados NoSQL (MongoDB Atlas) para auditoria, histórico de eventos ou telemetria flexível.",
      criterio: "pymongo>=4.6 no requirements.txt e variáveis MONGODB_URI mapeadas no .env.example.",
      arquivos: "requirements.txt, .env.example",
      instrucoes: "Adicionar o pacote e estruturar a conexão com o MongoDB Atlas."
    }
  },
  {
    id: "dep-deploy",
    title: "15. Adicionar Dependências de Deploy (Gunicorn, Whitenoise, Psycopg2)",
    category: "dependencias",
    categoryLabel: "📦 Dependências (requirements.txt)",
    priority: "media",
    priorityLabel: "Média",
    completed: false,
    summary: "Pacotes para execução em plataformas de nuvem (Railway/Render/Fly.io) com PostgreSQL.",
    details: {
      necessidade: "Necessário para a Sprint 4 (deploy em produção). Gunicorn roda como servidor WSGI, Whitenoise serve arquivos estáticos com compressão e Psycopg2 conecta ao PostgreSQL de produção.",
      criterio: "gunicorn>=21.2, whitenoise>=6.6 e psycopg2-binary>=2.9 adicionados ao requirements.txt.",
      arquivos: "requirements.txt",
      instrucoes: "Adicionar os pacotes de produção ao requirements.txt."
    }
  },
  {
    id: "dep-ruff",
    title: "16. Adicionar Linter e Formatador Ruff",
    category: "dependencias",
    categoryLabel: "📦 Dependências (requirements.txt)",
    priority: "media",
    priorityLabel: "Média",
    completed: false,
    summary: "Adicionar ruff>=0.5 para padronização e linting automático de código exigido pelo CI.",
    details: {
      necessidade: "O CI do template executa 'ruff check . --output-format=github' para garantir estilo de código limpo e imports ordenados.",
      criterio: "Ruff adicionado no requirements.txt e rodando sem erros críticos no código.",
      arquivos: "requirements.txt",
      instrucoes: "Instalar ruff e executar ruff check . para validar a base de código."
    }
  },

  // -------------------------------------------------------------
  // CATEGORIA 5: TESTES E COBERTURA COM PYTEST
  // -------------------------------------------------------------
  {
    id: "test-pytest-ini",
    title: "17. Configurar Pytest Runner e pytest.ini",
    category: "testes",
    categoryLabel: "🧪 Testes & Pytest Coverage",
    priority: "critica",
    priorityLabel: "Crítica",
    completed: false,
    summary: "Criar pytest.ini para que o comando pytest execute nossa suíte de 213 testes no Django sem atritos.",
    details: {
      necessidade: "Atualmente rodamos 'python manage.py test'. O CI do GitHub Actions do template roda estritamente 'pytest'. Precisamos do pytest.ini configurando DJANGO_SETTINGS_MODULE=hub.settings e python_files = tests.py test_*.py.",
      criterio: "Comando pytest executando toda a suíte existente de 213 testes com 100% de sucesso.",
      arquivos: "pytest.ini, requirements.txt",
      instrucoes: "Criar o arquivo pytest.ini na raiz e adicionar pytest e pytest-django ao requirements.txt."
    }
  },
  {
    id: "test-coverage",
    title: "18. Configurar Medição e Trava de Cobertura (pytest-cov)",
    category: "testes",
    categoryLabel: "🧪 Testes & Pytest Coverage",
    priority: "alta",
    priorityLabel: "Alta",
    completed: false,
    summary: "Assegurar que o comando pytest --cov=. gere relatórios XML/terminal e supere a trava mínima de 40%.",
    details: {
      necessidade: "O CI falha se a cobertura for menor que 40% (coverage report --fail-under=40). Nossos 213 testes cobrem a maior parte do sistema e vão superar com folga essa meta assim que o coverage estiver integrado.",
      criterio: "Relatórios de cobertura XML e terminal gerados e percentual comprovadamente superior a 40%.",
      arquivos: "requirements.txt, .coveragerc ou pyproject.toml",
      instrucoes: "Instalar pytest-cov e validar o comando pytest --cov=. --cov-report=term-missing."
    }
  },

  // -------------------------------------------------------------
  // CATEGORIA 6: VARIÁVEIS DE AMBIENTE E GITIGNORE
  // -------------------------------------------------------------
  {
    id: "env-example",
    title: "19. Alinhar .env.example com as Chaves Padrão da Disciplina",
    category: "configuracoes",
    categoryLabel: "🔐 Ambiente & Gitignore",
    priority: "alta",
    priorityLabel: "Alta",
    completed: false,
    summary: "Adicionar DATABASE_URL, MONGODB_URI, lifetimes do JWT e SMTP ao .env.example sem perder as chaves do Mercado Livre.",
    details: {
      necessidade: "O template possui um modelo padronizado de variáveis de ambiente. Devemos preservar as configurações existentes do Hub (Fernet, Mercado Livre, Webhooks) e acrescentar as variáveis de infraestrutura exigidas pelo professor.",
      criterio: ".env.example atualizado e autoexplicativo.",
      arquivos: ".env.example",
      instrucoes: "Mesclar as seções do .env.example do template no nosso arquivo .env.example."
    }
  },
  {
    id: "env-gitignore",
    title: "20. Expandir e Blindar o .gitignore",
    category: "configuracoes",
    categoryLabel: "🔐 Ambiente & Gitignore",
    priority: "alta",
    priorityLabel: "Alta",
    completed: false,
    summary: "Adicionar regras para htmlcov/, .coverage, .pytest_cache/, .ruff_cache/, staticfiles/ e arquivos temporários de SO.",
    details: {
      necessidade: "Nosso .gitignore possui apenas 19 linhas. O do template previne acidentes com arquivos de cache de testes, relatórios de coverage, lixo de build do Python e metadados de sistema operacional.",
      criterio: ".gitignore completo e sem resquícios de arquivos temporários nos commits.",
      arquivos: ".gitignore",
      instrucoes: "Substituir o .gitignore pelo modelo ampliado do template."
    }
  },

  // -------------------------------------------------------------
  // ITENS JÁ CONCLUÍDOS / CONFORMES NO HUB (8 ITENS)
  // -------------------------------------------------------------
  {
    id: "conf-modular",
    title: "21. Arquitetura Modular Django e Bounded Contexts",
    category: "arquitetura",
    categoryLabel: "🧱 Arquitetura & Backend",
    priority: "alta",
    priorityLabel: "Alta",
    completed: true,
    summary: "Projeto já desacoplado em apps independentes sob apps/ com domínios bem delimitados.",
    details: {
      necessidade: "Requisito arquitetural de Web III: estruturação limpa do backend sem monólitos emaranhados.",
      criterio: "Módulos separados para accounts, anuncios, catalogo, core, financeiro, marketplaces, pedidos, site e tenancy.",
      arquivos: "apps/*",
      instrucoes: "Já implementado com excelência no projeto."
    }
  },
  {
    id: "conf-rbac",
    title: "22. Isolamento Multi-Tenant e Matriz RBAC (4 Papéis)",
    category: "arquitetura",
    categoryLabel: "🧱 Arquitetura & Backend",
    priority: "critica",
    priorityLabel: "Crítica",
    completed: true,
    summary: "Isolamento estrito por Loja e controle de privilégios com 4 perfis: DEV, ADMIN, SUPERVISOR e USUARIO.",
    details: {
      necessidade: "Garante segurança dos dados entre lojistas e permissões operacionais finas com bloqueio 403 Forbidden.",
      criterio: "Consultas filtradas por loja e perfis com acessos restritos auditados por testes.",
      arquivos: "apps/tenancy/*, apps/accounts/*",
      instrucoes: "Já implementado e validado em auditoria de rotas."
    }
  },
  {
    id: "conf-security",
    title: "23. Segurança Criptográfica Fernet e Webhooks com HMAC",
    category: "arquitetura",
    categoryLabel: "🧱 Arquitetura & Backend",
    priority: "critica",
    priorityLabel: "Crítica",
    completed: true,
    summary: "Tokens OAuth protegidos com criptografia em repouso e webhooks blindados com HMAC e UUIDs.",
    details: {
      necessidade: "Blindagem de credenciais sensíveis e proteção contra ataques de replay, IDOR e BOLA.",
      criterio: "Criptografia simétrica Fernet nos campos de token e validação estrita de assinatura no webhook do Mercado Livre.",
      arquivos: "apps/marketplaces/security_webhook.py, apps/marketplaces/models.py",
      instrucoes: "Já implementado e testado com 401 para requisições não assinadas."
    }
  },
  {
    id: "conf-tests",
    title: "24. Suíte Robusta com 213 Testes Automatizados",
    category: "testes",
    categoryLabel: "🧪 Testes & Pytest Coverage",
    priority: "critica",
    priorityLabel: "Crítica",
    completed: true,
    summary: "213 testes executando com 100% de sucesso cobrindo locks pessimistas, concorrência e integrações.",
    details: {
      necessidade: "Garantia de não-regressão e validação estrita de integridade para a entrega de Web III.",
      criterio: "Todos os 213 testes passando com status OK.",
      arquivos: "apps/*/tests.py, hub/tests.py",
      instrucoes: "Executar 'python manage.py test' comprova a suíte 100% verde."
    }
  },
  {
    id: "conf-adrs",
    title: "25. Caderno de Design com 14 ADRs Detalhadas",
    category: "documentacao",
    categoryLabel: "📚 Documentação & README",
    priority: "alta",
    priorityLabel: "Alta",
    completed: true,
    summary: "14 Architecture Decision Records fundamentadas documentando padrões GoF, segurança e governança.",
    details: {
      necessidade: "Rastreabilidade e defesa arquitetural requerida na disciplina de Técnicas de Programação / Web III.",
      criterio: "ADR-001 a ADR-014 documentadas em docs/design/.",
      arquivos: "docs/design/ADR-*.md",
      instrucoes: "Já consolidado e versionado na main."
    }
  },
  {
    id: "conf-commits",
    title: "26. Histórico Git Padronizado com Conventional Commits",
    category: "governanca",
    categoryLabel: "🏛️ Governança & Comunidade",
    priority: "alta",
    priorityLabel: "Alta",
    completed: true,
    summary: "Todos os commits recentes seguem a convenção feat, fix, chore, docs, test e refactor.",
    details: {
      necessidade: "Rastreabilidade do histórico Git e geração facilitada de changelogs.",
      criterio: "Mensagens de commit padronizadas e commits atômicos.",
      arquivos: "Histórico Git",
      instrucoes: "Manter o padrão que já vem sendo seguido com excelência."
    }
  },
  {
    id: "conf-ai-header",
    title: "27. Política de Atribuição de I.A. 100% em Conformidade",
    category: "governanca",
    categoryLabel: "🏛️ Governança & Comunidade",
    priority: "alta",
    priorityLabel: "Alta",
    completed: true,
    summary: "100% dos 163 arquivos do projeto possuem o cabeçalho obrigatório de atribuição de I.A.",
    details: {
      necessidade: "Cumprimento estrito do contrato pedagógico da disciplina quanto ao uso ético e declarado de IA generativa.",
      criterio: "Validação com scripts/check_ai_header.py retornando zero erros.",
      arquivos: "scripts/check_ai_header.py, todos os arquivos",
      instrucoes: "Auditado e verificado via script automatizado."
    }
  },
  {
    id: "conf-mocks",
    title: "28. Laboratório de Mocks e Simulação de Integrações",
    category: "arquitetura",
    categoryLabel: "🧱 Arquitetura & Backend",
    priority: "media",
    priorityLabel: "Média",
    completed: true,
    summary: "Painel mockar_dados que viabiliza testes completos sem dependência de chaves de produção de terceiros.",
    details: {
      necessidade: "Permite avaliar e demonstrar toda a dinâmica de catálogo, estoque e webhooks em ambiente acadêmico.",
      criterio: "Módulo apps/mockar_dados funcional com feature flag SIMULAR_ROTAS_MOCK=True.",
      arquivos: "apps/mockar_dados/*",
      instrucoes: "Módulo funcional e disponível para o perfil DEV."
    }
  }
];

// Estado da Aplicação
const STORAGE_KEY = "progresso_projeto_hub_state_v1";
const THEME_KEY = "progresso_hub_theme";

let items = [];
let currentCategory = "todas";
let currentStatus = "todos";
let currentSearch = "";

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  loadState();
  initEvents();
  renderApp();
});

// Carregamento de Tema
function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(THEME_KEY, next);
  showToast(`Tema alterado para modo ${next === 'dark' ? 'escuro' : 'claro'}.`);
}

// Carregamento de Estado do LocalStorage
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const stateMap = JSON.parse(saved);
      items = DEFAULT_ITEMS.map(item => ({
        ...item,
        completed: stateMap[item.id] !== undefined ? stateMap[item.id] : item.completed
      }));
      return;
    } catch (e) {
      console.error("Erro ao ler estado do localStorage", e);
    }
  }
  // Clone profundo do default
  items = JSON.parse(JSON.stringify(DEFAULT_ITEMS));
}

// Salva Estado no LocalStorage
function saveState() {
  const stateMap = {};
  items.forEach(i => {
    stateMap[i.id] = i.completed;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stateMap));

  const saveStatus = document.getElementById("saveStatus");
  if (saveStatus) {
    saveStatus.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      Salvo agora
    `;
    setTimeout(() => {
      saveStatus.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Salvo localmente
      `;
    }, 2000);
  }
}

// Toggle Checkbox de um item
function toggleItem(id, event) {
  if (event) event.stopPropagation();
  const item = items.find(i => i.id === id);
  if (!item) return;

  item.completed = !item.completed;
  saveState();
  updateStats();
  renderList();
  showToast(`${item.completed ? '✅ Concluído:' : '⏳ Marcado como pendente:'} ${item.title}`);
}

// Toggle visualização Accordion
function toggleAccordion(id) {
  const el = document.getElementById(`item-${id}`);
  if (el) {
    el.classList.toggle("is-open");
  }
}

// Atualização de Estatísticas e Progresso
function updateStats() {
  const total = items.length;
  const concluidos = items.filter(i => i.completed).length;
  const pendentes = total - concluidos;
  const percent = total > 0 ? Math.round((concluidos / total) * 100) : 0;

  document.getElementById("statTotal").textContent = total;
  document.getElementById("statConcluidos").textContent = concluidos;
  document.getElementById("statPendentes").textContent = pendentes;
  document.getElementById("statPercent").textContent = `${percent}%`;

  document.getElementById("countTodos").textContent = total;
  document.getElementById("countPendentes").textContent = pendentes;
  document.getElementById("countConcluidos").textContent = concluidos;

  document.getElementById("progressText").textContent = `${concluidos} de ${total} tarefas concluídas (${percent}%)`;
  document.getElementById("progressBarFill").style.width = `${percent}%`;
  document.getElementById("progressBarWrapper").setAttribute("aria-valuenow", percent);

  const heroBadge = document.getElementById("heroStatusBadge");
  if (percent === 100) {
    heroBadge.textContent = "100% Conforme com o Template!";
    heroBadge.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
    heroBadge.style.color = "var(--success)";
  } else {
    heroBadge.textContent = "Em Adequação ao Template";
    heroBadge.style.backgroundColor = "var(--primary-light)";
    heroBadge.style.color = "var(--primary)";
  }
}

// Renderização da Lista de Itens Filtrados
function renderList() {
  const container = document.getElementById("checklistContainer");
  const emptyState = document.getElementById("emptyState");

  const filtered = items.filter(item => {
    // Filtro Categoria
    if (currentCategory !== "todas" && item.category !== currentCategory) return false;

    // Filtro Status
    if (currentStatus === "pendentes" && item.completed) return false;
    if (currentStatus === "concluidos" && !item.completed) return false;

    // Filtro Pesquisa
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSummary = item.summary.toLowerCase().includes(q);
      const matchCat = item.categoryLabel.toLowerCase().includes(q);
      const matchDetails = JSON.stringify(item.details).toLowerCase().includes(q);
      if (!matchTitle && !matchSummary && !matchCat && !matchDetails) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  container.innerHTML = filtered.map(item => `
    <article id="item-${item.id}" class="checklist-item ${item.completed ? 'is-completed' : 'is-pending'}">
      <div class="item-header" onclick="toggleAccordion('${item.id}')">
        <label class="custom-checkbox" onclick="event.stopPropagation()">
          <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleItem('${item.id}', event)">
          <div class="checkbox-visual">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </label>

        <div class="item-title-wrap">
          <div class="item-title-row">
            <span class="item-title">${item.title}</span>
            <span class="tag-badge tag-${item.priority}">${item.priorityLabel}</span>
            <span class="tag-cat">${item.categoryLabel}</span>
          </div>
          <div class="item-summary">${item.summary}</div>
        </div>

        <svg class="toggle-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      <div class="item-details">
        <div class="details-grid">
          <div class="detail-block">
            <h4>🎯 Por que é necessário & O que resolve</h4>
            <p>${item.details.necessidade}</p>
          </div>

          <div class="detail-block">
            <h4>📋 Critério de Aceite da Disciplina</h4>
            <p>${item.details.criterio}</p>
          </div>

          <div class="detail-block">
            <h4>📁 Arquivos Envolvidos</h4>
            <div class="code-snippet">${item.details.arquivos}</div>
          </div>

          <div class="detail-block">
            <h4>🚀 Como Implementar / Próximos Passos</h4>
            <p>${item.details.instrucoes}</p>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

// Renderiza aplicação completa
function renderApp() {
  updateStats();
  renderList();
}

// Configuração de Event Listeners
function initEvents() {
  // Alternar Tema
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);

  // Pesquisa
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearch");

  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim();
    if (currentSearch) {
      clearBtn.classList.remove("hidden");
    } else {
      clearBtn.classList.add("hidden");
    }
    renderList();
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    clearBtn.classList.add("hidden");
    renderList();
    searchInput.focus();
  });

  // Filtros de Status (Todos, Pendentes, Concluídos)
  const statusBtns = document.querySelectorAll("#statusFilterGroup .filter-btn");
  statusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      statusBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentStatus = btn.getAttribute("data-filter");
      renderList();
    });
  });

  // Filtros de Categoria (Pills)
  const pills = document.querySelectorAll("#categoryPills .pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.getAttribute("data-cat");
      renderList();
    });
  });

  // Dropdown de Opções em Massa
  const btnBulk = document.getElementById("btnBulkActions");
  const dropdownMenu = document.getElementById("dropdownMenu");

  btnBulk.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    dropdownMenu.classList.add("hidden");
  });

  dropdownMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Marcar Todos
  document.getElementById("btnMarcarTodos").addEventListener("click", () => {
    items.forEach(i => i.completed = true);
    saveState();
    updateStats();
    renderList();
    dropdownMenu.classList.add("hidden");
    showToast("Todos os itens foram marcados como CONCLUÍDOS.");
  });

  // Desmarcar Todos
  document.getElementById("btnDesmarcarTodos").addEventListener("click", () => {
    items.forEach(i => i.completed = false);
    saveState();
    updateStats();
    renderList();
    dropdownMenu.classList.add("hidden");
    showToast("Todos os itens foram desmarcados.");
  });

  // Resetar para o Padrão
  document.getElementById("btnResetarPadrao").addEventListener("click", () => {
    if (confirm("Deseja restaurar o estado inicial da auditoria (8 concluídos e 20 pendentes)?")) {
      items = JSON.parse(JSON.stringify(DEFAULT_ITEMS));
      saveState();
      updateStats();
      renderList();
      dropdownMenu.classList.add("hidden");
      showToast("Estado padrão restaurado.");
    }
  });

  // Exportar JSON
  document.getElementById("btnExportarJson").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const dlAnchorElem = document.createElement("a");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `progresso_projeto_hub_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchorElem.click();
    dropdownMenu.classList.add("hidden");
    showToast("Arquivo JSON de progresso exportado.");
  });

  // Importar JSON
  const importInput = document.getElementById("importFileInput");
  document.getElementById("btnImportarJson").addEventListener("click", () => {
    dropdownMenu.classList.add("hidden");
    importInput.click();
  });

  importInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          const map = {};
          imported.forEach(it => { if (it.id) map[it.id] = it.completed; });
          items.forEach(i => {
            if (map[i.id] !== undefined) i.completed = map[i.id];
          });
          saveState();
          updateStats();
          renderList();
          showToast("Progresso importado com sucesso!");
        }
      } catch (err) {
        alert("Erro ao importar arquivo JSON: formato inválido.");
      }
    };
    reader.readAsText(file);
    importInput.value = "";
  });

  // Reset Filters no Empty State
  document.getElementById("btnResetFilters").addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    clearBtn.classList.add("hidden");
    currentCategory = "todas";
    currentStatus = "todos";

    statusBtns.forEach(b => b.classList.remove("active"));
    statusBtns[0].classList.add("active");

    pills.forEach(p => p.classList.remove("active"));
    pills[0].classList.add("active");

    renderList();
  });
}

// Toast de feedback
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2800);
}
