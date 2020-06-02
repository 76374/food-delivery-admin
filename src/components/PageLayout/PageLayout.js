import styles from './PageLayout.module.css';
import Head from 'next/head';
import NavBar from '../NavBar/NavBar';

const PageLayout = (props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <div>
        <NavBar tab={props.tab} />
      </div>
      {props.content}
    </div>
  );
};

export default PageLayout;
