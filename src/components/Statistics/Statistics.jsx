import PropTypes from 'prop-types';
import { getRendomHexColor } from './getRendomHexColor';
import {
  SectionStat,
  StatItem,
  StatLabel,
  StatList,
  StatPercent,
  Title,
} from './Statistics.styled';
const Statistics = ({ stats, title }) => {
  return (
    <SectionStat>
     {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: getRendomHexColor() }}
          >
            <StatLabel>{stat.label}</StatLabel>
            <StatPercent>{stat.percentage}%</StatPercent>
          </StatItem>
        ))}
      </StatList>
    </SectionStat>
  );
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
export default Statistics;