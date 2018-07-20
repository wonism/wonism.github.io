/** @jsx createElement */
import { createElement, PureComponent } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import { Document, Page } from 'react-pdf';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import FaPinrt from 'react-icons/lib/fa/print';
import FaGithub from 'react-icons/lib/fa/github';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import { forEach, startsWith, get } from 'lodash/fp';
import Clearfix from '~/components/Common/Clearfix';
import * as profileUrl from '~/resources/me.jpg';

const Wrapper = styled.section`
  padding: 100px 0 0;

  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  & > ${Clearfix} {
    margin: auto;
    max-width: 640px;
  }

  button {
    float: right;
  }
`;

const PdfWrapper = styled.div`
  margin: 20px auto;
  max-width: 640px;
`;

const PdfLinkWrapper = styled.div`
  margin: 20px auto;
  max-width: 640px;
  font-weight: 900;
  text-align: right;
  text-decoration: underline;
`;

const BasicInformation = styled.section`
  text-align: center;
  font-size: 16px;

  h1 {
    font-size: 2em;
    margin: .67em 0;
  }

  p {
    margin: .67em 0;
  }

  img {
    border-radius: 50%;
  }
`;

const SocialInformation = styled.section`
  font-size: 20px;
  text-align: center;

  a {
    padding: 0 6px;
  }
`;

const MDInformation = styled.section`
  font-size: 16px;

  h2 {
    font-size: 1.5em;
    margin: .67em 0;
  }

  ul {
    margin: 16px 0 0;
    padding: 0 0 0 20px;
    line-height: 2em;
    list-style: disc;
  }

  li ul {
    margin: 0 0 16px;;
    padding: 0 0 0 20px;
    list-style: circle;
  }

  a {
    text-decoration: underline;
  }
`;

class Resume extends PureComponent {
  static propTypes = {
    data: shape({ date: shape({}) }).isRequired,
    files: arrayOf(shape({ node: shape({ publicURL: string }) })),
    printPage: func.isRequired,
  };

  static defaultProps = {
    files: [],
  };

  componentDidMount() {
    if (this.$mdWrapper) {
      const anchors = this.$mdWrapper.getElementsByTagName('a');

      forEach((anchor) => {
        const href = anchor.getAttribute('href');
        if (startsWith('http')(href)) {
          anchor.setAttribute('target', '_blank');
          anchor.setAttribute('rel', 'noreferrer noopener');
        }
      })(anchors);
    }
  }

  render() {
    const { files, data, printPage } = this.props;

    if (files) {
      const resume = get('0.node.publicURL')(files);

      return (
        <Wrapper>
          <Clearfix>
            <Helmet>
              <title>
                WONISM | RESUME
              </title>
              <meta name="og:title" content="WONISM | RESUME" />
            </Helmet>
            <PdfLinkWrapper>
              <Link to={resume} target="_blank">
                <b>See via PDF file</b>
              </Link>
            </PdfLinkWrapper>
            <PdfWrapper>
              <Document file={resume} renderMode="svg">
                <Page pageNumber={1} renderMode="svg" />
              </Document>
            </PdfWrapper>
          </Clearfix>
        </Wrapper>
      );
    }

    const resume = get('markdownRemark')(data);

    return (
      <Wrapper>
        <Clearfix>
          <Helmet>
            <title>
              WONISM | RESUME
            </title>
            <meta name="og:title" content="WONISM | RESUME" />
          </Helmet>
          <Clearfix>
            <button type="button" onClick={printPage}>
              <FaPinrt />
              Print
            </button>
          </Clearfix>
          <BasicInformation>
            <img
              src={profileUrl.default}
              alt=""
              width="120"
              height="120"
            />
            <h1>
              wonism
            </h1>
            <p>
              yocee57@gmail.com
            </p>
          </BasicInformation>
          <SocialInformation>
            <a
              href="https://github.com/wonism"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/j1ism"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/j1.chic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/wonism/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
          </SocialInformation>
          <MDInformation>
            <div
              ref={(mdWrapper) => { this.$mdWrapper = mdWrapper; }}
              dangerouslySetInnerHTML={{ __html: get('html')(resume) }}
            />
          </MDInformation>
        </Clearfix>
      </Wrapper>
    );
  }
}

export default Resume;
