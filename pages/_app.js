import './styles.css';
import PageLayout from '../src/components/PageLayout/PageLayout';

export default function App({ Component, pageProps }) {
  return <PageLayout content={<Component {...pageProps} />} />;
}
