interface TeamCardProps {
  name: string;
  description: string;
  imageUrl: string;
  imagePosition?: string;
}

const TeamCard = ({ name, description, imageUrl, imagePosition = 'center' }: TeamCardProps) => {
  return (
    <div className="card-hover group rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden flex-shrink-0 bg-secondary">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            style={{ objectPosition: imagePosition }}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">{name}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
