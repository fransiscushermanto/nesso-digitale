import { Footer, Header } from "./components";
import { mainCss } from "./styles";

const DefaultLayout = (props: React.PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={mainCss}>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
