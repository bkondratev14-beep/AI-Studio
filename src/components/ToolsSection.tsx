import ScrollReveal from '@/components/ScrollReveal';

const ToolsSection = () => {
  const aiTools = [
    'Sora Pro', 'Kling', 'Veo', 'LTX Studio',
    'Wan', 'Seedream', 'Nano Banana Pro', 'Flex'
  ];

  const proTools = [
    { name: 'Photoshop', abbr: 'Ps' },
    { name: 'Premiere Pro', abbr: 'Pr' },
    { name: 'After Effects', abbr: 'Ae' },
    { name: 'Lightroom', abbr: 'Lr' }
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Инструменты
            </h2>
          </ScrollReveal>

          <div className="space-y-10">
            {/* AI Tools */}
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <h3 className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
                  Нейросети
                </h3>
                <p className="text-sm text-muted-foreground/80">
                  {aiTools.join(' · ')}
                </p>
              </div>
            </ScrollReveal>

            {/* Divider */}
            <ScrollReveal delay={0.15}>
              <div className="w-12 h-px bg-border mx-auto" />
            </ScrollReveal>

            {/* Pro Tools */}
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <h3 className="text-xs font-medium text-muted-foreground mb-5 uppercase tracking-widest">
                  Профессиональный софт
                </h3>
                <div className="flex justify-center gap-6">
                  {proTools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-2">
                      <span className="w-10 h-10 rounded-lg border border-border bg-card text-xs font-bold flex items-center justify-center text-foreground">
                        {tool.abbr}
                      </span>
                      <span className="text-xs text-muted-foreground">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
