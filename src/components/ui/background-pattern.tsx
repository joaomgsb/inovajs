import React from 'react';

interface BackgroundPatternProps {
  pattern: 'code' | 'laptop' | 'tech';
  className?: string;
  opacity?: number;
}

export const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  pattern,
  className = '',
  opacity = 0.1
}) => {
  const getPatternUrl = () => {
    switch (pattern) {
      case 'code':
        return '/images/code-bg.svg';
      case 'laptop':
        return '/images/laptop-bg.svg';
      case 'tech':
        return '/images/tech-pattern.svg';
      default:
        return '';
    }
  };

  return (
    <div
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url(${getPatternUrl()})`,
        backgroundRepeat: 'repeat',
        opacity: opacity,
        mixBlendMode: 'overlay'
      }}
    />
  );
};
