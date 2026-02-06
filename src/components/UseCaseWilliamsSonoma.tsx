import UseCase from './UseCase';

export default function UseCaseWilliamsSonoma() {
  return (
    <UseCase
      id="use-case-williams-sonoma"
      title="Use Case 1: Williams Sonoma - Product Recommendations Agent"
      context="An FDE team is implementing a product recommendation agent for Williams Sonoma's e-commerce platform. The agent needs to understand customer preferences, browse product catalogs, and provide personalized recommendations. The team faces challenges around product data integration, catalog structure, and understanding best practices from similar implementations."
      painPoints={[
        {
          title: 'Uncertainty about product data sources',
          description: 'The team is unsure which product data sources to use—should they pull from the main catalog API, use cached product data, or build a custom index? Multiple teams have likely faced this decision before, but there\'s no easy way to find their learnings.',
        },
        {
          title: 'No visibility into similar implementations',
          description: 'Other FDE teams may have built similar product recommendation features, but without a centralized knowledge base, the team can\'t discover these implementations or learn from their approaches.',
        },
        {
          title: 'Blockers around product catalog integration',
          description: 'The team hits a blocker when trying to integrate with the product catalog API. They spend days troubleshooting rate limiting, data formatting, and pagination issues that another team likely already solved.',
        },
        {
          title: 'Knowledge lost when project ends',
          description: 'When the project graduates, all the learnings about product data structures, API quirks, and recommendation strategies are scattered across Slack threads, meeting notes, and individual memories. Future teams will face the same challenges again.',
        },
      ]}
      before={{
        title: 'Without FDE Pulse',
        items: [
          'Manual weekly check-ins via Slack messages or meetings',
          'Team spends 3 days troubleshooting catalog API integration',
          'No way to discover Team Beta solved similar issue last month',
          'Knowledge scattered across multiple Slack channels',
          'Graduation readout requires 8+ hours of manual compilation',
          'Future teams start from scratch on similar projects',
        ],
      }}
      after={{
        title: 'With FDE Pulse',
        items: [
          'AI agent conducts weekly conversational check-ins automatically',
          'Early blocker detection flags catalog integration issue in Week 2',
          'System discovers Team Beta\'s solution and links it in Slack Canvas',
          'All project insights automatically organized in searchable Slack Canvas',
          'Graduation readout auto-generated from weekly summaries',
          'Knowledge preserved in searchable archive for future teams',
        ],
      }}
      impact={{
        metric: '60% faster implementation',
        description: 'By discovering existing solutions early and avoiding repeated troubleshooting, the Williams Sonoma team completed their product recommendation agent 3 weeks ahead of schedule. Three blockers were resolved using solutions from the knowledge base.',
      }}
    />
  );
}
