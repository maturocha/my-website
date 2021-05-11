import { connect, Global, Head, styled } from "frontity";
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
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="es" />
      </Head>
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

