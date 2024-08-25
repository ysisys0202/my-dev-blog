import "@/styles/reset.css";
import "@/styles/global.css";
import GlobalStyles from "@/styles/GlobalStyles";
import dynamic from "next/dynamic";
import Script from "next/dist/client/script";
import { AppProps } from "next/app";
import { css } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { media } from "@/constants/breakPoints";
import BackGround from "@/container/layouts/BackGround";
import Content from "@/container/layouts/Content";
import Layout from "@/container/layouts/Layout";

const GlobalHeader = dynamic(() => import("@/container/layouts/GlobalHeader"), {
  ssr: false,
});
const SideMenu = dynamic(() => import("@/container/layouts/SideMenu"), {
  ssr: true,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        src="/scripts/controlColorTheme.js"
        strategy="beforeInteractive"
      />
      <GlobalStyles />
      <RecoilRoot>
        <Layout style={S}>
          <SideMenu />
          <div className="content-area">
            <GlobalHeader />
            <BackGround />
            <Content>
              <Component {...pageProps} />
            </Content>
          </div>
        </Layout>
      </RecoilRoot>
    </>
  );
};

const S = css`
  .content-area {
    width: 100%;
  }
  @media ${media.md} {
    .content-area {
      margin-left: auto;
      width: 80%;
      max-width: calc(100% - 220px);
    }
  }
`;
export default App;
