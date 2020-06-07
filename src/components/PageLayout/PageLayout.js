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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
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
