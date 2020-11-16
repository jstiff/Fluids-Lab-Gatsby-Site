import React from 'react';
import {graphql} from 'gatsby';
import { Helmet } from 'react-helmet';
//import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
//import { PostCard } from '../components/PostCard';
import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';


const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.greymode};
    }
  }
`;

interface AuthorTemplateProps {
  location: Location;
  data: {
    // logo: {
    //   childImageSharp: {
    //     fluid: any;
    //   };
    // };
    // allMarkdownRemark: {
    //   totalCount: number;
    //   edges: Array<{
    //     node: PageContext;
    //   }>;
    // };
    authorYaml: {
      id: string;
      website?: string;
      twitter?: string;
      facebook?: string;
      location?: string;
      profile_image?: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
      bio?: string;
      avatar: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
}




const People: React.FC = () => (
  <>
    const author = data.authorYaml;
    
    const post = data.markdownRemark;
    <IndexLayout>
      <Helmet>
        <title>People</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">People</PostFullTitle>

              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <h5>
                    Fluids Lab Team Members!! <br />
                  </h5>
                  
                  {/* {post.frontmatter.image && (
        
          <PostCardImage className="post-card-image">
            {post.frontmatter?.image?.childImageSharp?.fluid && (
              <Img
                
                style={{ height: '100%' }}
                fluid={post.frontmatter.image.childImageSharp.fluid}
              />
            )}
          </PostCardImage>
        
      )} */}
                  
                </div>
                {post.frontmatter.image?.childImageSharp && (
                  <PostFullImage>
                    <Img
                      style={{ height: '100%' }}
                      fluid={post.frontmatter.image.childImageSharp.fluid}
                      alt={post.frontmatter.title}
                    />
                  </PostFullImage>
                )}
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  </>
);


const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;

const PostCardImage = styled.div`
  width: auto;
  height: 250px;
  background: ${colors.lightgrey} no-repeat center center;
  background-size: cover;
`;
export default People;
