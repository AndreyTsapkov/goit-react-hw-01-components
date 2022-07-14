import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: 0px 0px 5px 0px rgba(66, 64, 64, 0.96);

  & thead {
    background-color: rgb(5, 198, 227);
    color: #fff;

    & th {
      font-size: 18px;
      padding: 20px 40px;
      width: 150px;
      text-transform: uppercase;
    }
  }

  & tbody {
    & tr {
      font-size: 16px;
      background-color: #d0e2f1cc;
      text-align: center;

      & td {
        padding: 10px 20px;

        &:first-child {
          text-transform: capitalize;
        }
      }

      &:nth-child(odd) {
        background-color: #fff;
      }
    }
  }
`;
