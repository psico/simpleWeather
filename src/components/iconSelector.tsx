import ClearDay from '../../public/weatherIcons/clear-day.svg';
import ThunderStorms from '../../public/weatherIcons/thunderstorms.svg';

const iconSelector = ({weatherId}: any) => {
  const weather = {
    '200': <ThunderStorms height="100%" width="100%" viewBox="1 -1 30 30" />,
    '501': <ClearDay height="100%" width="100%" viewBox="1 -1 30 30" />,
  };

  // @ts-ignore
  return weather[weatherId];
};

export default iconSelector;
