import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title ? <Title>{title}</Title> : null}

      <StatList>
        {stats.map(item => (
          <StatItem key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
