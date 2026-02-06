import UseCase from './UseCase';

const productAreas = [
  'Graph & Reasoning',
  'Authoring (NGA Builder) & Script',
  'Testing & Observability',
  'Voice & Channels',
  'Data & Context Intelligence (RAG)',
  'Interoperability & Dev Success',
  'Domain Specific Agents',
];

export default function UseCaseProductCouncil() {
  return (
    <UseCase
      id="use-case-product-council"
      title="Use Case 2: FDE Product Council - Consolidating Findings"
      context={`The FDE Product Council is a strategic advisory body launched in FY27 (2026) designed to create a more intentional two-way product feedback loop between Forward Deployed Engineers (FDEs) and Product Management. The council consists of seven specialized product area councils, each with one Lead and two Subject Matter Experts (SMEs), totaling 21 council members who meet monthly with Product Managers to share insights and gather product knowledge.`}
      painPoints={[
        {
          title: 'Scale of information sharing',
          description: `With 7 councils × 3 members = 21 people sharing insights monthly, the volume of information is significant. Each council covers different product areas: ${productAreas.join(', ')}. Consolidating insights across all these areas manually is time-consuming and error-prone.`,
        },
        {
          title: 'Findings scattered across multiple channels',
          description: 'Council members share insights through meeting notes, Slack threads, emails, and ad-hoc documentation. There\'s no single source of truth for VOC (Voice of Customer) insights, barrier tasks, or swarm requests. Critical feedback can get lost in the noise.',
        },
        {
          title: 'No systematic way to consolidate VOC insights',
          description: 'Product Management needs consolidated insights to shape future Agentforce features, but manually gathering and synthesizing feedback from 21 council members across 7 product areas is inefficient. Common themes and priorities are hard to identify.',
        },
        {
          title: 'Barrier tasks and swarm requests hard to track',
          description: 'The council reviews barrier tasks and swarm requests, but tracking these across multiple councils and ensuring they\'re properly prioritized and communicated to Product Management requires significant manual effort.',
        },
        {
          title: 'Product knowledge dissemination inefficient',
          description: 'After monthly syncs, council members need to disseminate product knowledge back to the broader FDE team. Currently, this happens through ad-hoc Slack messages or team meetings, leading to inconsistent knowledge sharing.',
        },
      ]}
      before={{
        title: 'Without FDE Pulse',
        items: [
          '21 council members manually document insights post-meeting',
          'Findings scattered across 7+ Slack channels and email threads',
          'Product Management spends 12+ hours consolidating monthly insights',
          'Common themes across councils go unnoticed',
          'Barrier tasks tracked in separate spreadsheets',
          'Knowledge dissemination relies on individual council members',
          'Inconsistent reporting format across product areas',
        ],
      }}
      after={{
        title: 'With FDE Pulse',
        items: [
          'AI agent checks in with each council member automatically post-meeting',
          'All insights aggregated in centralized Slack Canvas per product area',
          'System identifies common themes and priorities across all 7 councils',
          'Auto-generated consolidated report for Product Management',
          'Barrier tasks and swarm requests tracked systematically',
          'Product knowledge automatically disseminated to FDE team via summaries',
          'Consistent format and comprehensive coverage',
        ],
      }}
      impact={{
        metric: '80% reduction in consolidation time',
        description: 'Product Management now receives comprehensive, consolidated insights within hours instead of days. The system identifies 3-5 common themes across councils each month that would have been missed manually. The FDE team receives timely product knowledge updates automatically.',
      }}
    />
  );
}
