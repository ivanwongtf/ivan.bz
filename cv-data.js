const CV_DATA = {
  "meta": {
    "name": "Ivan Wong",
    "title": "DevOps Manager & Infrastructure Architect",
    "email": "jobs@ivan.bz",
    "website": "ivan.bz",
    "github": "github.com/ivanwongtf",
    "linkedin": "linkedin.com/in/ivan-wong-tf",
    "location": "Hong Kong"
  },
  "hero": {
    "stats": [
      { "value": "5+", "label": "years_devops" },
      { "value": "HA/DR", "label": "specialisation" },
      { "value": "IEEE", "label": "published_author" },
      { "value": "AWS", "label": "sa_professional" }
    ]
  },
  "experience": [
    {
      "company": "Crypto.com",
      "title": "Infra DevOps Manager",
      "duration": "Jan 2024 — Present",
      "location": "Hong Kong",
      "terminalTitle": "crypto.com/manager",
      "side": "right",
      "bullets": [
        "Lead a 4-person sub-team within a 21-person infrastructure organisation — owning delivery, monthly sprint planning, and engineer growth via 1-on-1s",
        "Hands-on across the stack: manage Kubernetes clusters, handle complex upgrades and deployments, write Terraform/Go/Python automation, and review PRs alongside the team",
        "Drive AI adoption in operations — integrating LLM-powered tooling and agentic workflows to reduce toil and automate repetitive tasks",
        "Designed and built an always-on multi-agent DevOps platform — correlation-based agent routing over 50+ MCP tools on a pre-scanned infrastructure topology, with a Slack relay answering operational requests in seconds (see Work Projects)",
        "Own cross-functional collaboration across Network, Cloud Security, and Exchange teams — covering cloud-native resource patching, canary deployments, and IaC best practices on Teleport and Spacelift",
        "First-authored uDDS (IEEE CSP 2026) — a TEE-based distributed data sealing framework built for the hot-wallet vault, designed and implemented alongside production engineering work"
      ]
    },
    {
      "company": "Crypto.com",
      "title": "Senior Engineer, Infra DevOps",
      "duration": "Jan 2023 — Jan 2024",
      "location": "Hong Kong",
      "terminalTitle": "crypto.com/senior",
      "side": "left",
      "bullets": [
        "Took technical lead across 10+ EKS clusters supporting 30+ production workloads — owning platform stability, upgrades, and capacity planning",
        "Led design and deployment of a geo-distributed Teleport PAM platform across 3 AWS regions on EKS, backed by CockroachDB",
        "Owned the company-wide Spacelift IaC platform — OPA policies, RBAC, and a self-managing GitOps stack where Spacelift is managed via Terraform",
        "Built unified observability (Prometheus, Datadog) and a centralised log pipeline (Fluent-bit, Fluentd) across all production services"
      ]
    },
    {
      "company": "Crypto.com",
      "title": "Engineer, Infra DevOps",
      "duration": "Jan 2022 — Jan 2023",
      "location": "Hong Kong",
      "terminalTitle": "crypto.com/engineer",
      "side": "right",
      "bullets": [
        "Deployed and maintained 10+ containerised applications on EKS across prod and staging environments using Dockerfiles, Helm Charts, and Helmfiles",
        "Owned the Teleport platform end-to-end — consolidating 26 clusters into a unified HA/DR architecture (see Work Projects)",
        "Designed end-to-end CI/CD pipelines incorporating GitHub Actions, ECR, OPA policy gates, and FluxCD",
        "Developed Terraform modules for provisioning and managing AWS infrastructure at scale"
      ]
    },
    {
      "title": "Internships",
      "duration": "2017 — 2018",
      "terminalTitle": "git log --oneline",
      "side": "left",
      "entries": [
        { "company": "Ahsay Systems (2018)", "description": "Developed AhsayOBM backup client for QNAP NAS; now a widely adopted mainstream product" },
        { "company": "Oyalabs (2017)", "description": "Engineered a cross-platform React Native mobile application with an AWS serverless backend" }
      ]
    }
  ],
  "projects": {
    "featured": [
      {
        "slug": "hot-wallet-vault",
        "link": { "url": "hot-wallet-vault.html", "label": "view details" },
        "title": "Hot-Wallet Vault",
        "subtitle": "Distributed Zero-Knowledge Data Sealing",
        "icon": "shield-check",
        "accentColor": "cyan",
        "terminalTitle": "hot-wallet-vault.go",
        "description": "Production-grade distributed vault system for cryptocurrency hot-wallet custody. Implements the uDDS (Universal Distributed Data Sealing) framework — zero-knowledge blind RSA decryption inside Trusted Execution Environments, ensuring the server performs cryptographic operations on blinded ciphertext without ever accessing plaintext.",
        "bullets": [
          "Globally distributed Raft consensus cluster spanning multiple AWS regions",
          "Heterogeneous TEE support: AWS Nitro Enclaves and Intel SGX on Azure",
          "Blind RSA decryption protocol for operator-oblivious zero-knowledge data sealing",
          "AES-256-GCM encrypted Raft transport for secure inter-node communication"
        ],
        "meta": {
          "deploy": "global",
          "consensus": "Raft",
          "tee": "Nitro + SGX",
          "crypto": "blind RSA",
          "status": "production"
        },
        "tags": [
          { "label": "Go", "color": "cyan" },
          { "label": "Raft", "color": "cyan" },
          { "label": "AWS Nitro", "color": "purple" },
          { "label": "Intel SGX", "color": "purple" },
          { "label": "Terraform", "color": "muted" },
          { "label": "K8s / FluxCD", "color": "muted" },
          { "label": "Blind Cryptography", "color": "muted" }
        ]
      },
      {
        "slug": "teleport",
        "link": { "url": "teleport.html", "label": "view details" },
        "title": "Teleport — Geo-Distributed Access Platform",
        "subtitle": "High-Availability PAM Infrastructure at Scale",
        "icon": "server",
        "accentColor": "green",
        "terminalTitle": "teleport-platform.yaml",
        "description": "Enterprise-scale Privileged Access Management platform — consolidated from 26 sprawling Teleport clusters into a single, unified HA/DR architecture spanning 3 AWS regions, backed by CockroachDB. Fully GitOps-managed on Kubernetes with Teleport agents across AWS, Azure, and GCP, and integrated access-request workflows with Slack and Okta.",
        "bullets": [
          "Designed and led the full migration from 26 legacy clusters to a single geo-distributed HA/DR pair (prod + staging) — zero access downtime",
          "Geo-distributed across 3 AWS regions with CockroachDB for fault-tolerant state and automatic failover",
          "Teleport agents deployed across AWS, Azure, and GCP for unified multi-cloud access",
          "Fully GitOps-managed via FluxCD and Spacelift — all changes version-controlled and peer-reviewed",
          "Go-based PAM orchestrator integrating Slack, Okta, and automated access-approval workflows"
        ],
        "meta": {
          "cluster": "unified HA",
          "regions": "3 (AWS)",
          "backend": "CockroachDB",
          "agents": "AWS + Azure + GCP",
          "deploy": "GitOps (Flux)",
          "infra": "Terraform + Spacelift",
          "status": "production"
        },
        "tags": [
          { "label": "Go", "color": "green" },
          { "label": "gRPC", "color": "green" },
          { "label": "EKS", "color": "cyan" },
          { "label": "CockroachDB", "color": "cyan" },
          { "label": "Teleport", "color": "cyan" },
          { "label": "FluxCD", "color": "muted" },
          { "label": "Terraform", "color": "muted" },
          { "label": "Spacelift", "color": "muted" },
          { "label": "Okta", "color": "muted" }
        ]
      },
      {
        "slug": "devops-agent",
        "title": "DevOps Agent — Always-On Agentic Operations",
        "subtitle": "Correlation-Based Multi-Agent Infrastructure Platform",
        "icon": "bot",
        "accentColor": "cyan",
        "terminalTitle": "devops-agent ~ opencode serve",
        "link": { "url": "devops-agent.html", "label": "view case study" },
        "description": "An always-on, multi-agent DevOps platform that resolves operational requests in seconds instead of waiting for someone to be at their desk. A central orchestrator routes work to specialist agents grouped by data correlation — each owning exactly one MCP tool boundary — all reasoning over a pre-scanned typed topology of the entire infrastructure. Echobot, a Slack relay worker, makes the platform accessible from any channel.",
        "bullets": [
          "Orchestrator + specialist agents routed by data correlation across 50+ MCP tools — 58% less tool duplication and 90%+ context retained across handoffs vs role-based multi-agent designs",
          "Pre-scanned typed topology (Account → VPC → Cluster → Workloads) as the agents' shared world model — zero cold-start, consistent snapshots, no live-API rate limiting",
          "Two-tier execution model: read-only plan mode, then an approved operator mode — agents propose, humans stay the approval gate",
          "Echobot Slack relay: mention the bot in any channel and answers stream back into the same thread — ~5s for simple tasks",
          "Team portal (FastAPI + React) with live health dashboards, shared sessions, and a full audit trail of every agent action"
        ],
        "meta": {
          "agents": "orchestrator + specialists",
          "tools": "50+ MCP",
          "topology": "pre-scanned graph",
          "access": "Slack + portal",
          "exec": "plan → operator",
          "status": "production"
        },
        "tags": [
          { "label": "Python", "color": "cyan" },
          { "label": "FastAPI", "color": "cyan" },
          { "label": "React", "color": "cyan" },
          { "label": "MCP", "color": "purple" },
          { "label": "LLM Agents", "color": "purple" },
          { "label": "Slack SDK", "color": "purple" },
          { "label": "Ansible", "color": "muted" },
          { "label": "SQLite", "color": "muted" },
          { "label": "GitOps", "color": "muted" }
        ]
      },
      {
        "slug": "echo-bot",
        "link": { "url": "echo-bot.html", "label": "view details" },
        "title": "Echo Bot — Agentic Operations Assistant",
        "subtitle": "AI Front-line for Infra DevOps Operations",
        "icon": "message-circle",
        "accentColor": "purple",
        "terminalTitle": "echo-bot ~ python main.py",
        "description": "An agentic Slack assistant that acts as the first responder for any operational request coming into the Infra DevOps team. When engineers or stakeholders ask about runbooks, access procedures, or platform status, Echo Bot handles it autonomously — giving the team back time to focus on high-value engineering work instead of repetitive Q&A. It later evolved into Echobot, the Slack relay front-end of the DevOps Agent platform featured above.",
        "bullets": [
          "Acts as the team's AI front-line: intercepts inbound Slack messages and resolves operational queries without human intervention",
          "RBAC knowledge base with topic-scoped runbooks, team-specific context, and a self-serve invitation system for onboarding new requesters",
          "RAG pipeline with sentence-transformer embeddings — retrieves the most relevant operational knowledge before generating a response",
          "LangChain + LLM inference layer produces accurate, style-consistent replies grounded in team knowledge, not hallucinations",
          "Management portal for curating runbooks, reviewing training data, and tracking deflection metrics"
        ],
        "meta": {
          "trigger": "inbound Slack msg",
          "retrieve": "RAG + vector search",
          "context": "RBAC runbooks",
          "generate": "LLM API",
          "output": "autonomous reply",
          "status": "production"
        },
        "tags": [
          { "label": "Python", "color": "purple" },
          { "label": "LangChain", "color": "purple" },
          { "label": "Flask", "color": "cyan" },
          { "label": "MongoDB", "color": "cyan" },
          { "label": "Slack SDK", "color": "cyan" },
          { "label": "Sentence Transformers", "color": "muted" },
          { "label": "RAG", "color": "muted" },
          { "label": "RBAC", "color": "muted" }
        ]
      }
    ],
    "other": [
      {
        "title": "Spacelift — IaC Orchestration Platform",
        "icon": "layers",
        "iconColor": "purple",
        "terminalTitle": "spacelift ~ terraform plan",
        "description": "Owned the company-wide Spacelift platform — OPA security policies, RBAC, and a self-managing GitOps loop where all stacks, policies, and contexts are managed via Terraform. Conducted org-wide workshops on features and IaC governance.",
        "tags": [
          { "label": "Spacelift", "color": "purple" },
          { "label": "Terraform", "color": "muted" },
          { "label": "OPA", "color": "muted" },
          { "label": "GitOps", "color": "muted" }
        ]
      },
      {
        "title": "Security Canary Platform",
        "icon": "radar",
        "iconColor": "purple",
        "terminalTitle": "canary-deploy.tf",
        "description": "Enterprise security monitoring platform deployed across 100+ AWS accounts org-wide — automatically provisions canary resources covering all crown-jewel assets, with zero-touch IAM provisioning via CloudFormation StackSets.",
        "tags": [
          { "label": "Terraform", "color": "muted" },
          { "label": "Spacelift", "color": "muted" },
          { "label": "AWS Orgs", "color": "muted" },
          { "label": "StackSets", "color": "muted" }
        ]
      },
      {
        "title": "Observability Platform",
        "icon": "activity",
        "iconColor": "cyan",
        "terminalTitle": "observability.yaml",
        "description": "Designed and deployed a unified observability platform with monitoring dashboards and automated alerting across multiple production applications using Prometheus and Datadog.",
        "tags": [
          { "label": "Prometheus", "color": "muted" },
          { "label": "Datadog", "color": "muted" }
        ]
      },
      {
        "title": "Log Pipeline Architecture",
        "icon": "scroll-text",
        "iconColor": "cyan",
        "terminalTitle": "logging.yaml",
        "description": "Designed and deployed a critical log ingestion pipeline using Fluent-bit and Fluentd, ensuring reliable, high-throughput log collection and centralised forwarding at scale.",
        "tags": [
          { "label": "Fluent-bit", "color": "muted" },
          { "label": "Fluentd", "color": "muted" },
          { "label": "EKS", "color": "muted" }
        ]
      }
    ]
  },
  "personal": {
    "name": "Foxly Invest",
    "icon": "trending-up",
    "description": "A full-stack AI-powered investment portfolio platform delivering personalised news summaries, market insights, and portfolio analysis. Launched in 2025 with hundreds of MAU across iOS, Android, and Web — with paying subscribers since January 2026. Built from the ground up as a production-grade microservices system.",
    "url": "https://www.foxlyinvest.com/",
    "details": [
      {
        "title": "System Architecture",
        "icon": "layout-grid",
        "accentColor": "cyan",
        "terminalTitle": "architecture.yaml",
        "bullets": [
          "Microservice architecture with Go and Python backend services",
          "Deployed on a production-grade Kubernetes cluster",
          "Web, Android, and iOS client applications",
          "Real-time market data ingestion and news processing pipelines"
        ]
      },
      {
        "title": "AI & Agent Workflows",
        "icon": "brain",
        "accentColor": "purple",
        "terminalTitle": "ai-agents.py",
        "bullets": [
          "LangChain + LangGraph for LLM orchestration",
          "MCP (Model Context Protocol) for agent tooling",
          "RAG pipeline with vector DB for knowledge retrieval",
          "Claude & OpenAI APIs for multi-model inference",
          "AI-powered news summaries and portfolio insights"
        ]
      }
    ],
    "tags": [
      { "label": "Go", "color": "cyan" },
      { "label": "Python", "color": "cyan" },
      { "label": "Kubernetes", "color": "cyan" },
      { "label": "LangChain", "color": "cyan" },
      { "label": "LangGraph", "color": "cyan" },
      { "label": "MCP", "color": "cyan" },
      { "label": "RAG", "color": "cyan" },
      { "label": "Claude API", "color": "purple" },
      { "label": "OpenAI API", "color": "purple" },
      { "label": "React", "color": "purple" },
      { "label": "Android", "color": "purple" },
      { "label": "iOS", "color": "purple" },
      { "label": "Microservices", "color": "green" },
      { "label": "AI Agents", "color": "green" },
      { "label": "Vector DB", "color": "green" }
    ]
  },
  "skills": [
    {
      "category": "Infrastructure & Orchestration",
      "categoryKey": "infrastructure && orchestration",
      "icon": "container",
      "iconColor": "cyan",
      "items": [
        { "name": "Kubernetes", "devicon": "devicon-kubernetes-plain" },
        { "name": "Docker", "devicon": "devicon-docker-plain" },
        { "name": "Helm", "devicon": "devicon-helm-plain" },
        { "name": "FluxCD", "devicon": "devicon-flux-plain" },
        { "name": "Terraform", "devicon": "devicon-terraform-plain" },
        { "name": "Spacelift", "lucide": "layers" }
      ]
    },
    {
      "category": "Monitoring & Observability",
      "categoryKey": "monitoring && observability",
      "icon": "bar-chart-3",
      "iconColor": "cyan",
      "items": [
        { "name": "Prometheus", "devicon": "devicon-prometheus-plain" },
        { "name": "Datadog", "lucide": "activity" },
        { "name": "Fluentd", "lucide": "arrow-right-left" }
      ]
    },
    {
      "category": "Development",
      "categoryKey": "development",
      "icon": "code-2",
      "iconColor": "green",
      "items": [
        { "name": "Go", "devicon": "devicon-go-plain" },
        { "name": "Python", "devicon": "devicon-python-plain" },
        { "name": "Bash", "devicon": "devicon-bash-plain" },
        { "name": "React", "devicon": "devicon-react-original" },
        { "name": "Next.js", "devicon": "devicon-nextjs-plain" },
        { "name": "Flutter", "devicon": "devicon-flutter-plain" },
        { "name": "GraphQL", "devicon": "devicon-graphql-plain" },
        { "name": "gRPC", "lucide": "arrow-left-right" }
      ]
    },
    {
      "category": "AI & Machine Learning",
      "categoryKey": "ai && machine_learning",
      "icon": "brain",
      "iconColor": "purple",
      "items": [
        { "name": "LangChain", "lucide": "link" },
        { "name": "LangGraph", "lucide": "workflow" },
        { "name": "RAG", "lucide": "database" },
        { "name": "Vector DB", "lucide": "scan-search" },
        { "name": "AI Agents", "lucide": "users" },
        { "name": "MCP", "lucide": "wrench" },
        { "name": "Agentic Workflows", "lucide": "code" },
        { "name": "Claude Code SDK", "lucide": "bot" }
      ]
    },
    {
      "category": "Cloud & Data",
      "categoryKey": "cloud && data",
      "icon": "cloud",
      "iconColor": "purple",
      "items": [
        { "name": "AWS (SA Pro)", "devicon": "devicon-amazonwebservices-plain-wordmark" },
        { "name": "EKS", "lucide": "box" },
        { "name": "RDS", "lucide": "database" },
        { "name": "MongoDB", "devicon": "devicon-mongodb-plain" },
        { "name": "Redis", "devicon": "devicon-redis-plain" }
      ]
    },
    {
      "category": "Practices",
      "categoryKey": "practices",
      "icon": "repeat",
      "iconColor": "green",
      "items": [
        { "name": "CI/CD" },
        { "name": "GitOps" },
        { "name": "High Availability" },
        { "name": "Cloud-native" },
        { "name": "Agile / Scrum" }
      ]
    }
  ],
  "publications": [
    {
      "title": "uDDS: Universal Distributed Data Sealing for TEE",
      "authors": "Ivan Tsz Fung Wong, Sam Ng, Jason Lau",
      "conference": "2026 10th International Conference on Cryptography, Security and Privacy (CSP 2026)",
      "publisher": "IEEE",
      "status": "Accepted",
      "abstract": "Trusted Execution Environments (TEEs) provide hardware-rooted confidentiality, yet their native sealing mechanisms remain platform-specific. uDDS is a Universal Distributed Data Sealing framework that provides a single, unified sealing interface across heterogeneous TEEs while preserving data confidentiality even from the sealing service operator.",
      "contributions": [
        { "title": "Blind Decryption", "icon": "eye-off", "color": "cyan", "description": "Operator-oblivious unsealing — clients blind their ciphertext so uDDS decrypts without ever learning the plaintext." },
        { "title": "Raft Consensus", "icon": "shield", "color": "green", "description": "Volatile-only secret replication across TEE memory via Raft — crash fault tolerance and rollback resistance without persistent storage." },
        { "title": "Universal TEE Interface", "icon": "plug", "color": "purple", "description": "A single sealing API across SGX, TrustZone, and Nitro Enclaves — write once, deploy to any platform without modification." },
        { "title": "Production Validated", "icon": "globe", "color": "cyan", "description": "9-node AWS Nitro deployment across 5 regions — 315ms unsealing latency with full attestation and geographic fault tolerance." }
      ],
      "keywords": ["TEE", "Data Sealing", "Confidential Computing", "Distributed Consensus", "Blind Decryption", "AWS Nitro", "Intel SGX"]
    }
  ],
  "education": [
    {
      "degree": "MPhil Computer Science",
      "institution": "The Chinese University of Hong Kong",
      "duration": "Aug 2019 — Jul 2021",
      "icon": "graduation-cap",
      "terminalTitle": "mphil.md",
      "details": [
        "Supervisor: Prof. Patrick P. C. Lee",
        "Thesis: \"Enabling Heterogeneity-Aware Raft Consensus for Distributed Key-Value Storage\""
      ]
    },
    {
      "degree": "BSc Computer Science",
      "institution": "The Chinese University of Hong Kong",
      "duration": "Sep 2015 — Jul 2019",
      "icon": "award",
      "terminalTitle": "bsc.md",
      "details": [
        "First Class Honours — CGPA: 3.55 / 4.0",
        "Minor in Information Engineering",
        "Dean's List & Head List (2016, 2018, 2019)"
      ]
    }
  ],
  "certifications": [
    {
      "name": "AWS Solutions Architect — Professional",
      "icon": "shield-check",
      "validity": "AWS Certified",
      "url": "https://www.credly.com/badges/3e4c61e3-9c14-4c62-897e-f78785e10152"
    }
  ]
};
