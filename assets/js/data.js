const coursesData = [
    {
        id: 'devops-foundation',
        title: 'Descomplicando o DevOps',
        platform: 'LinuxTips',
        instructor: 'Camila Martins',
        duration: '~8h',
        cost: 'R$639,00',
        match: '9/10',
        summary: 'Integrar desenvolvimento e operações para otimizar processos usando Terraform, Docker, Kubernetes e soluções de CI/CD.',
        ementa: [
            "<strong>Módulo 1 - Docker, Dockerfile e Docker-compose:</strong> Introdução a comandos básicos, criação de imagens Docker, dockerização de aplicações, multistage build, docker-compose, conceitos de APIs e REST.",
            "<strong>Módulo 2 - Infraestrutura como código com Terraform:</strong> Criação de um cluster com Terraform, fundamentos de IaC.",
            "<strong>Módulo 3 - Kubernetes com GKE na GCP:</strong> Introdução ao Kubernetes e GKE, componentes e arquitetura, conceitos de nuvem (Cloud Build, Artifact Registry).",
            "<strong>Módulo 4 - CI/CD e Pipeline com Cloud Build, Cloud Run, GKE, Docker, Github e Terraform:</strong> Entrega e Implementação contínuas, ferramentas GCP, subir aplicação em cluster Kubernetes, IaC e conteinerização.",
            "<strong>Módulo 5 - Monitoramento com Prometheus, Datadog e Grafana:</strong> Monitoramento, extração de métricas (Prometheus), observabilidade (Datadog), visualização (Grafana), dicas finais."
        ],
        opinion: "Os pré-requisitos são conhecimentos nas tecnologias que serão abordadas no curso. Pela ementa aparenta ser mais voltado para o Hands-On. Uma ótima forma de trabalhar com as principais ferramentas da base de DevOps e aprender melhores práticas para o desenvolvimento e criação de novas soluções. É um treinamento curto, não vai aprofundar nas tecnologias então é válido estar na trilha, porém não como primeiro item."
    },
    {
        id: 'redes-ccna',
        title: 'Curso Completo Cisco CCNA R&S 200-125',
        platform: 'Udemy',
        instructor: 'André Iacono',
        duration: '~50h',
        cost: 'R$190,90 (promoção até R$27,90)',
        match: '10/10',
        summary: 'Prepara para a certificação Cisco CCNA 200-125, com foco em aulas práticas, abordando operação de redes IP, segurança, roteamento, comutação e tópicos emergentes.',
        ementa: [
            "<strong>Operação de Redes IP:</strong> Compreensão do propósito e funcionamento de dispositivos de rede como roteadores, switches, bridges e hubs.",
            "<strong>Seleção de Componentes de Rede:</strong> Habilidade para escolher os componentes necessários para atender a especificações de rede.",
            "<strong>Aplicações e Impacto na Rede:</strong> Identificação de aplicações comuns e seu impacto sobre o desempenho da rede.",
            "<strong>Modelos OSI e TCP/IP:</strong> Descrição da finalidade e funcionamento básico dos protocolos nos modelos OSI e TCP/IP.",
            "<strong>Fluxo de Dados:</strong> Previsão do fluxo de dados entre dois hosts através de uma rede.",
            "<strong>Conectividade de Rede:</strong> Identificação da mídia apropriada, cabos, portas e conectores para interligar dispositivos de rede Cisco com outros dispositivos e hosts em uma LAN.",
            "<strong>Configuração Prática:</strong> Prática com laboratórios de configuração de roteadores e switches Cisco."
        ],
        opinion: "O curso CCNA R&S 200-125 oferece uma base robusta sobre redes, essencial para DevOps. Conteúdo aplicável em diversos cenários e fundamental para o início da trilha."
    },
    {
        id: 'linux-admin',
        title: 'Linux Admin',
        platform: 'LinuxTips',
        instructor: 'Jeferson Fernando, Gleydson Mazioli',
        duration: '~40h',
        cost: 'Acesso existente',
        match: '10/10',
        summary: 'Curso abrangente de administração Linux, desde fundamentos até tópicos avançados, preparando para certificações LPIC-1 e LFD301.',
        ementa: [
            "<strong>Módulo 1 - INTRODUÇÃO AO SISTEMA OPERACIONAL LINUX:</strong> Características do Linux, distribuições, software livre.",
            "<strong>Módulo 2 - NOÇÕES DE HARDWARE, SOFTWARE E ARQUIVOS:</strong> Interações, dispositivos, manipulação de arquivos e diretórios.",
            "<strong>Módulo 3 - COMANDOS E EXECUÇÃO NO LINUX:</strong> Prática no terminal, comandos essenciais, gerenciamento de processos e usuários.",
            "<strong>Módulo 4 - ADMINISTRAÇÃO E DESENVOLVIMENTO NO LINUX:</strong> Instalação de distribuições, gerenciamento de pacotes (DEB e RPM), administração de serviços, scripts para automação, introdução a Docker e Containers.",
            "<strong>Módulo 5 - OTIMIZAÇÃO E AGENDAMENTO DE WORKLOADS:</strong> Otimização de alocação de workloads e agendamento eficiente no cluster Kubernetes, Taints, Selectors, Annotations, Labels, Toleration e Affinity, RBAC e Network Policies, Networking Policies no EKS.",
            "<strong>Módulo 6 - ENCERRAMENTO E CONSOLIDAÇÃO DOS CONHECIMENTOS:</strong> Revisão, RBAC no Kubernetes, Helm para empacotamento e distribuição, consolidação de conceitos para ambientes reais."
        ],
        opinion: "Treinamento robusto e completo, essencial para a base de DevOps. Conteúdo prático e alinhado com as necessidades do mercado."
    },
    {
        id: 'linux-engineer',
        title: 'Linux Engineer',
        platform: 'LinuxTips',
        instructor: 'Jeferson Fernando, Gleydson Mazioli',
        duration: '+32H',
        cost: 'R$799,00',
        match: '8/10',
        summary: 'Aprofundamento em Linux, serviços de rede e preparação para LPIC-2. Cobre planejamento, administração, redes, segurança e performance.',
        ementa: [
            "<strong>Módulo 1 - PLANEJAMENTO E ADMINISTRAÇÃO DE SISTEMAS:</strong> Planejamento de capacidade, kernel Linux, inicialização do sistema, sistemas de arquivos, RAID e LVM.",
            "<strong>Módulo 2 - REDE, SEGURANÇA E MANUTENÇÃO DE SISTEMAS:</strong> Configuração e resolução de problemas de rede (VLANs), gerenciamento de backups, VPNs, manutenção e recuperação de sistemas, forense digital.",
            "<strong>Módulo 3 - REDES, PERFORMANCE E SERVIÇOS WEB:</strong> Conceitos de redes, camadas, VLANs e VXLANs, depuração de problemas de rede, gerenciamento de backups, VPNs, ajuste de performance de serviços web e APIs, configuração de tempo e gerenciamento de caches e redes de distribuição de conteúdo.",
            "<strong>Módulo 4 - SERVIÇOS DE SISTEMA E PERFORMANCE:</strong> Gerenciamento de serviços essenciais (DNS, DHCP, web servers, e-mail), gerenciamento de recursos e performance de sistemas, tuning de APIs e análise de desempenho, técnicas para otimizar alta performance de navegação."
        ],
        opinion: "Complemento ao Linux Admin, aprofundando em gerenciamento avançado. Válido como material de aprendizagem continuada ou para introduzir tópicos de redes."
    },
    {
        id: 'windows-server',
        title: 'MCSA Windows Server 2016 - Azure Storage',
        platform: 'Udemy',
        instructor: 'DICARJ & BorapraNuvem!',
        duration: '47,5 horas',
        cost: 'R$206,90 (promoção até R$29,90)',
        match: '2/10',
        summary: 'Prepara para certificação MCSA Windows Server 2016, combinando administração de servidores Windows com gerenciamento de Azure Storage.',
        ementa: [
            "<strong>MCSA Windows Server 2016 (Tópicos Comuns):</strong> Instalação, gerenciamento e monitoramento de servidores Windows Server 2016, armazenamento local, storage spaces e deduplication, redes (DNS, DHCP, VPN, DirectAccess), Active Directory Domain Services (AD DS), gerenciamento de máquinas virtuais com Hyper-V, implementação de alta disponibilidade com Failover Clustering, segurança do servidor.",
            "<strong>Azure Storage (Tópicos Comuns):</strong> Tipos de armazenamento no Azure (Blobs, Files, Queues, Tables, Disks), redundância, segurança, gerenciamento de contas, ferramentas de acesso e gerenciamento de dados."
        ],
        opinion: "Irrelevante para a stack atual da empresa. Válido como diferencial de carreira futuro, mas não prioritário para a trilha atual."
    },
    {
        id: 'virtualizacao',
        title: 'Playlist Virtualização no YouTube',
        platform: 'YouTube - Hardware Redes Brasil',
        instructor: 'Alfredo Junior, Gustavo Guanabara',
        duration: '+5H',
        cost: 'Gratuito',
        match: '5/10',
        summary: 'Conteúdo básico e prático sobre virtualização com VirtualBox e VMware, criação e gerenciamento de máquinas virtuais.',
        ementa: [
            "Como criar uma máquina virtual",
            "Configurando uma máquina virtual",
            "Instalando o Sistema Operacional na Máquina Virtual",
            "Como otimizar uma máquina virtual",
            "Como instalar o Linux na máquina virtual",
            "Como instalar o Windows e Linux no mesmo computador",
            "Como levar sua máquina virtual para outro computador",
            "Criando máquina virtual como o VMWARE",
            "Configuração de rede com o VMWARE",
            "Compartilhamento de redes no VMWARE",
            "Configurando rede no VirtuaBox"
        ],
        opinion: "Importante para ambientes de teste, mas não essencial para as demandas atuais da trilha DevOps. Pode ser conteúdo extra."
    },
    {
        id: 'pfsense',
        title: 'pfSense Firewall',
        platform: 'Udemy',
        instructor: 'FAME Treinamentos',
        duration: '~10h',
        cost: 'R$176,90 (promoção até R$27,90)',
        match: '10/10',
        summary: 'Treinamento abrangente sobre instalação, configuração e gerenciamento do PfSense como solução de firewall, cobrindo segurança, VPNs e serviços de rede.',
        ementa: [
            "<strong>Conhecendo o pfSense</strong>",
            "<strong>Instalando o pfSense</strong>",
            "<strong>Primeiras configurações</strong>",
            "<strong>Serviços iniciais do pfSense</strong>",
            "<strong>Trabalhando com VPN</strong>",
            "<strong>Trabalhando com VIP (Virtual IP)</strong>",
            "<strong>Gateway, Roteamento e Limitadores no pfSense</strong>",
            "<strong>Failover e Load Balance entre WANs</strong>",
            "<strong>Trabalhando com captive portal</strong>",
            "<strong>Ferramentas de diagnóstico do pfSense</strong>",
            "<strong>Squid no pfSense</strong>",
            "<strong>SquidGuard no pfSense</strong>",
            "<strong>Squid com Active Directory</strong>"
        ],
        opinion: "Curso específico e necessário para a trilha e para a estrutura da empresa, pois é uma tecnologia utilizada internamente. Adiciona noções de rede e segurança."
    },
    {
        id: 'git',
        title: 'Git - Curso Completo no YouTube',
        platform: 'YouTube - Curso em Vídeo',
        instructor: 'Gustavo Guanabara',
        duration: '~10h',
        cost: 'Gratuito (certificado pago)',
        match: '10/10',
        summary: 'Aborda de forma simples e direta os conceitos de controle de versão com Git e GitHub, com abordagem hands-on e teórica.',
        ementa: [
            "<strong>O que é o Git</strong>, como ele funciona e por que ele é a base do versionamento de código moderno;",
            "<strong>O que é o GitHub</strong> e como usá-lo como plataforma colaborativa para projetos open source, acadêmicos ou profissionais;",
            "Como <strong>criar, clonar e gerenciar repositórios</strong>, tanto locais quanto remotos;",
            "Como <strong>acompanhar o histórico das alterações</strong> feitas no código, entender <strong>commits</strong>, e voltar versões sempre que necessário;",
            "Como utilizar <strong>Issues, pull requests</strong> e <strong>escrever documentação em Markdown</strong>;",
            "A importância dos <strong>branches</strong> para desenvolvimento simultâneo e colaborativo, sem bagunçar o código principal;",
            "E ainda: como <strong>publicar sites gratuitamente com GitHub Pages</strong>, dando vida aos seus projetos web de forma rápida e eficaz."
        ],
        opinion: "Curso necessário e alinhado com as demandas da empresa (GitLab). Essencial para a carreira e bem posicionado na trilha."
    },
    {
        id: 'gitlab',
        title: 'GitLab - Curso Completo no YouTube',
        platform: 'YouTube - Wikki Brasil',
        instructor: 'Thalis Otávio',
        duration: '~8h',
        cost: 'Gratuito',
        match: '10/10',
        summary: 'Ensina conceitos de controle de versão e expande para o uso de GitLab, com foco prático.',
        ementa: [
            "<strong>Módulo Básico:</strong> Introdução e preparação de ambiente, reforçando funcionamento do git, inicializando um repositório Git, operações básicas (Commit, análise de histórico, voltar a estado anterior e remover arquivos que foram adicionados).",
            "<strong>Módulo Intermediário:</strong> Usando branchs, trabalhando com clone e push, criando merge a partir de outra branch, utilização de comandos fetch e pull, trabalhando com tags.",
            "<strong>Módulo Avançado:</strong> Navegando e conhecendo GitLab (Criação de repositórios, comandos clone e pull), adição de colaboradores ao projeto, consulta de histórico de commits e branches, Merge pelo GitLab, Issues, milestones e labels no GitLab, Fluxo de trabalho Git e as melhores práticas."
        ],
        opinion: "Curso simples e direto, focado em GitLab, ferramenta utilizada na empresa. Combina perfeitamente com o momento e é necessário para a trilha."
    },
    {
        id: 'docker',
        title: 'Descomplicando o Docker',
        platform: 'LinuxTips',
        instructor: 'Jeferson Fernando',
        duration: '~15h',
        cost: 'R$639,00',
        match: '10/10',
        summary: 'Capacita o aluno a se tornar especialista em Docker, ensinando a empacotar aplicações, gerenciar imagens, segurança, otimização, armazenamento, redes e orquestração.',
        ementa: [
            "<strong>Módulo 1: FUNDAMENTOS DO DOCKER E PRIMEIROS PASSOS:</strong> Introdução ao Docker, conceitos essenciais, instalação e configuração, comandos essenciais, execução do primeiro container.",
            "<strong>Módulo 2: CRIAÇÃO E GERENCIAMENTO DE IMAGENS DOCKER:</strong> Criação de imagens otimizadas, Dockerfiles, melhores práticas, gerenciamento de imagens (listar, remover, compartilhar), Docker Hub e repositórios privados.",
            "<strong>Módulo 3: SEGURANÇA E OTIMIZAÇÃO DE IMAGENS:</strong> Identificação de vulnerabilidades, correção de falhas de segurança, uso do Distroless, melhores práticas de segurança, monitoramento e auditoria.",
            "<strong>Módulo 4: GERENCIAMENTO DE ARMAZENAMENTO E REDES:</strong> Trabalho com volumes e persistência de dados, tipos de armazenamento (bind mounts, volumes, tmpfs), configuração de redes Docker, comunicação entre containers, boas práticas de segurança em redes Docker.",
            "<strong>Módulo 5: ORQUESTRAÇÃO E ESCALABILIDADE:</strong> Uso do Docker Compose, introdução a ferramentas de orquestração (Hashicorp Nomad, Kubernetes, Docker Swarm), criação e gerenciamento de clusters com Docker Swarm."
        ],
        opinion: "Formação completa e específica sobre Docker, com hands-on e integração com ferramentas de orquestração. Tecnologia essencial para DevOps e utilizada na empresa."
    },
    {
        id: 'kubernetes',
        title: 'Descomplicando o Kubernetes 2024',
        platform: 'LinuxTips',
        instructor: 'Jeferson Fernando',
        duration: '~35h',
        cost: 'R$719,00',
        match: '10/10',
        summary: 'Treinamento completo para se tornar especialista em Kubernetes, cobrindo Helm, Kyverno, Kube-Prometheus, Cert-Manager e mais.',
        ementa: [
            "<strong>Módulo 1 - INTRODUÇÃO AO KUBERNETES E CONTAINERS:</strong> Conceitos fundamentais de containers e Kubernetes, Pods e limites de recursos (CPU, memória), Deployments e estratégias de rollout, ReplicaSets, DaemonSets e Probes.",
            "<strong>Módulo 2 - INFRAESTRUTURA E ARMAZENAMENTO NO KUBERNETES:</strong> Criação de clusters Kubernetes multi-nós, gerenciamento de volumes, StatefulSets e Services, Secrets e ConfigMaps.",
            "<strong>Módulo 3 - GERENCIAMENTO DE TRÁFEGO E SEGURANÇA:</strong> Configuração de Ingress, TLS e Cert-manager, Networking Policies e exploração do EKS, gerenciamento de permissões com RBAC.",
            "<strong>Módulo 4 - MONITORAMENTO E OBSERVABILIDADE:</strong> Implementação do Kube-Prometheus no EKS, criação de imagens seguras com Wolfi, Service Monitors, PodMonitors e configuração de alertas, uso do Helm.",
            "<strong>Módulo 5 - OTIMIZAÇÃO E AGENDAMENTO DE WORKLOADS:</strong> Otimização da alocação de workloads, agendamento eficiente, Taints, Selectors, Annotations, Labels, Toleration e Affinity, RBAC e Network Policies, Networking Policies no EKS.",
            "<strong>Módulo 6 - ENCERRAMENTO E CONSOLIDAÇÃO DOS CONHECIMENTOS:</strong> Revisão, RBAC no Kubernetes, Helm para empacotamento e distribuição, consolidação de conceitos para ambientes reais."
        ],
        opinion: "Formação de alto nível em orquestração de containers. Abrange desde a criação de clusters até monitoramento avançado, segurança e otimização. Essencial para a empresa e mercado."
    },
    {
        id: 'helm',
        title: 'Descomplicando o Helm',
        platform: 'LinuxTips',
        instructor: 'Jeferson Fernando',
        duration: '~5h',
        cost: 'R$150,00',
        match: '7/10',
        summary: 'Workshop prático sobre Helm para gerenciamento de aplicações em Kubernetes, cobrindo criação, instalação, atualização de Charts, helpers e repositórios.',
        ementa: [
            "<strong>Introdução ao Helm:</strong> O que é o Helm e o que é um Chart.",
            "<strong>Criação e Instalação de Charts:</strong> Como criar, instalar e atualizar o primeiro Chart.",
            "<strong>Funcionalidades Avançadas do Helm:</strong> Utilização de range, if, default, toYaml e toJson no Helm.",
            "<strong>Helpers no Helm:</strong> Conceitos de Helpers, por que usá-los, criação e exemplos práticos de Helpers avançados.",
            "<strong>Refatoração de Aplicações com Helpers:</strong> Criação do arquivo _helpers.tpl e refatoração de arquivos Deployments.yaml, Services.yaml e ConfigMaps.",
            "<strong>Repositórios de Helm Charts:</strong> Criação de repositórios no Github, inicialização e configuração do GitHub Pages para Charts.",
            "<strong>Utilização de Repositórios de Helm Charts:</strong> Como utilizar o repositório de Helm Charts criado."
        ],
        opinion: "Treinamento focado e prático, ideal para quem já tem base em Kubernetes. Conteúdo direto e valioso para gerenciamento de aplicações."
    },
    {
        id: 'gcp-gke',
        title: 'GCP e GKE (Google Cloud Skills Boost)',
        platform: 'Google Cloud Skills Boost',
        instructor: 'Google',
        duration: '~60h',
        cost: 'Gratuito (labs/certificações pagos)',
        match: '10/10',
        summary: 'Cursos e trilhas de aprendizado focados em Google Cloud Platform e Google Kubernetes Engine, cobrindo infraestrutura, serviços e orquestração de containers.',
        ementa: [
            "<strong>Fundamentos do Google Cloud Platform:</strong> Visão geral da infraestrutura e dos serviços do GCP (Compute Engine, Cloud Storage, Networking), gerenciamento de identidade e acesso (IAM), custo e faturamento na nuvem.",
            "<strong>Google Kubernetes Engine (GKE):</strong> Introdução ao Kubernetes e seus conceitos (Pods, Deployments, Services), criação e gerenciamento de clusters GKE, deployment e escalabilidade de aplicações no GKE, gerenciamento de armazenamento e redes no GKE, monitoramento e logs com Cloud Monitoring and Cloud Logging, segurança no GKE (RBAC, Network Policies), tópicos avançados como node pools, autoscaling, load balancing e ingress.",
            "<strong>Integração com Outros Serviços GCP:</strong> Utilização de Cloud SQL, Cloud Datastore ou outros bancos de dados, integração com Cloud Build, Cloud Source Repositories para CI/CD, uso de Cloud Functions ou Cloud Run para arquiteturas serverless."
        ],
        opinion: "Essencial para a empresa (usuária de GCP) e para o mercado DevOps. Plataforma oferece aprendizado prático e prepara para certificações."
    },
    {
        id: 'terraform',
        title: 'Descomplicando o Terraform',
        platform: 'LinuxTips',
        instructor: 'Rafael Gomex',
        duration: '~20h',
        cost: 'R$719,00',
        match: '10/10',
        summary: 'Curso prático de Terraform, desde conceitos básicos até construção de módulos e integração com outras ferramentas, com foco no "porquê" de cada comando.',
        ementa: [
            "<strong>Módulo 1 - FUNDAMENTOS DO TERRAFORM:</strong> Conceitos básicos do Terraform, sua linguagem de configuração (HCL) e estrutura de arquivos essenciais, comandos essenciais do Terraform e uso de variáveis.",
            "<strong>Módulo 2 - STATE FILE E ARMAZENAMENTO SEGURO:</strong> Conceito de state file e sua importância, melhores práticas para armazenamento e proteção, organização do state file e manipulação via CLI.",
            "<strong>Módulo 3 - MODULARIZAÇÃO E TROUBLESHOOTING:</strong> Criação de módulos para estruturar códigos, exploração de dependências entre recursos, métodos para identificar e corrigir erros comuns.",
            "<strong>Módulo 4 - CONTROLE DE CÓDIGO E TERRAFORM CLOUD:</strong> Uso de condições (if), laço for_each, blocos dinâmicos e interpolação de variáveis, aplicação de restrições de tipo, introdução ao Terraform Cloud.",
            "<strong>Módulo 5 - INTRODUÇÃO AO PACKER E INTEGRAÇÃO COM TERRAFORM:</strong> Conceito do Packer, estrutura de código e comandos, melhores práticas de uso, troubleshooting no Packer.",
            "<strong>Módulo 6 - TRABALHANDO COM PIPELINES E MULTICLOUD:</strong> Criação e gerenciamento de pipelines centralizados, utilização do Terraform em diferentes APIs e fora de contextos de nuvem, gerenciamento de recursos em diferentes provedores de nuvem, conclusão e trabalho final."
        ],
        opinion: "Excelente para aprofundar em Infraestrutura como Código. Ementa bem estruturada, explicando conceitos e melhores práticas. Abordagem prática é um grande benefício."
    },
    {
        id: 'ansible',
        title: 'Curso de Ansible no YouTube',
        platform: 'YouTube - Mário Santana',
        instructor: 'Mário Santana',
        duration: '~12h',
        cost: 'Gratuito',
        match: '9/10',
        summary: 'Curso/workshop gratuito sobre Ansible, explicando a ferramenta, seus usos e com labs práticos.',
        ementa: [
            "<strong>Fundamentos de Ansible (o que é)</strong>",
            "<strong>Preparando ambiente de LAB</strong>",
            "<strong>Execução de primeiros comandos</strong>",
            "<strong>Criação de Playbooks</strong>",
            "<strong>Provisionamento de servidores</strong>",
            "<strong>Projeto</strong>"
        ],
        opinion: "Válido por estar na stack da empresa e ser amplamente utilizado. Ferramenta de automação que facilita escalabilidade. Bem posicionado no roadmap."
    },
    {
        id: 'argocd',
        title: 'Descomplicando GitOps no Kubernetes com Argo CD',
        platform: 'LinuxTips',
        instructor: 'Bernardo Lopes',
        duration: '~20h',
        cost: 'R$599,00',
        match: '10/10',
        summary: 'Focado em capacitar profissionais a utilizar ArgoCD para entrega contínua e confiável de aplicações, explorando rollouts canary e blue-green.',
        ementa: [
            "<strong>Módulo 1 - INTRODUÇÃO AO ARGOCD E PRIMEIROS PASSOS:</strong> Visão geral do ArgoCD, componentes, benefícios, configuração de ambiente de teste e instalação com Helm e Minikube.",
            "<strong>Módulo 2 - GERENCIAMENTO DE APLICAÇÕES E CONFIGURAÇÕES:</strong> Conceitos e funcionalidades de Applications (Repositories, Applications e Projects), integração com Kustomization e Helm, configuração de repositórios Git, tipos de sincronização (automática e manual) e Sync Windows.",
            "<strong>Módulo 3 - APPLICATIONSETS E GIT FILE NO ARGOCD:</strong> Introdução aos ApplicationSets, configuração de Webhooks, utilização de arquivos Git como fonte, implementação de alterações via Pull Requests.",
            "<strong>Módulo 4 - ARGO ROLLOUTS E ESTRATÉGIAS AVANÇADAS DE IMPLANTAÇÃO:</strong> Visão geral do Argo Rollouts, instalação e configuração, conceitos e componentes, implementação de deploys canário e blue-green.",
            "<strong>Módulo 5 - SEGURANÇA E CONTROLE DE ACESSOS NO ARGOCD:</strong> Políticas de segurança, gerenciamento de usuários e grupos, configuração de RBAC, integração com OIDC via DEX.",
            "<strong>Módulo 6 - MONITORAMENTO E LOGS NO ARGOCD:</strong> Configuração de Prometheus e Grafana, alertas e notificações, integração com sistemas de logs."
        ],
        opinion: "100% de acordo com os objetivos da empresa e alinhado com o roadmap, dado o uso de GitOps com ArgoCD para CI/CD. Ferramenta essencial."
    },
    {
        id: 'linux-force-engenheiro',
        title: 'Engenheiro de Redes e Sistemas Linux com Segurança',
        platform: 'Linux Force Security',
        instructor: 'Linux Force',
        duration: '~80h',
        cost: 'R$990,00 (à vista) / R$1.199,00 (parcelado)',
        match: '10/10',
        summary: 'Curso abrangente desde o nível básico do Linux até a configuração dos principais servidores Linux, incluindo Shell Bash, Hardware, Sistemas em Rede, Administração Unix, Shell Script, Princípios de Segurança, Domain Name System, OpenLDAP, Mail Transfer Agent, Serviços Web, RAID, LVM, NFS e Samba Server.',
        ementa: [
            "<strong>Nível básico do Linux</strong> até a configuração dos principais servidores Linux.",
            "<strong>Shell Bash, Hardware e Dispositivos, Sistemas em Rede.</strong>",
            "<strong>Administração de Ambiente e Usuários Unix, Shell Script.</strong>",
            "<strong>Princípios de Segurança, Domain Name System (DNS), OpenLDAP, Mail Transfer Agent (MTA), Serviços Web.</strong>",
            "<strong>RAID, LVM, NFS e Samba Server.</strong>"
        ],
        opinion: "Conteúdo base e de redes abrange todos os tópicos mais importantes para o início do roadmap e as tecnologias estão de acordo com os roadmaps e trilhas propostas. Excelente para o início da trilha."
    },
    {
        id: 'linux-force-devops',
        title: 'Formação DevOps (Linux Force)',
        platform: 'Linux Force Security',
        instructor: 'Linux Force',
        duration: '~50h',
        cost: 'Grátis (na compra do Engenheiro de Redes e Sistemas Linux)',
        match: '7/10',
        summary: 'Cobre Linux, Git, Github, Vagrant, Ansible, Puppet, Grafana, Docker e Kubernetes. Prepara para desenvolvimento e implementação contínuos, automação e colaboração.',
        ementa: [
            "Linux, Git, Github, Vagrant, Ansible, Puppet.",
            "Grafana, Docker e Kubernetes.",
            "Especialização em desenvolvimento e implementação contínuos.",
            "Automação do gerenciamento de configurações.",
            "Colaboração entre equipes."
        ],
        opinion: "Apesar de ter muitas tecnologias e ter a abordagem hands-on, não tem conteúdo de cloud e é focado em outras tecnologias que não são utilizadas na empresa. A nota só está assim porque comprando a formação de linux essa sai de graça, então 'compensa' como material complementar."
    }
];