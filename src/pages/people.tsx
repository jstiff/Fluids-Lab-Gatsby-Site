import React from 'react';
import {graphql} from 'gatsby';
import { Helmet } from 'react-helmet';
//import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Img, { FluidObject } from 'gatsby-image';
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
    logo: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      totalCount: number;
      edges: Array<{
        node: PageContext;
      }>;
    };
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




const People: React.FC = ({data})=> (
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
                    Fluids Lab Team Members <br />
                  </h5>
                  {JSON.stringify(authors)}
                  {/* {post.frontmatter.image && (
        <Link className="post-card-image-link" css={PostCardImageLink} to={post.fields.slug}>
          <PostCardImage className="post-card-image">
            {post.frontmatter?.image?.childImageSharp?.fluid && (
              <Img
                alt={`${post.frontmatter.title} cover image`}
                style={{ height: '100%' }}
                fluid={post.frontmatter.image.childImageSharp.fluid}
              />
            )}
          </PostCardImage>
        </Link>
      )} */}
                  
                </div>
                {/* {post.frontmatter.image?.childImageSharp && (
                  <PostFullImage>
                    <Img
                      style={{ height: '100%' }}
                      fluid={post.frontmatter.image.childImageSharp.fluid}
                      alt={post.frontmatter.title}
                    />
                  </PostFullImage>
                )} */}
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  </>
);

export const query = graphql`
  query{
  allAuthorYaml {
         edges {
           node {
             id
             avatar {
               id
             }
             bio
             location
           }
         }
       }
      
 }
`;
// const PostFullImage = styled.figure`
//   margin: 25px 0 50px;
//   height: 650px;
//   background: ${colors.lightgrey} center center;
//   background-size: cover;
//   border-radius: 15px;

//   @media (max-width: 1170px) {
//     margin: 25px -6vw 50px;
//     border-radius: 0;
//     img {
//       max-width: 1170px;
//     }
//   }
// `;
// export const query = graphql`
//   query($slug: String, $primaryTag: String) {
//     logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
//       childImageSharp {
//         fixed {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       htmlAst
//       excerpt
//       timeToRead
//       frontmatter {
//         title
//         userDate: date(formatString: "D MMMM YYYY")
//         date
//         tags
//         excerpt
//         image {
//           childImageSharp {
//             fluid(maxWidth: 3720) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         author {
//           id
//           bio
//           avatar {
//             children {
//               ... on ImageSharp {
//                 fluid(quality: 100, srcSetBreakpoints: [40, 80, 120]) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     relatedPosts: allMarkdownRemark(
//       filter: { frontmatter: { tags: { in: [$primaryTag] }, draft: { ne: true } } }
//       limit: 5
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           timeToRead
//           excerpt
//           frontmatter {
//             title
//             date
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;

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
