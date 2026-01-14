const ToolsSection = () => {
  const aiTools = [
    'Sora Pro', 'Kling', 'Veo', 'LTX Studio',
    'Wan', 'Seedream', 'Nano Banana Pro', 'Flex'
  ];

  const proTools = [
    { name: 'Adobe Photoshop', abbr: 'Ps', color: '#31A8FF' },
    { name: 'Adobe Premiere Pro', abbr: 'Pr', color: '#9999FF' },
    { name: 'Adobe After Effects', abbr: 'Ae', color: '#9999FF' },
    { name: 'Adobe Lightroom', abbr: 'Lr', color: '#31A8FF' }
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Инструменты
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* AI Tools */}
          <div>
            <h3 className="text-lg font-medium text-muted-foreground mb-8 uppercase tracking-wider">
              Нейросети
            </h3>
            <div className="flex flex-wrap gap-3">
              {aiTools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Pro Tools */}
          <div>
            <h3 className="text-lg font-medium text-muted-foreground mb-8 uppercase tracking-wider">
              Профессиональный софт
            </h3>
            <div className="flex flex-wrap gap-3">
              {proTools.map((tool) => (
                <span
                  key={tool.name}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:border-primary/50 transition-colors flex items-center gap-2"
                >
                  <span 
                    className="w-6 h-6 rounded text-xs font-bold flex items-center justify-center text-black"
                    style={{ backgroundColor: tool.color }}
                  >
                    {tool.abbr}
                  </span>
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
