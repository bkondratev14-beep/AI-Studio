import { Instagram } from 'lucide-react';

interface TeamCardProps {
  name: string;
  description: string;
  imageUrl: string;
  imagePosition?: string;
  instagramUrl?: string;
}

const TeamCard = ({ name, description, imageUrl, imagePosition = 'center', instagramUrl }: TeamCardProps) => {
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
          <div className="flex items-center justify-center gap-3 mb-3">
            <h3 className="text-xl md:text-2xl font-semibold">{name}</h3>
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Instagram ${name}`}
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-md mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
