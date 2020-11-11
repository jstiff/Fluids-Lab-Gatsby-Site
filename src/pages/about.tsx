import React from 'react';
import { Helmet } from 'react-helmet';
//import styled from '@emotion/styled';
import { css } from '@emotion/core';
//import Img, { FluidObject } from 'gatsby-image';

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

const About: React.FC = () => (
  <>
    const post = data.markdownRemark;
    <IndexLayout>
      <Helmet>
        <title>About</title>
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
                <PostFullTitle className="post-full-title">About</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <h5>
                    Goals of the Fluids Lab <br />
                    {/* GitHub:{' '}
                  <a href="https://github.com/scttcper/gatsby-casper">scttcper/gatsby-casper</a> */}
                  </h5>
                  <p>
                    The overarching vision of my research program is to uncover fundamental physical
                    mechanisms that govern complex engineering applications and natural processes
                    and to advance fundamental fluid mechanics. Consistent with that vision, my
                    research group identifies new fluid mechanics phenomena that are motivated by
                    applications in energy, environment, and materials science and distills them
                    down to tractable problems based on barebones physical ingredients. The process
                    of discovering new research questions and formulating them into model problems
                    is the most important aspect of our research. We then visualize the resultant
                    model problems with table-top experiments, and simultaneously rationalize the
                    experiments with mathematical modeling. Together, these provide a comprehensive
                    physical understanding of the given phenomena.
                  </p>
                  <p>
                    The key research areas in my group comprise the fundamental investigation of (1)
                    interfacial dynamics of suspension flows, (2) inertia-driven droplets, (3)
                    two-phase flows through porous media, and (4) dynamics of particle rafts. The
                    diverse systems of interest involve the dynamics of the fluid-fluid interface
                    and the emergence of new phenomena when it couples to complex media (e.g.,
                    suspensions) or to new flow regimes.
                  </p>
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
export default About;
