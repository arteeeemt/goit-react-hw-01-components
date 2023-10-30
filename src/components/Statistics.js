import PropTypes from 'prop-types';

import { Container,Title,StatList,StatItem,Label,Percentage } from '../components/Statistics.style'


export default function Statistics({ title, stats }) {

  const listItems = stats.map(({label, percentage, id}) => (
    <StatItem key={id} className="item">
      <Label  className="label">{label}</Label>
      <Percentage  className="percentage">{percentage}%</Percentage>
    </StatItem>
  ));
  return (
    <Container className="statistics">
      {<Title/> ? <Title className="title">{title}</Title> : ''}
      <StatList className="stat-list">{listItems}</StatList>
    </Container>
  );
}


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
}