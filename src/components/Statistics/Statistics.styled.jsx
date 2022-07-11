import styled from '@emotion/styled';

const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: 25px;
  background-color: #fff;
  border: 2px solid #8e8e8e;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin: 0 auto;
  padding: 40px 0;
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
  padding: 20px;
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

const Label = styled.span`
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Percentage = styled.span`
  color: #fff;
  font-size: 24px;
`;

export { StatisticsSection, Title, StatList, StatItem, Label, Percentage };
