// ============================================================================
// CV Data — Multi-language (English / Simplified Chinese / Traditional Chinese)
// ----------------------------------------------------------------------------
// Translatable fields are objects shaped: { en: "...", "zh-CN": "...", "zh-TW": "..." }
// Plain strings are language-agnostic (e.g. company names, technologies, dates).
// Use the global `t(value, lang)` helper to resolve a value for the active language.
// ============================================================================

const CV_DATA = {
  "meta": {
    "name": "Ivan Wong",
    "title": {
      "en": "DevOps Manager & Infrastructure Architect",
      "zh-CN": "DevOps 经理 & 基础架构架构师",
      "zh-TW": "DevOps 經理 & 基礎架構架構師"
    },
    "email": "jobs@ivan.bz",
    "website": "ivan.bz",
    "github": "github.com/ivanwongtf",
    "linkedin": "www.linkedin.com/in/ivan-wong-tf/",
    "location": {
      "en": "Hong Kong",
      "zh-CN": "香港",
      "zh-TW": "香港"
    }
  },
  "hero": {
    "stats": [
      { "value": "5+",   "label": { "en": "years_devops",        "zh-CN": "DevOps_年资",   "zh-TW": "DevOps_年資"   } },
      { "value": "HA/DR","label": { "en": "specialisation",      "zh-CN": "专长领域",       "zh-TW": "專長領域"       } },
      { "value": "IEEE", "label": { "en": "published_author",    "zh-CN": "已发表_作者",   "zh-TW": "已發表_作者"   } },
      { "value": "AWS",  "label": { "en": "sa_professional",     "zh-CN": "解决方案架构师", "zh-TW": "解決方案架構師" } }
    ]
  },
  "experience": [
    {
      "company": "Crypto.com",
      "title": {
        "en": "Infra DevOps Manager",
        "zh-CN": "基础架构 DevOps 经理",
        "zh-TW": "基礎架構 DevOps 經理"
      },
      "duration": {
        "en": "Jan 2024 — Present",
        "zh-CN": "2024年1月 — 至今",
        "zh-TW": "2024年1月 — 至今"
      },
      "location": { "en": "Hong Kong", "zh-CN": "香港", "zh-TW": "香港" },
      "terminalTitle": "crypto.com/manager",
      "side": "right",
      "bullets": [
        {
          "en": "Lead a 4-person sub-team within a 21-person infrastructure organisation — owning delivery, monthly sprint planning, and engineer growth via 1-on-1s",
          "zh-CN": "在 21 人基础架构组织中带领 4 人小组,负责交付、每月 Sprint 规划,并通过 1 对 1 推动工程师成长",
          "zh-TW": "於 21 人基礎架構組織中帶領 4 人小組,負責交付、每月 Sprint 規劃,並透過 1 對 1 推動工程師成長"
        },
        {
          "en": "Hands-on across the stack: manage Kubernetes clusters, handle complex upgrades and deployments, write Terraform/Go/Python automation, and review PRs alongside the team",
          "zh-CN": "全栈实操:管理 Kubernetes 集群,处理复杂升级与部署,编写 Terraform/Go/Python 自动化,并与团队一同评审 PR",
          "zh-TW": "全棧實作:管理 Kubernetes 叢集,處理複雜升級與部署,撰寫 Terraform/Go/Python 自動化,並與團隊一同審查 PR"
        },
        {
          "en": "Drive AI adoption in operations — integrating LLM-powered tooling and agentic workflows to reduce toil and automate repetitive tasks",
          "zh-CN": "推动运维中的 AI 落地 —— 整合 LLM 工具与 Agentic 工作流,减少琐碎工作并自动化重复任务",
          "zh-TW": "推動維運中的 AI 落地 —— 整合 LLM 工具與 Agentic 工作流,減少瑣碎工作並自動化重複任務"
        },
        {
          "en": "Designed and built an always-on multi-agent DevOps platform — correlation-based agent routing over 50+ MCP tools on a pre-scanned infrastructure topology, with a Slack relay answering operational requests in seconds (see Work Projects)",
          "zh-CN": "设计并构建了一个常驻的多智能体 DevOps 平台 —— 基于关联关系的智能体路由,覆盖 50+ MCP 工具,运行在预扫描的基础架构拓扑之上,并通过 Slack 中继在数秒内响应运维请求(详见工作项目)",
          "zh-TW": "設計並建構了一個常駐的多智能體 DevOps 平台 —— 基於關聯關係的智能體路由,涵蓋 50+ MCP 工具,運行在預掃描的基礎架構拓撲之上,並透過 Slack 中繼在數秒內回應維運請求(詳見工作專案)"
        },
        {
          "en": "Own cross-functional collaboration across Network, Cloud Security, and Exchange teams — covering cloud-native resource patching, canary deployments, and IaC best practices on Teleport and Spacelift",
          "zh-CN": "主导与网络、云安全、交易所团队的跨职能协作 —— 涵盖云原生资源补丁、金丝雀部署,以及 Teleport 与 Spacelift 上的 IaC 最佳实践",
          "zh-TW": "主導與網路、雲端安全、交易所團隊的跨職能協作 —— 涵蓋雲原生資源修補、金絲雀部署,以及 Teleport 與 Spacelift 上的 IaC 最佳實踐"
        },
        {
          "en": "First-authored uDDS (IEEE CSP 2026) — a TEE-based distributed data sealing framework built for the hot-wallet vault, designed and implemented alongside production engineering work",
          "zh-CN": "第一作者 uDDS(IEEE CSP 2026)—— 一套基于 TEE 的分布式数据封装框架,为热钱包金库而设计,与生产工程工作并行开发实现",
          "zh-TW": "第一作者 uDDS(IEEE CSP 2026)—— 一套基於 TEE 的分散式資料封裝框架,為熱錢包金庫而設計,與生產工程工作並行開發實作"
        }
      ]
    },
    {
      "company": "Crypto.com",
      "title": {
        "en": "Senior Engineer, Infra DevOps",
        "zh-CN": "高级工程师,基础架构 DevOps",
        "zh-TW": "資深工程師,基礎架構 DevOps"
      },
      "duration": {
        "en": "Jan 2023 — Jan 2024",
        "zh-CN": "2023年1月 — 2024年1月",
        "zh-TW": "2023年1月 — 2024年1月"
      },
      "location": { "en": "Hong Kong", "zh-CN": "香港", "zh-TW": "香港" },
      "terminalTitle": "crypto.com/senior",
      "side": "left",
      "bullets": [
        {
          "en": "Took technical lead across 10+ EKS clusters supporting 30+ production workloads — owning platform stability, upgrades, and capacity planning",
          "zh-CN": "在 10+ EKS 集群上担任技术负责人,支撑 30+ 生产工作负载 —— 负责平台稳定性、升级与容量规划",
          "zh-TW": "於 10+ EKS 叢集擔任技術負責人,支撐 30+ 生產工作負載 —— 負責平台穩定性、升級與容量規劃"
        },
        {
          "en": "Led design and deployment of a geo-distributed Teleport PAM platform across 3 AWS regions on EKS, backed by CockroachDB",
          "zh-CN": "主导设计并部署跨 3 个 AWS 区域、基于 EKS 与 CockroachDB 的地理分布式 Teleport PAM 平台",
          "zh-TW": "主導設計並部署跨 3 個 AWS 區域、基於 EKS 與 CockroachDB 的地理分散式 Teleport PAM 平台"
        },
        {
          "en": "Owned the company-wide Spacelift IaC platform — OPA policies, RBAC, and a self-managing GitOps stack where Spacelift is managed via Terraform",
          "zh-CN": "负责全公司 Spacelift IaC 平台 —— OPA 策略、RBAC,以及由 Terraform 自管理 Spacelift 的 GitOps 体系",
          "zh-TW": "負責全公司 Spacelift IaC 平台 —— OPA 策略、RBAC,以及由 Terraform 自管理 Spacelift 的 GitOps 體系"
        },
        {
          "en": "Built unified observability (Prometheus, Datadog) and a centralised log pipeline (Fluent-bit, Fluentd) across all production services",
          "zh-CN": "为所有生产服务构建统一可观测性(Prometheus、Datadog)与集中式日志管线(Fluent-bit、Fluentd)",
          "zh-TW": "為所有生產服務建構統一可觀測性(Prometheus、Datadog)與集中式日誌管線(Fluent-bit、Fluentd)"
        }
      ]
    },
    {
      "company": "Crypto.com",
      "title": {
        "en": "Engineer, Infra DevOps",
        "zh-CN": "工程师,基础架构 DevOps",
        "zh-TW": "工程師,基礎架構 DevOps"
      },
      "duration": {
        "en": "Jan 2022 — Jan 2023",
        "zh-CN": "2022年1月 — 2023年1月",
        "zh-TW": "2022年1月 — 2023年1月"
      },
      "location": { "en": "Hong Kong", "zh-CN": "香港", "zh-TW": "香港" },
      "terminalTitle": "crypto.com/engineer",
      "side": "right",
      "bullets": [
        {
          "en": "Deployed and maintained 10+ containerised applications on EKS across prod and staging environments using Dockerfiles, Helm Charts, and Helmfiles",
          "zh-CN": "使用 Dockerfile、Helm Chart 与 Helmfile,在 EKS 的生产与预发环境部署并维护 10+ 容器化应用",
          "zh-TW": "使用 Dockerfile、Helm Chart 與 Helmfile,在 EKS 的生產與預發環境部署並維護 10+ 容器化應用"
        },
        {
          "en": "Owned the Teleport platform end-to-end — consolidating 26 clusters into a unified HA/DR architecture (see Work Projects)",
          "zh-CN": "端到端负责 Teleport 平台 —— 将 26 个集群整合为统一的 HA/DR 架构(详见工作项目)",
          "zh-TW": "端到端負責 Teleport 平台 —— 將 26 個叢集整合為統一的 HA/DR 架構(詳見工作專案)"
        },
        {
          "en": "Designed end-to-end CI/CD pipelines incorporating GitHub Actions, ECR, OPA policy gates, and FluxCD",
          "zh-CN": "设计端到端 CI/CD 管线,集成 GitHub Actions、ECR、OPA 策略闸门与 FluxCD",
          "zh-TW": "設計端到端 CI/CD 管線,整合 GitHub Actions、ECR、OPA 策略閘門與 FluxCD"
        },
        {
          "en": "Developed Terraform modules for provisioning and managing AWS infrastructure at scale",
          "zh-CN": "开发 Terraform 模块,用于规模化地配置与管理 AWS 基础架构",
          "zh-TW": "開發 Terraform 模組,用於規模化地配置與管理 AWS 基礎架構"
        }
      ]
    },
    {
      "title": {
        "en": "Internships",
        "zh-CN": "实习经历",
        "zh-TW": "實習經歷"
      },
      "duration": {
        "en": "2017 — 2018",
        "zh-CN": "2017 — 2018",
        "zh-TW": "2017 — 2018"
      },
      "terminalTitle": "git log --oneline",
      "side": "left",
      "entries": [
        {
          "company": "Ahsay Systems (2018)",
          "description": {
            "en": "Developed AhsayOBM backup client for QNAP NAS; now a widely adopted mainstream product",
            "zh-CN": "为 QNAP NAS 开发 AhsayOBM 备份客户端;如今已成为广泛采用的主流产品",
            "zh-TW": "為 QNAP NAS 開發 AhsayOBM 備份用戶端;如今已成為廣泛採用的主流產品"
          }
        },
        {
          "company": "Oyalabs (2017)",
          "description": {
            "en": "Engineered a cross-platform React Native mobile application with an AWS serverless backend",
            "zh-CN": "打造跨平台 React Native 移动应用,后端采用 AWS 无服务器架构",
            "zh-TW": "打造跨平台 React Native 行動應用,後端採用 AWS 無伺服器架構"
          }
        }
      ]
    }
  ],
  "projects": {
    "featured": [
      {
        "summary": {
          "en": "Zero-knowledge distributed vault — blind RSA decryption inside TEEs over a multi-region Raft cluster.",
          "zh-CN": "零知识分布式金库 —— 在可信执行环境(TEE)内实现盲 RSA 解密,跨多区域 Raft 集群。",
          "zh-TW": "零知識分散式金庫 —— 於可信執行環境(TEE)內實作盲 RSA 解密,跨多區域 Raft 叢集。"
        },
        "slug": "hot-wallet-vault",
        "link": { "url": "hot-wallet-vault.html", "label": "view details" },
        "title": {
          "en": "Hot-Wallet Vault",
          "zh-CN": "热钱包金库",
          "zh-TW": "熱錢包金庫"
        },
        "subtitle": {
          "en": "Distributed Zero-Knowledge Data Sealing",
          "zh-CN": "分布式零知识数据封装",
          "zh-TW": "分散式零知識資料封裝"
        },
        "icon": "shield-check",
        "accentColor": "cyan",
        "terminalTitle": "hot-wallet-vault.go",
        "description": {
          "en": "Production-grade distributed vault system for cryptocurrency hot-wallet custody. Implements the uDDS (Universal Distributed Data Sealing) framework — zero-knowledge blind RSA decryption inside Trusted Execution Environments, ensuring the server performs cryptographic operations on blinded ciphertext without ever accessing plaintext.",
          "zh-CN": "面向加密货币热钱包托管的生产级分布式金库系统。采用 uDDS(通用分布式数据封装)框架 —— 在可信执行环境(TEE)内实现零知识盲 RSA 解密,服务器在被盲化的密文上执行加密运算,从不接触明文。",
          "zh-TW": "面向加密貨幣熱錢包託管的生產級分散式金庫系統。採用 uDDS(通用分散式資料封裝)框架 —— 於可信執行環境(TEE)內實作零知識盲 RSA 解密,伺服器於被盲化的密文上執行加密運算,從不接觸明文。"
        },
        "bullets": [
          {
            "en": "Globally distributed Raft consensus cluster spanning multiple AWS regions",
            "zh-CN": "跨多个 AWS 区域的全球分布式 Raft 共识集群",
            "zh-TW": "跨多個 AWS 區域的全球分散式 Raft 共識叢集"
          },
          {
            "en": "Heterogeneous TEE support: AWS Nitro Enclaves and Intel SGX on Azure",
            "zh-CN": "异构 TEE 支持:AWS Nitro Enclaves 与 Azure 上的 Intel SGX",
            "zh-TW": "異質 TEE 支援:AWS Nitro Enclaves 與 Azure 上的 Intel SGX"
          },
          {
            "en": "Blind RSA decryption protocol for operator-oblivious zero-knowledge data sealing",
            "zh-CN": "盲 RSA 解密协议,实现运维方无感的零知识数据封装",
            "zh-TW": "盲 RSA 解密協定,實現維運方無感的零知識資料封裝"
          },
          {
            "en": "AES-256-GCM encrypted Raft transport for secure inter-node communication",
            "zh-CN": "AES-256-GCM 加密的 Raft 传输层,保障节点间通信安全",
            "zh-TW": "AES-256-GCM 加密的 Raft 傳輸層,保障節點間通訊安全"
          }
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
        "summary": {
          "en": "26 legacy clusters consolidated into one geo-distributed HA/DR PAM platform across 3 AWS regions.",
          "zh-CN": "将 26 个旧集群整合为单一地理分布式 HA/DR PAM 平台,跨 3 个 AWS 区域。",
          "zh-TW": "將 26 個舊叢集整合為單一地理分散式 HA/DR PAM 平台,跨 3 個 AWS 區域。"
        },
        "slug": "teleport",
        "link": { "url": "teleport.html", "label": "view details" },
        "title": {
          "en": "Teleport — Geo-Distributed Access Platform",
          "zh-CN": "Teleport —— 地理分布式访问平台",
          "zh-TW": "Teleport —— 地理分散式存取平台"
        },
        "subtitle": {
          "en": "High-Availability PAM Infrastructure at Scale",
          "zh-CN": "规模化高可用特权访问管理基础架构",
          "zh-TW": "規模化高可用特權存取管理基礎架構"
        },
        "icon": "server",
        "accentColor": "green",
        "terminalTitle": "teleport-platform.yaml",
        "description": {
          "en": "Enterprise-scale Privileged Access Management platform — consolidated from 26 sprawling Teleport clusters into a single, unified HA/DR architecture spanning 3 AWS regions, backed by CockroachDB. Fully GitOps-managed on Kubernetes with Teleport agents across AWS, Azure, and GCP, and integrated access-request workflows with Slack and Okta.",
          "zh-CN": "企业级特权访问管理(PAM)平台 —— 将 26 个零散的 Teleport 集群整合为单一统一的 HA/DR 架构,跨 3 个 AWS 区域,后端采用 CockroachDB。在 Kubernetes 上完全 GitOps 化管理,Teleport agent 部署于 AWS、Azure 与 GCP,并整合 Slack、Okta 的访问审批流程。",
          "zh-TW": "企業級特權存取管理(PAM)平台 —— 將 26 個零散的 Teleport 叢集整合為單一統一的 HA/DR 架構,跨 3 個 AWS 區域,後端採用 CockroachDB。於 Kubernetes 上完全 GitOps 化管理,Teleport agent 部署於 AWS、Azure 與 GCP,並整合 Slack、Okta 的存取審批流程。"
        },
        "bullets": [
          {
            "en": "Designed and led the full migration from 26 legacy clusters to a single geo-distributed HA/DR pair (prod + staging) — zero access downtime",
            "zh-CN": "设计并主导从 26 个旧集群完整迁移至单一地理分布式 HA/DR 对(生产 + 预发)—— 访问零停机",
            "zh-TW": "設計並主導從 26 個舊叢集完整遷移至單一地理分散式 HA/DR 對(生產 + 預發)—— 存取零停機"
          },
          {
            "en": "Geo-distributed across 3 AWS regions with CockroachDB for fault-tolerant state and automatic failover",
            "zh-CN": "跨 3 个 AWS 区域地理分布,采用 CockroachDB 实现容错状态与自动故障切换",
            "zh-TW": "跨 3 個 AWS 區域地理分散,採用 CockroachDB 實現容錯狀態與自動故障切換"
          },
          {
            "en": "Teleport agents deployed across AWS, Azure, and GCP for unified multi-cloud access",
            "zh-CN": "Teleport agent 部署于 AWS、Azure 与 GCP,实现统一的多云访问",
            "zh-TW": "Teleport agent 部署於 AWS、Azure 與 GCP,實現統一的多雲存取"
          },
          {
            "en": "Fully GitOps-managed via FluxCD and Spacelift — all changes version-controlled and peer-reviewed",
            "zh-CN": "完全通过 FluxCD 与 Spacelift GitOps 化管理 —— 所有变更皆版本受控并经过同行评审",
            "zh-TW": "完全透過 FluxCD 與 Spacelift GitOps 化管理 —— 所有變更皆版本受控並經過同行審查"
          },
          {
            "en": "Go-based PAM orchestrator integrating Slack, Okta, and automated access-approval workflows",
            "zh-CN": "基于 Go 的 PAM 编排器,集成 Slack、Okta 与自动化访问审批流程",
            "zh-TW": "基於 Go 的 PAM 編排器,整合 Slack、Okta 與自動化存取審批流程"
          }
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
        "summary": {
          "en": "Always-on multi-agent ops platform — correlation-based routing over 50+ MCP tools on a pre-scanned topology, Slack-native.",
          "zh-CN": "常驻的多智能体运维平台 —— 基于关联关系的路由,覆盖 50+ MCP 工具,运行在预扫描的拓扑之上,原生支持 Slack。",
          "zh-TW": "常駐的多智能體維運平台 —— 基於關聯關係的路由,涵蓋 50+ MCP 工具,運行在預掃描的拓撲之上,原生支援 Slack。"
        },
        "slug": "devops-agent",
        "title": {
          "en": "DevOps Agent — Always-On Agentic Operations",
          "zh-CN": "DevOps 智能体 —— 常驻 Agentic 运维",
          "zh-TW": "DevOps 智能體 —— 常駐 Agentic 維運"
        },
        "subtitle": {
          "en": "Correlation-Based Multi-Agent Infrastructure Platform",
          "zh-CN": "基于关联关系的多智能体基础架构平台",
          "zh-TW": "基於關聯關係的多智能體基礎架構平台"
        },
        "icon": "bot",
        "accentColor": "cyan",
        "terminalTitle": "devops-agent ~ opencode serve",
        "link": { "url": "devops-agent.html", "label": "view details" },
        "description": {
          "en": "An always-on, multi-agent DevOps platform that resolves operational requests in seconds instead of waiting for someone to be at their desk. A central orchestrator routes work to specialist agents grouped by data correlation — each owning exactly one MCP tool boundary — all reasoning over a pre-scanned typed topology of the entire infrastructure. Echobot, a Slack relay worker, makes the platform accessible from any channel.",
          "zh-CN": "一个常驻的多智能体 DevOps 平台,在数秒内解决运维请求,无需等待某人坐在工位上。中央编排器将工作路由到按数据关联分组的专家智能体 —— 每个恰好负责一个 MCP 工具边界 —— 全部推理基于整个基础设施的预扫描类型化拓扑。Echobot 作为 Slack 中继工作器,使平台可从任何频道访问。",
          "zh-TW": "一個常駐的多智能體 DevOps 平台,在數秒內解決維運請求,無需等待某人坐在工位上。中央編排器將工作路由到按數據關聯分組的專家智能體 —— 每個恰好負責一個 MCP 工具邊界 —— 全部推理基於整個基礎設施的預掃描類型化拓撲。Echobot 作為 Slack 中繼工作器,使平台可從任何頻道存取。"
        },
        "bullets": [
          {
            "en": "Orchestrator + specialist agents routed by data correlation across 50+ MCP tools — 58% less tool duplication and 90%+ context retained across handoffs vs role-based multi-agent designs",
            "zh-CN": "编排器 + 专家智能体,按数据关联在 50+ MCP 工具上路由 —— 相比基于角色的多智能体设计,工具重复减少 58%,交接时保留 90%+ 上下文",
            "zh-TW": "編排器 + 專家智能體,按數據關聯在 50+ MCP 工具上路由 —— 相比基於角色的多智能體設計,工具重複減少 58%,交接時保留 90%+ 上下文"
          },
          {
            "en": "Pre-scanned typed topology (Account → VPC → Cluster → Workloads) as the agents' shared world model — zero cold-start, consistent snapshots, no live-API rate limiting",
            "zh-CN": "预扫描的类型化拓扑(Account → VPC → Cluster → Workloads)作为智能体的共享世界模型 —— 零冷启动、一致的快照、无实时 API 速率限制",
            "zh-TW": "預掃描的類型化拓撲(Account → VPC → Cluster → Workloads)作為智能體的共享世界模型 —— 零冷啟動、一致的快照、無即時 API 速率限制"
          },
          {
            "en": "Two-tier execution model: read-only plan mode, then an approved operator mode — agents propose, humans stay the approval gate",
            "zh-CN": "两层执行模型:只读计划模式,然后是已批准的执行模式 —— 智能体提出,人类仍是审批闸门",
            "zh-TW": "兩層執行模型:唯讀計畫模式,然後是已核准的執行模式 —— 智能體提出,人類仍是審批閘門"
          },
          {
            "en": "Echobot Slack relay: mention the bot in any channel and answers stream back into the same thread — ~5s for simple tasks",
            "zh-CN": "Echobot Slack 中继:在任何频道 @ 机器人,答案就会流式返回同一话题串 —— 简单任务约 5 秒",
            "zh-TW": "Echobot Slack 中繼:在任何頻道 @ 機器人,答案就會串流返回同一話題串 —— 簡單任務約 5 秒"
          },
          {
            "en": "Team portal (FastAPI + React) with live health dashboards, shared sessions, and a full audit trail of every agent action",
            "zh-CN": "团队门户(FastAPI + React),含实时健康仪表板、共享会话,以及每个智能体操作的完整审计轨迹",
            "zh-TW": "團隊門戶(FastAPI + React),含即時健康儀表板、共享會話,以及每個智能體操作的完整稽核軌跡"
          }
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
        "summary": {
          "en": "Agentic Slack front-line that resolves operational questions from an RBAC runbook knowledge base via RAG.",
          "zh-CN": "Agentic Slack 第一线,通过 RAG 从 RBAC runbook 知识库中解决运维问题。",
          "zh-TW": "Agentic Slack 第一線,透過 RAG 從 RBAC runbook 知識庫中解決維運問題。"
        },
        "slug": "echo-bot",
        "link": { "url": "echo-bot.html", "label": "view details" },
        "title": {
          "en": "Echo Bot — Agentic Operations Assistant",
          "zh-CN": "Echo Bot —— Agentic 运维助手",
          "zh-TW": "Echo Bot —— Agentic 維運助手"
        },
        "subtitle": {
          "en": "AI Front-line for Infra DevOps Operations",
          "zh-CN": "基础架构 DevOps 运维的 AI 第一线",
          "zh-TW": "基礎架構 DevOps 維運的 AI 第一線"
        },
        "icon": "message-circle",
        "accentColor": "purple",
        "terminalTitle": "echo-bot ~ python main.py",
        "description": {
          "en": "An agentic Slack assistant that acts as the first responder for any operational request coming into the Infra DevOps team. When engineers or stakeholders ask about runbooks, access procedures, or platform status, Echo Bot handles it autonomously — giving the team back time to focus on high-value engineering work instead of repetitive Q&A. It later evolved into Echobot, the Slack relay front-end of the DevOps Agent platform featured above.",
          "zh-CN": "Agentic Slack 助手,作为基础架构 DevOps 团队任何运维请求的第一响应者。当工程师或干系人询问 runbook、访问流程或平台状态时,Echo Bot 自主处理 —— 让团队从重复问答中解放,聚焦高价值工程工作。后来演化为 Echobot,即上文介绍的 DevOps 智能体平台的 Slack 中继前端。",
          "zh-TW": "Agentic Slack 助手,作為基礎架構 DevOps 團隊任何維運請求的第一回應者。當工程師或關係人詢問 runbook、存取流程或平台狀態時,Echo Bot 自主處理 —— 讓團隊從重複問答中釋放,聚焦高價值工程工作。後來演化為 Echobot,即上文介紹的 DevOps 智能體平台的 Slack 中繼前端。"
        },
        "bullets": [
          {
            "en": "Acts as the team's AI front-line: intercepts inbound Slack messages and resolves operational queries without human intervention",
            "zh-CN": "作为团队 AI 第一线:拦截传入的 Slack 消息,无需人工介入即可解决运维咨询",
            "zh-TW": "作為團隊 AI 第一線:攔截傳入的 Slack 訊息,無需人工介入即可解決維運諮詢"
          },
          {
            "en": "RBAC knowledge base with topic-scoped runbooks, team-specific context, and a self-serve invitation system for onboarding new requesters",
            "zh-CN": "RBAC 知识库:按主题划分的 runbook、团队特定上下文,以及面向新请求者的自助邀请入驻系统",
            "zh-TW": "RBAC 知識庫:依主題劃分的 runbook、團隊特定情境,以及面向新請求者的自助邀請進駐系統"
          },
          {
            "en": "RAG pipeline with sentence-transformer embeddings — retrieves the most relevant operational knowledge before generating a response",
            "zh-CN": "采用 sentence-transformer 嵌入的 RAG 管线 —— 在生成回答前检索最相关的运维知识",
            "zh-TW": "採用 sentence-transformer 嵌入的 RAG 管線 —— 在產生回答前檢索最相關的維運知識"
          },
          {
            "en": "LangChain + LLM inference layer produces accurate, style-consistent replies grounded in team knowledge, not hallucinations",
            "zh-CN": "LangChain + LLM 推理层,基于团队知识生成准确且风格一致的回答,杜绝幻觉",
            "zh-TW": "LangChain + LLM 推理層,基於團隊知識產生準確且風格一致的回答,杜絕幻覺"
          },
          {
            "en": "Management portal for curating runbooks, reviewing training data, and tracking deflection metrics",
            "zh-CN": "管理后台用于策展 runbook、审核训练数据并追踪问题转移率指标",
            "zh-TW": "管理後台用於策展 runbook、審核訓練資料並追蹤問題轉移率指標"
          }
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
        "title": {
          "en": "Spacelift — IaC Orchestration Platform",
          "zh-CN": "Spacelift —— IaC 编排平台",
          "zh-TW": "Spacelift —— IaC 編排平台"
        },
        "icon": "layers",
        "iconColor": "purple",
        "terminalTitle": "spacelift ~ terraform plan",
        "description": {
          "en": "Owned the company-wide Spacelift platform — OPA security policies, RBAC, and a self-managing GitOps loop where all stacks, policies, and contexts are managed via Terraform. Conducted org-wide workshops on features and IaC governance.",
          "zh-CN": "全权负责全公司 Spacelift 平台 —— OPA 安全策略、RBAC,以及由 Terraform 管理所有 stack、策略与上下文的自管 GitOps 循环。组织全公司 workshop 推广特性与 IaC 治理。",
          "zh-TW": "全權負責全公司 Spacelift 平台 —— OPA 安全策略、RBAC,以及由 Terraform 管理所有 stack、策略與情境的自管 GitOps 循環。組織全公司 workshop 推廣特性與 IaC 治理。"
        },
        "tags": [
          { "label": "Spacelift", "color": "purple" },
          { "label": "Terraform", "color": "muted" },
          { "label": "OPA", "color": "muted" },
          { "label": "GitOps", "color": "muted" }
        ]
      },
      {
        "title": {
          "en": "Security Canary Platform",
          "zh-CN": "安全 Canary 平台",
          "zh-TW": "安全 Canary 平台"
        },
        "icon": "radar",
        "iconColor": "purple",
        "terminalTitle": "canary-deploy.tf",
        "description": {
          "en": "Enterprise security monitoring platform deployed across 100+ AWS accounts org-wide — automatically provisions canary resources covering all crown-jewel assets, with zero-touch IAM provisioning via CloudFormation StackSets.",
          "zh-CN": "覆盖 100+ AWS 账户的企业级安全监控平台 —— 自动为所有核心资产部署 canary 资源,通过 CloudFormation StackSets 实现零接触 IAM 配置。",
          "zh-TW": "覆蓋 100+ AWS 帳戶的企業級安全監控平台 —— 自動為所有核心資產部署 canary 資源,透過 CloudFormation StackSets 實現零接觸 IAM 配置。"
        },
        "tags": [
          { "label": "Terraform", "color": "muted" },
          { "label": "Spacelift", "color": "muted" },
          { "label": "AWS Orgs", "color": "muted" },
          { "label": "StackSets", "color": "muted" }
        ]
      },
      {
        "title": {
          "en": "Observability Platform",
          "zh-CN": "可观测性平台",
          "zh-TW": "可觀測性平台"
        },
        "icon": "activity",
        "iconColor": "cyan",
        "terminalTitle": "observability.yaml",
        "description": {
          "en": "Designed and deployed a unified observability platform with monitoring dashboards and automated alerting across multiple production applications using Prometheus and Datadog.",
          "zh-CN": "设计并部署统一可观测性平台,基于 Prometheus 与 Datadog,为多个生产应用提供监控大盘与自动化告警。",
          "zh-TW": "設計並部署統一可觀測性平台,基於 Prometheus 與 Datadog,為多個生產應用提供監控儀表板與自動化告警。"
        },
        "tags": [
          { "label": "Prometheus", "color": "muted" },
          { "label": "Datadog", "color": "muted" }
        ]
      },
      {
        "title": {
          "en": "Log Pipeline Architecture",
          "zh-CN": "日志管线架构",
          "zh-TW": "日誌管線架構"
        },
        "icon": "scroll-text",
        "iconColor": "cyan",
        "terminalTitle": "logging.yaml",
        "description": {
          "en": "Designed and deployed a critical log ingestion pipeline using Fluent-bit and Fluentd, ensuring reliable, high-throughput log collection and centralised forwarding at scale.",
          "zh-CN": "使用 Fluent-bit 与 Fluentd 设计并部署关键日志接入管线,确保大规模下可靠、高吞吐的日志采集与集中转发。",
          "zh-TW": "使用 Fluent-bit 與 Fluentd 設計並部署關鍵日誌接入管線,確保大規模下可靠、高吞吐的日誌採集與集中轉發。"
        },
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
    "description": {
      "en": "A full-stack AI-powered investment portfolio platform delivering personalised news summaries, market insights, and portfolio analysis. Launched in 2025 with hundreds of MAU across iOS, Android, and Web — with paying subscribers since January 2026. Built from the ground up as a production-grade microservices system.",
      "zh-CN": "一款全栈式 AI 投资组合平台,提供个性化新闻摘要、市场洞察与组合分析。2025 年上线,iOS、Android 与 Web 端合计数百月活;自 2026 年 1 月起拥有付费订阅用户。从零开始构建,采用生产级微服务架构。",
      "zh-TW": "一款全棧式 AI 投資組合平台,提供個人化新聞摘要、市場洞察與組合分析。2025 年上線,iOS、Android 與 Web 端合計數百月活;自 2026 年 1 月起擁有付費訂閱用戶。從零開始建構,採用生產級微服務架構。"
    },
    "url": "https://www.foxlyinvest.com/",
    "details": [
      {
        "title": {
          "en": "System Architecture",
          "zh-CN": "系统架构",
          "zh-TW": "系統架構"
        },
        "icon": "layout-grid",
        "accentColor": "cyan",
        "terminalTitle": "architecture.yaml",
        "bullets": [
          {
            "en": "Microservice architecture with Go and Python backend services",
            "zh-CN": "微服务架构,后端服务以 Go 与 Python 实现",
            "zh-TW": "微服務架構,後端服務以 Go 與 Python 實作"
          },
          {
            "en": "Deployed on a production-grade Kubernetes cluster",
            "zh-CN": "部署于生产级 Kubernetes 集群",
            "zh-TW": "部署於生產級 Kubernetes 叢集"
          },
          {
            "en": "Web, Android, and iOS client applications",
            "zh-CN": "Web、Android 与 iOS 客户端应用",
            "zh-TW": "Web、Android 與 iOS 用戶端應用"
          },
          {
            "en": "Real-time market data ingestion and news processing pipelines",
            "zh-CN": "实时市场行情接入与新闻处理管线",
            "zh-TW": "即時市場行情接入與新聞處理管線"
          }
        ]
      },
      {
        "title": {
          "en": "AI & Agent Workflows",
          "zh-CN": "AI 与 Agent 工作流",
          "zh-TW": "AI 與 Agent 工作流"
        },
        "icon": "brain",
        "accentColor": "purple",
        "terminalTitle": "ai-agents.py",
        "bullets": [
          {
            "en": "LangChain + LangGraph for LLM orchestration",
            "zh-CN": "LangChain + LangGraph 用于 LLM 编排",
            "zh-TW": "LangChain + LangGraph 用於 LLM 編排"
          },
          {
            "en": "MCP (Model Context Protocol) for agent tooling",
            "zh-CN": "MCP(模型上下文协议)用于 agent 工具调用",
            "zh-TW": "MCP(模型情境協定)用於 agent 工具調用"
          },
          {
            "en": "RAG pipeline with vector DB for knowledge retrieval",
            "zh-CN": "采用向量数据库的 RAG 管线进行知识检索",
            "zh-TW": "採用向量資料庫的 RAG 管線進行知識檢索"
          },
          {
            "en": "Claude & OpenAI APIs for multi-model inference",
            "zh-CN": "整合 Claude 与 OpenAI API,实现多模型推理",
            "zh-TW": "整合 Claude 與 OpenAI API,實現多模型推理"
          },
          {
            "en": "AI-powered news summaries and portfolio insights",
            "zh-CN": "AI 驱动的新闻摘要与投资组合洞察",
            "zh-TW": "AI 驅動的新聞摘要與投資組合洞察"
          }
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
      "category": {
        "en": "Infrastructure & Orchestration",
        "zh-CN": "基础架构与编排",
        "zh-TW": "基礎架構與編排"
      },
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
      "category": {
        "en": "Monitoring & Observability",
        "zh-CN": "监控与可观测性",
        "zh-TW": "監控與可觀測性"
      },
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
      "category": {
        "en": "Development",
        "zh-CN": "开发",
        "zh-TW": "開發"
      },
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
      "category": {
        "en": "AI & Machine Learning",
        "zh-CN": "AI 与机器学习",
        "zh-TW": "AI 與機器學習"
      },
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
      "category": {
        "en": "Cloud & Data",
        "zh-CN": "云与数据",
        "zh-TW": "雲端與資料"
      },
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
      "category": {
        "en": "Practices",
        "zh-CN": "工程实践",
        "zh-TW": "工程實踐"
      },
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
      "status": {
        "en": "Accepted",
        "zh-CN": "已录用",
        "zh-TW": "已錄用"
      },
      "abstract": {
        "en": "Trusted Execution Environments (TEEs) provide hardware-rooted confidentiality, yet their native sealing mechanisms remain platform-specific. uDDS is a Universal Distributed Data Sealing framework that provides a single, unified sealing interface across heterogeneous TEEs while preserving data confidentiality even from the sealing service operator.",
        "zh-CN": "可信执行环境(TEE)提供以硬件为根的机密性,但其原生封装机制仍受平台限制。uDDS 是一套通用分布式数据封装框架,跨异构 TEE 提供单一统一的封装接口,即使面对封装服务运维方亦能保持数据机密性。",
        "zh-TW": "可信執行環境(TEE)提供以硬體為根的機密性,但其原生封裝機制仍受平台限制。uDDS 是一套通用分散式資料封裝框架,跨異質 TEE 提供單一統一的封裝介面,即使面對封裝服務維運方亦能維持資料機密性。"
      },
      "contributions": [
        {
          "title": {
            "en": "Blind Decryption",
            "zh-CN": "盲解密",
            "zh-TW": "盲解密"
          },
          "icon": "eye-off",
          "color": "cyan",
          "description": {
            "en": "Operator-oblivious unsealing — clients blind their ciphertext so uDDS decrypts without ever learning the plaintext.",
            "zh-CN": "运维方无感解封 —— 客户端将密文盲化,uDDS 在不知晓明文的前提下完成解密。",
            "zh-TW": "維運方無感解封 —— 用戶端將密文盲化,uDDS 在不知曉明文的前提下完成解密。"
          }
        },
        {
          "title": {
            "en": "Raft Consensus",
            "zh-CN": "Raft 共识",
            "zh-TW": "Raft 共識"
          },
          "icon": "shield",
          "color": "green",
          "description": {
            "en": "Volatile-only secret replication across TEE memory via Raft — crash fault tolerance and rollback resistance without persistent storage.",
            "zh-CN": "通过 Raft 在 TEE 内存中实现仅易失态的密钥复制 —— 在无持久化存储的情况下提供崩溃容错与抗回滚能力。",
            "zh-TW": "透過 Raft 在 TEE 記憶體中實現僅揮發態的金鑰複製 —— 在無持久化儲存的情況下提供崩潰容錯與抗回滾能力。"
          }
        },
        {
          "title": {
            "en": "Universal TEE Interface",
            "zh-CN": "通用 TEE 接口",
            "zh-TW": "通用 TEE 介面"
          },
          "icon": "plug",
          "color": "purple",
          "description": {
            "en": "A single sealing API across SGX, TrustZone, and Nitro Enclaves — write once, deploy to any platform without modification.",
            "zh-CN": "横跨 SGX、TrustZone 与 Nitro Enclaves 的单一封装 API —— 一次编写,无需修改即可部署至任意平台。",
            "zh-TW": "橫跨 SGX、TrustZone 與 Nitro Enclaves 的單一封裝 API —— 一次撰寫,無需修改即可部署至任意平台。"
          }
        },
        {
          "title": {
            "en": "Production Validated",
            "zh-CN": "生产环境验证",
            "zh-TW": "生產環境驗證"
          },
          "icon": "globe",
          "color": "cyan",
          "description": {
            "en": "9-node AWS Nitro deployment across 5 regions — 315ms unsealing latency with full attestation and geographic fault tolerance.",
            "zh-CN": "9 节点 AWS Nitro 跨 5 个区域部署 —— 解封延迟 315ms,具备完整认证与地理容错。",
            "zh-TW": "9 節點 AWS Nitro 跨 5 個區域部署 —— 解封延遲 315ms,具備完整認證與地理容錯。"
          }
        }
      ],
      "keywords": ["TEE", "Data Sealing", "Confidential Computing", "Distributed Consensus", "Blind Decryption", "AWS Nitro", "Intel SGX"]
    }
  ],
  "education": [
    {
      "degree": {
        "en": "MPhil Computer Science",
        "zh-CN": "计算机科学哲学硕士",
        "zh-TW": "電腦科學哲學碩士"
      },
      "institution": {
        "en": "The Chinese University of Hong Kong",
        "zh-CN": "香港中文大学",
        "zh-TW": "香港中文大學"
      },
      "duration": {
        "en": "Aug 2019 — Jul 2021",
        "zh-CN": "2019年8月 — 2021年7月",
        "zh-TW": "2019年8月 — 2021年7月"
      },
      "icon": "graduation-cap",
      "terminalTitle": "mphil.md",
      "details": [
        {
          "en": "Supervisor: Prof. Patrick P. C. Lee",
          "zh-CN": "导师:李柏晴 教授",
          "zh-TW": "指導教授:李柏晴 教授"
        },
        {
          "en": "Thesis: \"Enabling Heterogeneity-Aware Raft Consensus for Distributed Key-Value Storage\"",
          "zh-CN": "论文:《为分布式键值存储提供异构感知的 Raft 共识》",
          "zh-TW": "論文:《為分散式鍵值儲存提供異質感知的 Raft 共識》"
        }
      ]
    },
    {
      "degree": {
        "en": "BSc Computer Science",
        "zh-CN": "计算机科学理学士",
        "zh-TW": "電腦科學理學士"
      },
      "institution": {
        "en": "The Chinese University of Hong Kong",
        "zh-CN": "香港中文大学",
        "zh-TW": "香港中文大學"
      },
      "duration": {
        "en": "Sep 2015 — Jul 2019",
        "zh-CN": "2015年9月 — 2019年7月",
        "zh-TW": "2015年9月 — 2019年7月"
      },
      "icon": "award",
      "terminalTitle": "bsc.md",
      "details": [
        {
          "en": "First Class Honours — CGPA: 3.55 / 4.0",
          "zh-CN": "一级荣誉 —— 累计 GPA:3.55 / 4.0",
          "zh-TW": "一級榮譽 —— 累積 GPA:3.55 / 4.0"
        },
        {
          "en": "Minor in Information Engineering",
          "zh-CN": "副修信息工程",
          "zh-TW": "副修資訊工程"
        },
        {
          "en": "Dean's List & Head List (2016, 2018, 2019)",
          "zh-CN": "院长嘉许名单与系主任嘉许名单(2016、2018、2019)",
          "zh-TW": "院長嘉許名單與系主任嘉許名單(2016、2018、2019)"
        }
      ]
    }
  ],
  "certifications": [
    {
      "name": "AWS Solutions Architect — Professional",
      "icon": "shield-check",
      "validity": {
        "en": "AWS Certified",
        "zh-CN": "AWS 官方认证",
        "zh-TW": "AWS 官方認證"
      },
      "url": "https://www.credly.com/badges/3e4c61e3-9c14-4c62-897e-f78785e10152"
    }
  ]
};

// ============================================================================
// i18n: static UI strings (used by index.html and cv.html)
// ============================================================================
const I18N = {
  "en": {
    "nav": {
      "experience": "Experience",
      "work": "Work",
      "personal": "Personal",
      "publications": "Publications",
      "skills": "Skills",
      "contact": "Contact",
      "cv": "CV",
      "downloadCv": "Download CV"
    },
    "sections": {
      "experiencePrefix": "",
      "experience": "Experience",
      "workPrefix": "Work",
      "work": "Projects",
      "workSubtitle": "// Highlights from building and scaling infrastructure at Crypto.com",
      "personalPrefix": "Personal",
      "personal": "Projects",
      "personalSubtitle": "// Side projects built from the ground up",
      "publicationsPrefix": "",
      "publications": "Publications",
      "publicationsSubtitle": "// Peer-reviewed research in confidential computing and distributed systems",
      "educationPrefix": "Education &",
      "education": "Certifications",
      "skillsPrefix": "Tech",
      "skills": "Stack",
      "contactPrefix": "Let's",
      "contact": "Connect",
      "contactSubtitle": "// Interested in DevOps, infrastructure, or just want to chat?"
    },
    "publications": {
      "venueSuffix": "Confidential Computing · 2026"
    },
    "footer": "Built with caffeine && kubectl",
    "footerHtml": "Built with <span class=\"text-green\">caffeine</span> && <span class=\"text-cyan\">kubectl</span>",
    "footerCopyright": "© 2025 Ivan Wong.",
    "heroTerminal": {
      "claudeBanner": "Claude Code",
      "qa": [
        {
          "q": "Tell me about Ivan Wong",
          "lines": [
            [["Ivan Wong is a ","m"],["Infra DevOps Manager","c"],[" at ","m"],["Crypto.com","c"],[", based in Hong Kong.","m"]],
            [["He designed ","m"],["DevOps Agent","c"],[" — an always-on multi-agent platform routing over ","m"],["50+ MCP tools","c"],[" with a ","m"],["Slack relay","c"],[".","m"]],
            [["He leads the Infra DevOps team — managing ","m"],["geo-distributed Teleport platform","c"],[" on EKS","m"]],
            [["His automations cut ","m"],["90% of ops overhead","c"],[".","m"]]
          ]
        },
        {
          "q": "What is the hot-wallet vault?",
          "lines": [
            [["A production ","m"],["distributed hot-wallet vault","c"],[" for crypto custody.","m"]],
            [["It implements ","m"],["uDDS","c"],[" — zero-knowledge ","m"],["blind RSA decryption","c"],[" inside TEEs,","m"]],
            [["so the server never sees plaintext. ","m"],["9-node Raft cluster","c"],[" across 5 AWS","m"]],
            [["regions using ","m"],["Nitro Enclaves","p"],[" + ","m"],["Intel SGX","p"],[". Built in ","m"],["Go","g"],[" and ","m"],["Rust","g"],[".","m"]]
          ]
        },
        {
          "q": "What's his tech stack?",
          "lines": [
            [["  Infra:   ","m",0],["Kubernetes · Terraform · Helm · FluxCD · Spacelift","c"]],
            [["  Monitor: ","m",0],["Prometheus · Grafana · Thanos · Loki · Fluentd","c"]],
            [["  Dev:     ","m",0],["Go · Rust · Python · Bash · React · gRPC","g"]],
            [["  AI/ML:   ","m",0],["LangChain · LangGraph · Claude API · RAG · MCP","p"]],
            [["  Cloud:   ","m",0],["AWS (SA Pro) · EKS · Nitro Enclaves · Azure SGX","p"]]
          ]
        },
        {
          "q": "Any other notable projects?",
          "lines": [
            [["Echo Bot","g"],[" — AI Slack assistant that learns your style and","m"]],
            [["replies on your behalf. RBAC knowledge system + ","m"],["RAG","g"],[" + ","m"],["Claude API","g"],[".","m"]],
            [["Foxly Invest","g"],[" — personal AI investment platform.","m"]],
            [["Microservice backend in Go & Python on K8s, with ","m"],["LangChain","g"],[" + ","m"],["MCP","g"]],
            [["for AI-powered portfolio insights. Web, Android & iOS.","m"]]
          ]
        },
        {
          "q": "What about research?",
          "lines": [
            [["\"","p"],["uDDS: Universal Distributed Data Sealing for TEE","p"],["\"","p"]],
            [["Accepted at ","m"],["IEEE CSP 2026","p"],[". The academic foundation behind the","m"]],
            [["hot-wallet vault — ","m"],["blind decryption","c"],[" + ","m"],["Raft consensus","c"],[" in TEEs, validated","m"]],
            [["on 9 AWS Nitro nodes across 5 regions with ","m"],["315ms latency","c"],[".","m"]]
          ]
        }
      ]
    },
    "cvPage": {
      "toolbarLabelDark": "CV Preview — ivan.bz",
      "toolbarLabelFormal": "Formal CV — Ivan Wong",
      "tabFormal": "Formal",
      "tabDark": "Terminal",
      "print": "Print / Save PDF",
      "secExperience": "Experience",
      "secWorkPrefix": "Work",
      "secWork": "Projects",
      "secPersonalPrefix": "Personal",
      "secPersonal": "Projects",
      "secPublications": "Publications",
      "secEducationPrefix": "Education &",
      "secEducationSuffix": "Certifications",
      "secSkillsPrefix": "Tech",
      "secSkills": "Stack",
      "secFormalExperience": "Experience",
      "secFormalWork": "Work Projects",
      "secFormalPersonal": "Personal Projects",
      "secFormalPublications": "Publications",
      "secFormalEducation": "Education & Certifications",
      "secFormalSkills": "Technical Skills"
    },
    "languageNames": { "en": "EN", "zh-CN": "简", "zh-TW": "繁" }
  },
  "zh-CN": {
    "nav": {
      "experience": "工作经验",
      "work": "工作项目",
      "personal": "个人项目",
      "publications": "学术发表",
      "skills": "技能",
      "contact": "联系我",
      "cv": "简历",
      "downloadCv": "下载简历"
    },
    "sections": {
      "experiencePrefix": "",
      "experience": "工作经验",
      "workPrefix": "工作",
      "work": "项目",
      "workSubtitle": "// 在 Crypto.com 构建与扩展基础架构的精选亮点",
      "personalPrefix": "个人",
      "personal": "项目",
      "personalSubtitle": "// 从零开始构建的副业项目",
      "publicationsPrefix": "",
      "publications": "学术发表",
      "publicationsSubtitle": "// 机密计算与分布式系统的同行评审研究",
      "educationPrefix": "教育与",
      "education": "证书",
      "skillsPrefix": "技术",
      "skills": "栈",
      "contactPrefix": "保持",
      "contact": "联系",
      "contactSubtitle": "// 对 DevOps、基础架构感兴趣,或想随便聊聊?"
    },
    "publications": {
      "venueSuffix": "机密计算 · 2026"
    },
    "footer": "由 咖啡因 && kubectl 倾情打造",
    "footerHtml": "由 <span class=\"text-green\">咖啡因</span> && <span class=\"text-cyan\">kubectl</span> 倾情打造",
    "footerCopyright": "© 2025 Ivan Wong.",
    "heroTerminal": {
      "claudeBanner": "Claude Code",
      "qa": [
        {
          "q": "介绍一下 Ivan Wong",
          "lines": [
            [["Ivan Wong 是一位 ","m"],["基础架构 DevOps 经理","c"],[",任职于 ","m"],["Crypto.com","c"],[",常驻香港。","m"]],
            [["他设计了 ","m"],["DevOps 智能体","c"],[" —— 常驻多智能体平台，路由 ","m"],["50+ MCP 工具","c"],["，配备 ","m"],["Slack 中继","c"],["。","m"]],
            [["他带领基础架构 DevOps 团队 —— 管理 ","m"],["地理分布式 Teleport 平台","c"],[",运行于 EKS","m"]],
            [["他的自动化削减了 ","m"],["90% 运维开销","c"],["。","m"]]
          ]
        },
        {
          "q": "热钱包金库是什么?",
          "lines": [
            [["一个生产级的 ","m"],["分布式热钱包金库","c"],[",用于加密资产托管。","m"]],
            [["它实现了 ","m"],["uDDS","c"],[" —— 在 TEE 内的零知识 ","m"],["盲 RSA 解密","c"],[",","m"]],
            [["让服务器永远看不到明文。","m"],["  9 节点 Raft 集群","c"],[" 跨 5 个 AWS","m"]],
            [["区域,采用 ","m"],["Nitro Enclaves","p"],[" + ","m"],["Intel SGX","p"],["。以 ","m"],["Go","g"],[" 与 ","m"],["Rust","g"],[" 构建。","m"]]
          ]
        },
        {
          "q": "他的技术栈是什么?",
          "lines": [
            [["  基础架构: ","m",0],["Kubernetes · Terraform · Helm · FluxCD · Spacelift","c"]],
            [["  监控:    ","m",0],["Prometheus · Grafana · Thanos · Loki · Fluentd","c"]],
            [["  开发:    ","m",0],["Go · Rust · Python · Bash · React · gRPC","g"]],
            [["  AI/ML:   ","m",0],["LangChain · LangGraph · Claude API · RAG · MCP","p"]],
            [["  云:      ","m",0],["AWS (SA Pro) · EKS · Nitro Enclaves · Azure SGX","p"]]
          ]
        },
        {
          "q": "还有哪些值得一提的项目?",
          "lines": [
            [["Echo Bot","g"],[" —— 学习你说话风格并代替你回复的 AI Slack 助手","m"]],
            [["基于 RBAC 知识体系 + ","m"],["RAG","g"],[" + ","m"],["Claude API","g"],["。","m"]],
            [["Foxly Invest","g"],[" —— 个人 AI 投资平台。","m"]],
            [["微服务后端用 Go 与 Python 部署于 K8s,采用 ","m"],["LangChain","g"],[" + ","m"],["MCP","g"]],
            [["实现 AI 驱动的组合洞察,覆盖 Web、Android 与 iOS。","m"]]
          ]
        },
        {
          "q": "学术方面呢?",
          "lines": [
            [["《","p"],["uDDS:面向 TEE 的通用分布式数据封装","p"],["》","p"]],
            [["已被 ","m"],["IEEE CSP 2026","p"],[" 录用,是热钱包金库的学术基石","m"]],
            [["—— TEE 内的 ","m"],["盲解密","c"],[" + ","m"],["Raft 共识","c"],[",已在 9 节点","m"]],
            [["跨 5 个区域的 AWS Nitro 上验证,解封延迟 ","m"],["315ms","c"],["。","m"]]
          ]
        }
      ]
    },
    "cvPage": {
      "toolbarLabelDark": "简历预览 — ivan.bz",
      "toolbarLabelFormal": "正式简历 — Ivan Wong",
      "tabFormal": "正式版",
      "tabDark": "终端版",
      "print": "打印 / 另存 PDF",
      "secExperience": "工作经验",
      "secWorkPrefix": "工作",
      "secWork": "项目",
      "secPersonalPrefix": "个人",
      "secPersonal": "项目",
      "secPublications": "学术发表",
      "secEducationPrefix": "教育与",
      "secEducationSuffix": "证书",
      "secSkillsPrefix": "技术",
      "secSkills": "栈",
      "secFormalExperience": "工作经验",
      "secFormalWork": "工作项目",
      "secFormalPersonal": "个人项目",
      "secFormalPublications": "学术发表",
      "secFormalEducation": "教育与证书",
      "secFormalSkills": "技术技能"
    },
    "languageNames": { "en": "EN", "zh-CN": "简", "zh-TW": "繁" }
  },
  "zh-TW": {
    "nav": {
      "experience": "工作經驗",
      "work": "工作專案",
      "personal": "個人專案",
      "publications": "學術發表",
      "skills": "技能",
      "contact": "聯絡我",
      "cv": "履歷",
      "downloadCv": "下載履歷"
    },
    "sections": {
      "experiencePrefix": "",
      "experience": "工作經驗",
      "workPrefix": "工作",
      "work": "專案",
      "workSubtitle": "// 於 Crypto.com 建構與擴展基礎架構的精選亮點",
      "personalPrefix": "個人",
      "personal": "專案",
      "personalSubtitle": "// 從零開始打造的副業專案",
      "publicationsPrefix": "",
      "publications": "學術發表",
      "publicationsSubtitle": "// 機密運算與分散式系統的同行審查研究",
      "educationPrefix": "教育與",
      "education": "證書",
      "skillsPrefix": "技術",
      "skills": "棧",
      "contactPrefix": "保持",
      "contact": "聯絡",
      "contactSubtitle": "// 對 DevOps、基礎架構感興趣,或想隨意聊聊?"
    },
    "publications": {
      "venueSuffix": "機密運算 · 2026"
    },
    "footer": "由 咖啡因 && kubectl 傾情打造",
    "footerHtml": "由 <span class=\"text-green\">咖啡因</span> && <span class=\"text-cyan\">kubectl</span> 傾情打造",
    "footerCopyright": "© 2025 Ivan Wong.",
    "heroTerminal": {
      "claudeBanner": "Claude Code",
      "qa": [
        {
          "q": "介紹一下 Ivan Wong",
          "lines": [
            [["Ivan Wong 是一位 ","m"],["基礎架構 DevOps 經理","c"],[",任職於 ","m"],["Crypto.com","c"],[",常駐香港。","m"]],
            [["他設計了 ","m"],["DevOps 智能體","c"],[" —— 常駐多智能體平台，路由 ","m"],["50+ MCP 工具","c"],["，配備 ","m"],["Slack 中繼","c"],["。","m"]],
            [["他帶領基礎架構 DevOps 團隊 —— 管理 ","m"],["地理分散式 Teleport 平台","c"],[",運行於 EKS","m"]],
            [["他的自動化削減了 ","m"],["90% 維運開銷","c"],["。","m"]]
          ]
        },
        {
          "q": "熱錢包金庫是什麼?",
          "lines": [
            [["一個生產級的 ","m"],["分散式熱錢包金庫","c"],[",用於加密資產託管。","m"]],
            [["它實作了 ","m"],["uDDS","c"],[" —— 在 TEE 內的零知識 ","m"],["盲 RSA 解密","c"],[",","m"]],
            [["讓伺服器永遠看不到明文。","m"],["  9 節點 Raft 叢集","c"],[" 跨 5 個 AWS","m"]],
            [["區域,採用 ","m"],["Nitro Enclaves","p"],[" + ","m"],["Intel SGX","p"],["。以 ","m"],["Go","g"],[" 與 ","m"],["Rust","g"],[" 建構。","m"]]
          ]
        },
        {
          "q": "他的技術棧是什麼?",
          "lines": [
            [["  基礎架構: ","m",0],["Kubernetes · Terraform · Helm · FluxCD · Spacelift","c"]],
            [["  監控:    ","m",0],["Prometheus · Grafana · Thanos · Loki · Fluentd","c"]],
            [["  開發:    ","m",0],["Go · Rust · Python · Bash · React · gRPC","g"]],
            [["  AI/ML:   ","m",0],["LangChain · LangGraph · Claude API · RAG · MCP","p"]],
            [["  雲端:    ","m",0],["AWS (SA Pro) · EKS · Nitro Enclaves · Azure SGX","p"]]
          ]
        },
        {
          "q": "還有哪些值得一提的專案?",
          "lines": [
            [["Echo Bot","g"],[" —— 學習你說話風格並代替你回覆的 AI Slack 助手","m"]],
            [["基於 RBAC 知識體系 + ","m"],["RAG","g"],[" + ","m"],["Claude API","g"],["。","m"]],
            [["Foxly Invest","g"],[" —— 個人 AI 投資平台。","m"]],
            [["微服務後端以 Go 與 Python 部署於 K8s,採用 ","m"],["LangChain","g"],[" + ","m"],["MCP","g"]],
            [["實現 AI 驅動的組合洞察,涵蓋 Web、Android 與 iOS。","m"]]
          ]
        },
        {
          "q": "學術方面呢?",
          "lines": [
            [["《","p"],["uDDS:面向 TEE 的通用分散式資料封裝","p"],["》","p"]],
            [["已獲 ","m"],["IEEE CSP 2026","p"],[" 錄用,為熱錢包金庫的學術基石","m"]],
            [["—— TEE 內的 ","m"],["盲解密","c"],[" + ","m"],["Raft 共識","c"],[",已於 9 節點","m"]],
            [["跨 5 個區域的 AWS Nitro 上驗證,解封延遲 ","m"],["315ms","c"],["。","m"]]
          ]
        }
      ]
    },
    "cvPage": {
      "toolbarLabelDark": "履歷預覽 — ivan.bz",
      "toolbarLabelFormal": "正式履歷 — Ivan Wong",
      "tabFormal": "正式版",
      "tabDark": "終端版",
      "print": "列印 / 另存 PDF",
      "secExperience": "工作經驗",
      "secWorkPrefix": "工作",
      "secWork": "專案",
      "secPersonalPrefix": "個人",
      "secPersonal": "專案",
      "secPublications": "學術發表",
      "secEducationPrefix": "教育與",
      "secEducationSuffix": "證書",
      "secSkillsPrefix": "技術",
      "secSkills": "棧",
      "secFormalExperience": "工作經驗",
      "secFormalWork": "工作專案",
      "secFormalPersonal": "個人專案",
      "secFormalPublications": "學術發表",
      "secFormalEducation": "教育與證書",
      "secFormalSkills": "技術技能"
    },
    "languageNames": { "en": "EN", "zh-CN": "简", "zh-TW": "繁" }
  }
};

// ============================================================================
// i18n helpers (shared by both pages)
// ============================================================================

// Resolve a translatable value: if it's a {en, "zh-CN", "zh-TW"} object, pick the
// matching language; otherwise return the value as-is. Falls back to English.
function t(value, lang) {
  if (value === null || value === undefined) return '';
  if (typeof value !== 'object') return value;
  if (Array.isArray(value)) return value;
  if (Object.prototype.hasOwnProperty.call(value, 'en') ||
      Object.prototype.hasOwnProperty.call(value, 'zh-CN') ||
      Object.prototype.hasOwnProperty.call(value, 'zh-TW')) {
    return value[lang] || value['en'] || '';
  }
  return value;
}

// Read the active language from localStorage. Default 'en'.
function getLang() {
  try {
    const v = localStorage.getItem('ivan.bz.lang');
    if (v === 'en' || v === 'zh-CN' || v === 'zh-TW') return v;
  } catch (e) { /* ignore */ }
  return 'en';
}

function setLang(lang) {
  try { localStorage.setItem('ivan.bz.lang', lang); } catch (e) { /* ignore */ }
}

// Recursively walk a data tree and resolve every translatable object into a
// plain string for the given language. Returns a deep-cloned, language-resolved
// copy of the input — safe to feed directly into existing renderers expecting
// flat strings.
function resolveTree(node, lang) {
  if (node === null || node === undefined) return node;
  if (Array.isArray(node)) return node.map(n => resolveTree(n, lang));
  if (typeof node === 'object') {
    if (Object.prototype.hasOwnProperty.call(node, 'en') ||
        Object.prototype.hasOwnProperty.call(node, 'zh-CN') ||
        Object.prototype.hasOwnProperty.call(node, 'zh-TW')) {
      return node[lang] || node['en'] || '';
    }
    const out = {};
    for (const k of Object.keys(node)) out[k] = resolveTree(node[k], lang);
    return out;
  }
  return node;
}

// Convenience: produce a fully-resolved CV_DATA copy for a given language.
function getLocalizedCvData(lang) {
  return resolveTree(CV_DATA, lang || getLang());
}
