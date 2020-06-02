import { LinearProgress, Paper } from '@material-ui/core';
import styles from './ContentContainer.module.css';

const ContentContainer = (props) => {
  const { content } = props;
  if (!content) {
    return <LinearProgress />;
  }
  return (
    <div className={styles.container}>
      <Paper className={styles.paper}>{content}</Paper>
    </div>
  );
};

export default ContentContainer;
