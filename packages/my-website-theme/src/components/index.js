import { connect, Global, Head, styled } from "frontity";

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
      <div style={{ minHeight: "calc(100vh - 190px)"}}>
        {/* Add the header of the site. */}
       <h1>Hi! I'm matur</h1>
      </div>
    </>
  );
};

export default connect(Theme);

