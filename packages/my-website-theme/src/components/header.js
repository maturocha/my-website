import { connect, styled } from "frontity";
import Link from "./link";
import tw from "tailwind.macro";

const Header = ({ state }) => {
  
  const { title, description } = state.frontity;

  return (
    <>
      <HeaderMain>
      <HeaderFlex>
        {/* Heading and Description of the site */}
          <TitleGroup>
            <SiteTitle>
              <StyledLink link="/">{title}</StyledLink>
            </SiteTitle>
            <SiteDescription>{description}</SiteDescription>
          </TitleGroup>
        {/* <Nav /> 
        <MobileMenu /> */}
      </HeaderFlex>
  </HeaderMain>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const HeaderMain = styled.header`
  ${tw`py-6 lg:pb-4 mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg`}
`;

const HeaderFlex = styled.div`
  ${tw`flex justify-between `}
`;

const TitleGroup = styled.div`
  ${tw`sm:flex sm:items-center sm:items-baseline sm:flex-wrap sm:justify-start mt-4`}
`;

const SiteTitle = styled.h1`
  ${tw`text-5xl text-white font-semibold m-0 mt-4`}
`;

const SiteDescription = styled.div`
  ${tw`m-0 mt-3 text-3xl font-normal text-gray-200 m-4 hidden sm:block`}
`;

const StyledLink = styled(Link)`
  ${tw`text-white no-underline`}
`;