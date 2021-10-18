import { useEffect } from "react";
import { connect, styled } from "frontity";
import tw from "tailwind.macro";

/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  // useEffect(() => {
  //   actions.source.fetch("/");
  //   //List.preload();
  // }, [actions.source]);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
        <Section>
          <Html2React html={post.content.rendered} />
        </Section>
        
    </Container>
  ) : null;
};

export default connect(Page);

const Container = styled.div`
  ${tw`mx-auto max-w-screen-lg p-6`}
`;

const Section = styled.section`
  ${tw`mx-auto px-2 md:px-8 lg:px-4 xl:px-0 relative`}
`;
