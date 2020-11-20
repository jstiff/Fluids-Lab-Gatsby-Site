import React from 'react';
import { Helmet } from 'react-helmet';
// import styled from '@emotion/styled';
import { css } from '@emotion/core';
// import Img, { FluidObject } from 'gatsby-image';
import Video from '../components/Video';
import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import {
  outerVid,
  vid,
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

const Videos: React.FC = () => (
  <>
    const post = data.markdownRemark;
    <IndexLayout>
      <Helmet>
        <title>Videos</title>
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
                <PostFullTitle className="post-full-title">Videos</PostFullTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div css={[outerVid]}>
                  <div css={[vid]}>
                    {config.siteVideos.map(vid => 
                      <Video
                        videoSrcURL={vid}
                        videoTitle="Pattern formation in suspension flows,” Saint   Anthony Falls Lab, 10/13/2020"
                      /> )}
                  </div>
                </div>
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
export default Videos;
