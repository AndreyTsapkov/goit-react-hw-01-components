import styled from '@emotion/styled';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px 0px;
  width: 220px;
  box-shadow: 0px 5px 5px 0px rgba(66, 64, 64, 0.96);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Status = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

const Avatar = styled.img`
  display: block;
  height: auto;
  margin-right: 10px;
  border-radius: 5px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

export { ListItem, Status, Avatar, Name };
