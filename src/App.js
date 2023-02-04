import React from "react";
import './app.css'

function App() {
  return <LessonPage {...lessonPageData} />;
}

export default App;

function LessonPage(props) {
  const {
    line91,
    background1,
    group1,
    group2,
    group3,
    ourPrograms,
    navbarLinkAwards,
    navbarLinkAboutUs,
    navbarLinkArticle,
    navbarLinkContactUs,
    wallet0X093Jdj2003029,
    lessonNo1Blockchain101,
    info,
    termsConditions,
    privacyPolicy,
    cookies,
    logo2,
    agencyProvidesAFu,
    outsourceYourDigit,
    promoteYourProduct,
    abilityToPutThems,
    digitalMarketing,
    effortsInstead,
    handlingInHouse,
    aDigitalAgencyIs,
    serviceOnlineAndH,
    putThemselvesInTh,
    x1MarketingEfforts,
    x2InsteadOfHandli,
    x3InHouse,
    agencyIsABusiness,
    provideYourBusines,
    pages1Props,
    pages2Props,
    popularArticelSidebarProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="lesson-pagescreen">
        <div className="hero-article-detail">
          <div className="overlap-group3">
            <div className="group-container">
              <div className="group-36458">
                <div className="line-container">
                  <img className="line" src="line-4.svg" alt="Line 4" />
                  <img className="line" src="line-3.svg" alt="Line 3" />
                  <img className="line" src="line-5.svg" alt="Line 5" />
                  <img className="line" src="line-6.svg" alt="Line 6" />
                  <img className="line" src="line-3.svg" alt="Line 7" />
                  <img className="line" src="line-5.svg" alt="Line 8" />
                </div>
                <img className="line-9" src={line91} alt="Line 9" />
              </div>
              <div className="group-36459">
                <div className="overlap-group">
                  <img className="line-3" src="line-3-1.svg" alt="Line 3" />
                  <img className="line-5" src="line-5-1.svg" alt="Line 5" />
                  <img className="line-6" src="line-6-1.svg" alt="Line 6" />
                  <img className="line-7" src="line-7-1.svg" alt="Line 7" />
                  <img className="line-8" src="line-8-1.svg" alt="Line 8" />
                  <img className="line-9-1" src="line-9-1.svg" alt="Line 9" />
                  <img className="line-4" src="line-4-1.svg" alt="Line 4" />
                  <img className="background-1" src={require('./img/star-bkgrnd-2.png')} alt="Background 1" />
                </div>
              </div>
            </div>
            <div className="img">
              <div className="overlap-group2">
                <div className="rectangle-10"></div>
                <div className="rectangle-11"></div>
                <div className="rectangle-12"></div>
                <img className="group" src={group1} alt="Group" />
                <img className="group-1" src={group2} alt="Group" />
                <img className="group-2" src={group3} alt="Group" />
                <img className="rectangle-2659" src={require('./img/coins.png')} alt="Rectangle 2659" />
              </div>
            </div>
            <div className="navbar">
              <div className="navbar-1spacegrotesk-normal-white-16px, wt-text">
                <div className="frame-1000001">
                  <div className="our-programsvalign-text-middle">
                    {ourPrograms}
                  </div>
                  <img className="path" src="path.svg" alt="Path" />
                </div>
                <div className="navbar-link-awardsvalign-text-middle">
                  {navbarLinkAwards}
                </div>
                <div className="navbar-link-about-usvalign-text-middle">
                  {navbarLinkAboutUs}
                </div>
                <div className="navbar-link-articlevalign-text-middle">
                  {navbarLinkArticle}
                </div>
                <div className="navbar-link-contact-usvalign-text-middle">
                  {navbarLinkContactUs}
                </div>
              </div>
              <div className="button">
                <div className="wallet-0x093jdj2003029valign-text-middle">
                  {wallet0X093Jdj2003029}
                </div>
              </div>
            </div>
          </div>
          <h1 className="lesson-no1-blockchain-101valign-text-middle">
            {lessonNo1Blockchain101}
          </h1>
        </div>
        <div className="overlap-group5">
          <div className="overlap-group4">
            <footer className="footer">
              <div className="overlap-group-1">
                <div className="nav">
                  <img className="logo" src="logo.svg" alt="Logo" />
                  <div className="nav-menu">
                    <Pages
                      nfz={pages1Props.nfz}
                      place={pages1Props.place}
                      aboutUs={pages1Props.aboutUs}
                      yourNfts={pages1Props.yourNfts}
                      blog={pages1Props.blog}
                    />
                    <div className="company, wt-text">
                      <div className="infospacegrotesk-medium-white-21px">
                        {info}
                      </div>
                      <div className="frame-14621spacegrotesk-normal-white-18px">
                        <div className="terms-conditions">
                          {termsConditions}
                        </div>
                        <div className="frame-14621-item">
                          {privacyPolicy}
                        </div>
                        <div className="frame-14621-item">
                          {cookies}
                        </div>
                      </div>
                    </div>
                    <Pages
                      nfz={pages2Props.nfz}
                      place={pages2Props.place}
                      aboutUs={pages2Props.aboutUs}
                      yourNfts={pages2Props.yourNfts}
                      blog={pages2Props.blog}
                    />
                  </div>
                </div>
                <img className="logo-2" src={require('./img/nft-logo.png')} alt="Logo 2/nft-logo.png" />
              </div>
            </footer>
            <PopularArticelSidebar
              popularArticle={popularArticelSidebarProps.popularArticle}
              article1Props={popularArticelSidebarProps.article1Props}
              article2Props={popularArticelSidebarProps.article2Props}
            />
          </div>
          <div className="text">
            <p className="agency-provides-a-fuspacegrotesk-normal-blue-charcoal-21px">
              {agencyProvidesAFu}
            </p>
            <p className="outsource-your-digitspacegrotesk-normal-blue-charcoal-16px">
              {outsourceYourDigit}
            </p>
            <div className="text-itemspacegrotesk-bold-blue-charcoal-24px">
              {promoteYourProduct}
            </div>
            <p className="ability-to-put-themsspacegrotesk-normal-blue-charcoal-16px">
              {abilityToPutThems}
            </p>
            <div className="frame-1000001877">
              <div className="frame-1000001">
                <div className="oval"></div>
                <div className="digital-marketingspacegrotesk-normal-blue-charcoal-16px">
                  {digitalMarketing}
                </div>
              </div>
              <div className="frame-1000001">
                <div className="oval"></div>
                <div className="efforts-insteadspacegrotesk-normal-blue-charcoal-16px">
                  {effortsInstead}
                </div>
              </div>
              <div className="frame-1000001">
                <div className="oval"></div>
                <div className="handling-in-housespacegrotesk-normal-blue-charcoal-16px">
                  {handlingInHouse}
                </div>
              </div>
            </div>
            <p className="a-digital-agency-isspacegrotesk-normal-blue-charcoal-16px">
              {aDigitalAgencyIs}
            </p>
            <div className="text-itemspacegrotesk-bold-blue-charcoal-24px">
              {serviceOnlineAndH}
            </div>
            <p className="put-themselves-in-thspacegrotesk-normal-blue-charcoal-16px">
              {putThemselvesInTh}
            </p>
            <div className="text-item-1spacegrotesk-normal-blue-charcoal-16px">
              {x1MarketingEfforts}
            </div>
            <div className="text-item-1spacegrotesk-normal-blue-charcoal-16px">
              {x2InsteadOfHandli}
            </div>
            <div className="text-item-1spacegrotesk-normal-blue-charcoal-16px">
              {x3InHouse}
            </div>
            <p className="agency-is-a-businessspacegrotesk-normal-blue-charcoal-16px">
              {agencyIsABusiness}
            </p>
            <div className="frame-1000001879">
              <img className="shape" src="shape.svg" alt="Shape" />
              <p className="provide-your-businesspacegrotesk-normal-blue-charcoal-21px">
                {provideYourBusines}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pages(props) {
  const { nfz, place, aboutUs, yourNfts, blog } = props;

  return (
    <div className="nav-menu-item, wt-text">
      <div className="nfzspacegrotesk-medium-white-21px">
        {nfz}
      </div>
      <div className="frame-14621-1spacegrotesk-normal-white-18px">
        <div className="place">
          {place}
        </div>
        <div className="about-us">
          {aboutUs}
        </div>
        <div className="your-nf-ts">
          {yourNfts}
        </div>
        <div className="blog">
          {blog}
        </div>
      </div>
    </div>
  );
}

function PopularArticelSidebar(props) {
  const { popularArticle, article1Props, article2Props } = props;

  return (
    <div className="popular-articel-sidebar">
      <div className="popular-articlevalign-text-middle">
        {popularArticle}
      </div>
      <Article img={require('./img/needle-tower.png')} />
      <Article img={require('./img/red-door.png')} className={article2Props.className} />
      <Article2 />
    </div>
  );
}

function Article(props) {
  const { img, className } = props;

  return (
    <div className={`article-1 ${className || ""}`}>
      <div className="img-1" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="text-1">
        <p
          className="tips-on-choosing-a-universityvalign-text-middlespacegrotesk-bold-blue-charcoal-32px"
        >
          Tips on choosing a university
        </p>
        <p className="lorem-ipsum-dolor-sivalign-text-middlespacegrotesk-normal-bright-gray-16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
    </div>
  );
}

function Article2() {
  return <div className="article-2"></div>;
}

const pages1Data = {
  nfz: "NFZ",
  place: "Home",
  aboutUs: "About Us",
  yourNfts: "Your NFTs",
  blog: "Blog",
};

const pages2Data = {
  nfz: "Community",
  place: "Help Center",
  aboutUs: "Forum",
  yourNfts: "Webinars",
  blog: "Professionals",
};

const article1Data = {
  img: "img/needle-tower.png",
};

const article2Data = {
  img: "img/red-door.png",
  className: "article",
};

const popularArticelSidebarData = {
  popularArticle: "Popular Article",
  article1Props: article1Data,
  article2Props: article2Data,
};

const lessonPageData = {
  line91: "line-9.png",
  background1: "star-bkgrnd-2.png",
  group1: "group.png",
  group2: "group-1.png",
  group3: "group-2.png",
  ourPrograms: "Lessons",
  navbarLinkAwards: "Your NFTs",
  navbarLinkAboutUs: "About Us",
  navbarLinkArticle: "Blog",
  navbarLinkContactUs: "Contact Us",
  wallet0X093Jdj2003029: "Wallet 0x093jdj2003029",
  lessonNo1Blockchain101: (
    <React.Fragment>
      Lesson No.1
      <br />
      Blockchain 101
    </React.Fragment>
  ),
  info: "INFO",
  termsConditions: "Terms Conditions",
  privacyPolicy: "Privacy Policy",
  cookies: "Cookies",
  logo2: "img/nft-logo.png",
  agencyProvidesAFu: "Agency provides a full service range including technical skills, design, business understanding.",
  outsourceYourDigit:
    "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
  promoteYourProduct: "Promote your product",
  abilityToPutThems:
    "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.",
  digitalMarketing: "Digital marketing",
  effortsInstead: "Efforts instead",
  handlingInHouse: "Handling in-house",
  aDigitalAgencyIs:
    "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
  serviceOnlineAndH: "Service online and help",
  putThemselvesInTh:
    "Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.",
  x1MarketingEfforts: "1. Marketing efforts",
  x2InsteadOfHandli: "2. Instead of handling",
  x3InHouse: "3. In-house",
  agencyIsABusiness:
    "Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
  provideYourBusines: "Provide your business with a variety of digital solutions to promote your product or service online and help you.",
  pages1Props: pages1Data,
  pages2Props: pages2Data,
  popularArticelSidebarProps: popularArticelSidebarData,
};