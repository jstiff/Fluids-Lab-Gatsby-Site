export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Sungyon Research Lab',

  description: 'In our fluids research lab, we aim to uncover fundamental physical mechanisms that govern complex engineering applications and natural processes, by distilling them down to tractable problems. The process of discovering new research questions and formulating them into model problems is the most important aspect of our research. We then visualize the resultant model problems with table-top experiments, and simultaneously rationalize the experiments with mathematical modeling. ',
  coverImage: 'img/blog-cover.png',
  logo: 'avatars/sungyon.JPEG',
  lang: 'en',
  siteUrl: 'https://gatsby-casper.netlify.com',
  facebook: 'https://www.facebook.com/primedigitalacademy/',
  twitter: 'https://twitter.com/',
  showSubscribe: true,
  mailchimpAction:
    'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'Dept of Mechanical Engineering U of M Twin Cities',
  siteVideos: ["https://www.youtube.com/embed/qWHtcJOhD34", "https://www.youtube.com/embed/OpSmCKe27WE"], 
};

export default config;

