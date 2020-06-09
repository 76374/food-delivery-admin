import { graphql } from 'react-relay';
import sendMutation from './sendMutation';

const mutation = graphql`
  mutation setScheduleMutation($items: [String!]!, $date: Date!) {
    setSchedule(items: $items, date: $date)
  }
`;

function setSchedule(data, onComplete, onError) {
  const variables = { items: data.items, date: data.date };
  return sendMutation(mutation, variables, onComplete, onError);
}

export default setSchedule;
