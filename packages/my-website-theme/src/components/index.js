import { connect, Global, Head, styled } from "frontity";
import globalStyles from "./styles/global-styles";
import Title from "./title";
import Header from "./header";
import tw from "tailwind.macro";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="es" />
      </Head>

       {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      <Header />
      <Main>
        <h1>Hi! I'm matur</h1>
      </Main>
    </>
  );
};

export default connect(Theme);

const Main = styled.main`
  ${tw`flex`}
  
`;

