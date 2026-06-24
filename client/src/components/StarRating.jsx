import { useId } from 'react';

function StarSVG({ fillType, gradientId }) {
  let fillUrl = "currentColor";
  if (fillType === 'empty') fillUrl = "none";
  if (fillType === 'half') fillUrl = `url(#${gradientId})`;

  return (
    <svg
      viewBox="0 0 24 24"
      fill={fillUrl}
      stroke="currentColor"
      strokeWidth="1.5"
      className={`star-svg ${fillType}`}
      style={{ width: '16px', height: '16px', display: 'inline-block', verticalAlign: 'middle' }}
    >
      {fillType === 'half' && (
        <defs>
          <linearGradient id={gradientId}>
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function StarRating({ level }) {
  const fullStars = Math.floor(level);
  const hasHalf = level % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  const baseId = useId();

  return (
    <div className="skill-stars" aria-label={`Skill rating: ${level} out of 5 stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <StarSVG key={`f-${i}`} fillType="full" />
      ))}
      {hasHalf && (
        <StarSVG fillType="half" gradientId={`${baseId}-half-grad`} />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarSVG key={`e-${i}`} fillType="empty" />
      ))}
    </div>
  );
}
