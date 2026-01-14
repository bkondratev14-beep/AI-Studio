interface TeamCardProps {
  name: string;
  description: string;
  imageUrl: string;
  imagePosition?: string;
}

const TeamCard = ({ name, description, imageUrl, imagePosition = 'center' }: TeamCardProps) => {
  return (
    <div className="card-hover group rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex flex-col items-center text-center gap-5">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden flex-shrink-0 bg-secondary ring-2 ring-border">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            style={{ objectPosition: imagePosition }}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">{name}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-md mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
