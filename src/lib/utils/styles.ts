type Duration = number;
type Delay = number;
type Direction = 'left' | 'right' | 'up' | 'down';
type Type = 'tween' | 'spring' | 'inertia';

export const fadeIn = (direction: Direction | string, type: Type, delay: Delay, duration: Duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ease: 'easeOut', duration, delay, type },
    },
  };
};

export const slideIn = (direction: Direction, type: Type, delay: Delay, duration: Duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: { ease: 'easeOut', duration, delay, type },
    },
  };
};
