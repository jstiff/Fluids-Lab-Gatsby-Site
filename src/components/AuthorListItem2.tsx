import { Link } from 'gatsby';
import Img from 'gatsby-image';
import * as _ from 'lodash';
import { lighten } from 'polished';
import React, { useState } from 'react';

import { css } from '@emotion/core';

import { colors } from '../styles/colors';
import { Author } from '../templates/post';
import { AuthorProfileImage } from './PostCard';
import styled from '@emotion/styled';
import { prependOnceListener } from 'process';

interface AuthorListItem2Props {
  tooltip: 'small' | 'large';
  author: Author;
}

export const AuthorListItem2: React.FC<AuthorListItem2Props> = props => {
  const [hovered, setHover] = useState(false);
  let timeout: ReturnType<typeof setTimeout>;
  
  
  

  function handleMouseEnter() {
    if (props.tooltip !== 'large') {
      return;
    }

    clearTimeout(timeout);
    setHover(true);
  }

  function handleMouseLeave() {
    clearTimeout(timeout);
    timeout = setTimeout(() => setHover(false), 600);
  }

    function copyEmail(e) {
        alert(e.target.innerText)
    }

  return (
    <AuthorListItemLi
      className="author-list-item"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {props.tooltip === 'small' && (
        <AuthorNameTooltip className="author-name-tooltip">{props.author.id}</AuthorNameTooltip>
      )}
      {props.tooltip === 'large' && (
        <div css={[AuthorCardStyles, hovered && Hovered]} className="author-card">
          { props.author.avatar.childImageSharp.fluid && (
            <Img
              css={AuthorProfileImage}
              className="author-profile-image"
              fluid={props.author.avatar.childImageSharp.fluid}
              fadeIn={false}
            />
          )}
          <div className="author-info">
            <div className="bio">
              <h2>{props.author.id}</h2>
              <p>{props.author.bio}</p>
              <p>{props.author.schooling}</p>
              { props.author.interests !== "" && <p><b>Areas of Interests:</b> {props.author.interests}</p>}
              <p>Location: {props.author.location}</p>
              <lable>{"e-mail  "}</lable>
              <a href="#" id="email" title={props.author.email} style={{cursor: "pointer"} } onClick={(e)=> copyEmail(e)}>{props.author.email}</a>
              <p>
                <Link to={`/author/${_.kebabCase(props.author.id)}/`}>Papers</Link> by{' '}
                {props.author.id}.
              </p>
            </div>
          </div>
        </div>
      )}
      <Link
        css={AuthorAvatar}
        className="author-avatar"
        to={`/author/${_.kebabCase(props.author.id)}/`}
      >
        <Img
          css={AuthorProfileImage}
          className="author-profile-image"
          fluid={props.author.avatar.childImageSharp.fluid}
          alt={props.author.id}
          fadeIn={false}
        />
      </Link>
    </AuthorListItemLi>
  );
};

const Hovered = css`
  opacity: 1;
  transform: scale(1) translateY(0px);
  pointer-events: auto;
`;

const AuthorListItemLi = styled.li`
  position: relative;
  flex-shrink: 0;
  margin: 0 auto;
  padding: 0;

  :hover .author-name-tooltip {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const AuthorNameTooltip = styled.div`
  position: absolute;
  bottom: 105%;
  z-index: 999;
  display: block;
  padding: 2px 8px;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 0.2px;
  white-space: nowrap;
  /* background: var(--darkgrey); */
  background: ${colors.darkgrey};
  border-radius: 3px;
  box-shadow: rgba(39, 44, 49, 0.08) 0 12px 26px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  opacity: 0;
  transition: all 0.35s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transform: translateY(6px);
  pointer-events: none;

  @media (max-width: 700px) {
    display: none;
  }
`;

const AuthorCardStyles = css`
  position: absolute;
  bottom: 130%;
  left: 50%;
  z-index: 600;
  display: flex;
  justify-content: space-between;
  margin-left: -250px;
  margin-bottom: -200px;
  width: 500px;
  font-size: 2rem;
  line-height: 1.5em;
  background: white;
  border-radius: 8px;
  box-shadow: rgba(39, 44, 49, 0.08) 0 12px 26px, rgba(39, 44, 49, 0.06) 1px 3px 8px;
  opacity: 0;
  transition: all 0.35s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transform: scale(0.98) translateY(15px);
  pointer-events: none;
  padding: 40px 20px 22px;

  :before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    display: block;
    margin-left: -8px;
    width: 0;
    height: 0;
    border-top: 8px solid #fff;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }

  .author-info {
    flex: 1 1 auto;
    padding: 0 0 0 20px;
  }

  .author-info h2 {
    margin: 8px 0 0;
    font-size: 2.6rem;
  }

  .author-info p {
    margin: 4px 0 0;
    color: color(var(--midgrey) l(-10%));
  }

  .author-info .bio h2 {
    margin-top: 0;
    
  }

  .author-info .bio p {
    margin-top: 0.8em;
  }

  .author-profile-image {
    flex: 0 0 60px;
    margin: 0;
    width: 60px;
    height: 60px;
    border: none;
  }

  @media (max-width: 1170px) {
    margin-left: -50px;
    width: 430px;

    :before {
      left: 50px;
    }
  }

  @media (max-width: 650px) {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    /* background: color(var(--darkmode) l(+4%)); */
    background: ${lighten('0.04', colors.darkmode)};
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);

    :before {
      /* border-top-color: color(var(--darkmode) l(+4%)); */
      border-top-color: ${lighten('0.04', colors.darkmode)};
    }
  }
`;

const AuthorAvatar = css`
  display: block;
  overflow: hidden;
  margin: 40px;
  width: 175px;
  height: 175px;
  border: #fff 2px solid;
  border-radius: 100%;
  transition: all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99) 700ms;

  @media (max-width: 500px) {
    width: 36px;
    height: 36px;
  }

  @media (prefers-color-scheme: dark) {
    /* border-color: color(var(--darkgrey) l(+2%)); */
    border-color: ${lighten('0.02', colors.darkgrey)};
  }
`;
const AuthorProfileImage2 = css`
  display: block;
  width: 100%;
  height: 100%;
  /* background: color(var(--lightgrey) l(+10%)); */
  background: ${lighten('0.1', colors.lightgrey)};
  border-radius: 100%;
  object-fit: cover;

  @media (prefers-color-scheme: dark) {
    background: ${colors.darkmode};
  }
`;
