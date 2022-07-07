import styled from '@emotion/styled';

const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
  margin-top: 25px;
  background-color: #fff;
  border: 2px solid #8e8e8e;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin: 0 auto;
  padding: 20px 0;
  font-size: 25px;
  text-transform: uppercase;
`;

const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const Label = styled.span`
  font-size: 16px;
`;

const Percentage = styled.span``;

export { StatisticsSection, Title, StatList, StatItem, Label, Percentage };
