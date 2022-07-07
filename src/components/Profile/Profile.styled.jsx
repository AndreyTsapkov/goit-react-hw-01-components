import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 25px;
  background-color: #fff;
  border: 2px solid #8e8e8e;
  border-radius: 5px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: auto;
  width: 100px;
  margin-bottom: 25px;
`;

const Name = styled.p`
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 20px;
  font-weight: 700;
`;

const Tag = styled.p`
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 16px;
  font-weight: 500;
  color: #aeacac;
`;

const Location = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 16px;
  font-weight: 500;
  color: #aeacac;
`;

const Stats = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #ececec;
  border-top: 2px solid #8e8e8e;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;

  padding: 10px;

  &:not(:last-child) {
    border-right: 2px solid #8e8e8e;
  }
`;

const Label = styled.span`
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #aeacac;
`;

const Quantity = styled.span`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
`;

export {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
};
