export interface TechItem {
    name: string;
    isAiHighlight?: boolean;
}

export interface TechCategory {
    slug: string;
    categoryName: string;
    categoryBadge: string;
    description: string;
    items: TechItem[];
}

export interface TechStackData {
    slug: string;
    badge: {
        label: string;
        aiHighlight: string;
    };
    title: {
        prefix: string;
        highlight: string;
        suffix: string;
    };
    subtitle: string;
    categories: TechCategory[];
    cta: {
        label: string;
        href: string;
    };
}

export const techStackData: TechStackData = {
    slug: "our-technology-stack",
    badge: {
        label: "ENTERPRISE ARCHITECTURE",
        aiHighlight: "AI-POWERED STACK ⚡",
    },
    title: {
        prefix: "Technologies & Frameworks",
        highlight: "We Engineer With",
        suffix: "",
    },
    subtitle:
        "From frontier LLM orchestration and vector search to composable commerce and cloud infrastructure, we build resilient systems engineered for long-term scale.",
    categories: [
        {
            slug: "frontier-llms-foundation-models",
            categoryName: "Frontier LLMs & Foundation Models",
            categoryBadge: "AI FRONTIER",
            description: "State-of-the-art language and reasoning models integrated for enterprise inference.",
            items: [
                { name: "OpenAI o3", isAiHighlight: true },
                { name: "Anthropic Claude 4", isAiHighlight: true },
                { name: "Google Gemini 2.5", isAiHighlight: true },
                { name: "Meta Llama 4", isAiHighlight: true },
                { name: "Mistral Le Chat" },
                { name: "DeepSeek R2", isAiHighlight: true },
            ],
        },
        {
            slug: "ai-agents-orchestration",
            categoryName: "AI Agents & Orchestration",
            categoryBadge: "AUTONOMOUS AI",
            description: "Multi-agent frameworks and workflow orchestrators for executing complex operations.",
            items: [
                { name: "LangGraph", isAiHighlight: true },
                { name: "LlamaIndex Workflows", isAiHighlight: true },
                { name: "CrewAI", isAiHighlight: true },
                { name: "AutoGen Studio" },
                { name: "Smolagents" },
                { name: "OpenAI Agents SDK", isAiHighlight: true },
            ],
        },
        {
            slug: "vector-search-rag",
            categoryName: "Vector Databases & RAG",
            categoryBadge: "REAL-TIME RAG",
            description: "Ultra-fast vector storage and hybrid search engines for private enterprise knowledge.",
            items: [
                { name: "Pinecone", isAiHighlight: true },
                { name: "Weaviate" },
                { name: "pgvector", isAiHighlight: true },
                { name: "Qdrant" },
                { name: "Chroma" },
            ],
        },
        {
            slug: "ml-deep-learning-ops",
            categoryName: "ML, Deep Learning & Fine-Tuning",
            categoryBadge: "MODEL TRAINING",
            description: "Custom model fine-tuning, training pipelines, and observability suites.",
            items: [
                { name: "PyTorch" },
                { name: "Hugging Face Transformers", isAiHighlight: true },
                { name: "TensorFlow" },
                { name: "JAX / Flax" },
                { name: "Scikit-learn" },
                { name: "Unsloth", isAiHighlight: true },
                { name: "Axolotl" },
                { name: "Weights & Biases" },
                { name: "Arize Phoenix" },
            ],
        },
        {
            slug: "enterprise-erp-crm-automation",
            categoryName: "Enterprise ERP, CRM & Process Automation",
            categoryBadge: "ENTERPRISE SUITE",
            description: "Core business management systems, RPA automation, and process orchestration engines.",
            items: [
                { name: "Salesforce" },
                { name: "SAP S/4HANA" },
                { name: "Microsoft Power Platform" },
                { name: "ServiceNow" },
                { name: "UiPath (RPA)" },
                { name: "Automation Anywhere" },
                { name: "Snowflake", isAiHighlight: true },
                { name: "Databricks", isAiHighlight: true },
                { name: "Microsoft Dynamics 365" },
                { name: "Mendix / OutSystems" },
                { name: "Camunda" },
                { name: "Apache Kafka" },
            ],
        },
        {
            slug: "e-commerce-headless-stack",
            categoryName: "E-Commerce & Headless Storefronts",
            categoryBadge: "COMPOSABLE COMMERCE",
            description: "Composable storefronts, payment infrastructure, and headless CMS integrations.",
            items: [
                { name: "Shopify / Hydrogen" },
                { name: "Adobe Commerce (Magento)" },
                { name: "commercetools" },
                { name: "BigCommerce" },
                { name: "Salesforce Commerce Cloud" },
                { name: "WooCommerce" },
                { name: "Medusa.js" },
                { name: "Vue Storefront" },
                { name: "Stripe" },
                { name: "Algolia" },
                { name: "Contentful" },
                { name: "SAP Commerce Cloud" },
            ],
        },
        {
            slug: "cloud-devops-infrastructure",
            categoryName: "Cloud, DevOps & Infrastructure",
            categoryBadge: "HIGH SCALE",
            description: "Multi-cloud hosting, container orchestration, CI/CD pipelines, and observability.",
            items: [
                { name: "AWS" },
                { name: "Microsoft Azure" },
                { name: "Google Cloud Partner" },
                { name: "Kubernetes" },
                { name: "Docker" },
                { name: "Terraform" },
                { name: "GitHub Actions" },
                { name: "Jenkins" },
                { name: "Argo CD (GitOps)" },
                { name: "Prometheus + Grafana" },
                { name: "Datadog" },
                { name: "Ansible" },
            ],
        },
    ],
    cta: {
        label: "DISCUSS YOUR TECH ARCHITECTURE",
        href: "/contact",
    },
};