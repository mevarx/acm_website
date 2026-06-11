import React from 'react';

// Uses the local event/community photos already in /public
const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg',
];

const altLabels = [
  'ACM Community',
  'Hackathon 2025',
  'Workshop Series',
  'Symposium',
  'Team Building',
  'IdeaForge',
  'Industry Connect',
  'Tech Talks',
];

// Duplicate for seamless infinite loop
const duplicatedImages = [...images, ...images];

export const ImageAutoSlider: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes acm-scroll-right {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .acm-infinite-scroll {
          animation: acm-scroll-right 28s linear infinite;
        }
        .acm-scroll-container {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .acm-image-item {
          transition: transform 0.35s ease, filter 0.35s ease, box-shadow 0.35s ease;
        }
        .acm-image-item:hover {
          transform: scale(1.06);
          filter: brightness(1.08);
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
        }
      `}</style>

      <div className="acm-scroll-container w-full overflow-hidden">
        <div className="acm-infinite-scroll flex gap-5 w-max">
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="acm-image-item shrink-0 w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={src}
                alt={`${altLabels[index % images.length]} — ACM SRM AP`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageAutoSlider;
