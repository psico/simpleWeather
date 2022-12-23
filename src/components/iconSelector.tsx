import ClearDay from '../../public/weatherIcons/clear-day.svg';
import ThunderStorms from '../../public/weatherIcons/thunderstorms.svg';
import Rainy3 from '../../public/weatherIcons/rainy-3.svg';
import Rainy3Day from '../../public/weatherIcons/rainy-3-day.svg';
import Snowy3 from '../../public/weatherIcons/snowy-3.svg';
import Fog from '../../public/weatherIcons/fog.svg';
import Cloudy3Day from '../../public/weatherIcons/cloudy-3-day.svg';
import Cloudy from '../../public/weatherIcons/cloudy.svg';
import ScatteredThunderstorms from '../../public/weatherIcons/scattered-thunderstorms.svg';

const iconSelector = ({weatherId}: any) => {
  const weather = {
    '200': <ThunderStorms height="100%" width="100%" viewBox="7 4 42 40" />,
    '201': <ThunderStorms height="100%" width="100%" viewBox="7 4 42 40" />,
    '202': <ThunderStorms height="100%" width="100%" viewBox="7 4 42 40" />,
    '210': <ThunderStorms height="100%" width="100%" viewBox="7 4 42 40" />,
    '211': <ThunderStorms height="100%" width="100%" viewBox="7 4 42 40" />,
    '212': <ThunderStorms height="100%" width="100%" viewBox="7 4 42 40" />,
    '221': <ThunderStorms height="100%" width="100%" viewBox="7 4 42 40" />,
    '230': <ThunderStorms height="100%" width="100%" viewBox="7 4 42 40" />,
    '231': <ThunderStorms height="100%" width="100%" viewBox="7 4 42 40" />,
    '232': <ThunderStorms height="100%" width="100%" viewBox="7 4 42 40" />,

    '300': <Rainy3 height="100%" width="100%" viewBox="7 5 11 35" />,
    '301': <Rainy3 height="100%" width="100%" viewBox="7 5 11 35" />,
    '302': <Rainy3 height="100%" width="100%" viewBox="7 5 11 35" />,
    '310': <Rainy3 height="100%" width="100%" viewBox="7 5 11 35" />,
    '311': <Rainy3 height="100%" width="100%" viewBox="7 5 11 35" />,
    '312': <Rainy3 height="100%" width="100%" viewBox="7 5 11 35" />,
    '313': <Rainy3 height="100%" width="100%" viewBox="7 5 11 35" />,
    '314': <Rainy3 height="100%" width="100%" viewBox="7 5 11 35" />,
    '321': <Rainy3 height="100%" width="100%" viewBox="7 5 11 35" />,

    '500': <Rainy3Day height="100%" width="100%" viewBox="3 4 42 15" />,
    '501': <Rainy3Day height="100%" width="100%" viewBox="3 4 42 15" />,
    '502': <Rainy3Day height="100%" width="100%" viewBox="3 4 42 15" />,
    '503': <Rainy3Day height="100%" width="100%" viewBox="3 4 42 15" />,
    '504': <Rainy3Day height="100%" width="100%" viewBox="3 4 42 15" />,
    '511': <Rainy3Day height="100%" width="100%" viewBox="3 4 42 15" />,
    '520': <Rainy3Day height="100%" width="100%" viewBox="3 4 42 15" />,
    '521': <Rainy3Day height="100%" width="100%" viewBox="3 4 42 15" />,
    '522': <Rainy3Day height="100%" width="100%" viewBox="3 4 42 15" />,
    '531': <Rainy3Day height="100%" width="100%" viewBox="3 4 42 15" />,

    '600': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,
    '601': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,
    '602': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,
    '611': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,
    '612': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,
    '613': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,
    '615': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,
    '616': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,
    '620': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,
    '621': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,
    '622': <Snowy3 height="100%" width="100%" viewBox="11 6 34 15" />,

    '701': <Fog height="100%" width="100%" viewBox="6 6 43 15" />,
    '711': <Fog height="100%" width="100%" viewBox="6 6 43 15" />,
    '721': <Fog height="100%" width="100%" viewBox="6 6 43 15" />,
    '731': <Fog height="100%" width="100%" viewBox="6 6 43 15" />,
    '741': <Fog height="100%" width="100%" viewBox="6 6 43 15" />,
    '751': <Fog height="100%" width="100%" viewBox="6 6 43 15" />,
    '761': <Fog height="100%" width="100%" viewBox="6 6 43 15" />,
    '762': <Fog height="100%" width="100%" viewBox="6 6 43 15" />,
    '771': <Fog height="100%" width="100%" viewBox="6 6 43 15" />,
    '781': <Fog height="100%" width="100%" viewBox="6 6 43 15" />,

    '800': <ClearDay height="100%" width="100%" viewBox="1 -1 30 30" />,

    '801': <Cloudy3Day height="100%" width="100%" viewBox="5 -5 15 44" />,
    '802': <Cloudy height="100%" width="100%" viewBox="10 -1 20 35" />,
    '803': (
      <ScatteredThunderstorms height="100%" width="100%" viewBox="10 7 20 37" />
    ),
    '804': (
      <ScatteredThunderstorms height="100%" width="100%" viewBox="10 7 20 37" />
    ),
  };

  // @ts-ignore
  return weather[weatherId];
};

export default iconSelector;
