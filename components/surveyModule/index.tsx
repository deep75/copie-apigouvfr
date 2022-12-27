import React, { Component } from 'react';
import constants from '../../constants';
import { useRouter } from 'next/router';

const rootUrl: String =
  'https://0u6d4427zal.typeform.com/to/qF8yRRC6#source_page=';

const SurveyModule: React.FC = ({ children }) => (
  <div className="notice-wrapper">
    <div className="notice-item">{getIcon()}</div>
    <div className="notice-item">
      <h6>Aidez-nous à vous aider !</h6>
      <p className="mention">
        Répondez à{' '}
        <a href={rootUrl + useRouter().asPath} target="_blank" rel="noreferrer">
          ce questionnaire
        </a>{' '}
        rapide pour mieux vous connaitre.
      </p>
    </div>

    <style jsx>{`
      div.notice-item {
        margin: 10px;
        text-align: left;
      }
      div.notice-wrapper {
        display: flex;
        align-items: center;
        // width: 50%;
        padding: 0 10px;
        background-color: ${constants.colors.lightBlue};
        border-radius: 10px;

        margin: large;
      }
      span.notice-title {
        font-weight: bold;
      }
      a {
        font-weight: bold;
        text-decoration: underline;
      }
      h6 {
        margin: 0;
      }
      p.mention {
        font-size: 0.8rem;
      }
      p {
        margin: 0;
      }
    `}</style>
  </div>
);
function getIcon() {
  return (
    <svg
      width="58"
      height="56"
      viewBox="0 0 58 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 11C26 10.4477 25.5523 10 25 10H13L12.8834 10.0067C12.386 10.0645 12 10.4872 12 11C12 11.5523 12.4477 12 13 12H25L25.1166 11.9933C25.614 11.9355 26 11.5128 26 11Z"
        fill="#E1000F"
      />
      <path
        d="M28 28C26.8954 28 26 28.8954 26 30C26 32.487 27.0086 34 29 34C29.5523 34 30 33.5523 30 33C30 32.4477 29.5523 32 29 32L28.9059 31.9966C28.7865 31.9878 28.6792 31.9612 28.5839 31.9134C29.4036 31.6636 30 30.9015 30 30C30 28.8954 29.1046 28 28 28Z"
        fill="#E1000F"
      />
      <path
        d="M32 30C32 28.8954 32.8954 28 34 28C35.1046 28 36 28.8954 36 30C36 30.9015 35.4036 31.6636 34.5839 31.9134C34.6792 31.9612 34.7865 31.9878 34.9059 31.9966L35 32C35.5523 32 36 32.4477 36 33C36 33.5523 35.5523 34 35 34C33.0086 34 32 32.487 32 30Z"
        fill="#E1000F"
      />
      <path
        d="M23 14C23.5523 14 24 14.4477 24 15C24 15.5128 23.614 15.9355 23.1166 15.9933L23 16H13C12.4477 16 12 15.5523 12 15C12 14.4872 12.386 14.0645 12.8834 14.0067L13 14H23Z"
        fill="#E1000F"
      />
      <path
        d="M20 19C20 18.4477 19.5523 18 19 18H13L12.8834 18.0067C12.386 18.0645 12 18.4872 12 19C12 19.5523 12.4477 20 13 20H19L19.1166 19.9933C19.614 19.9355 20 19.5128 20 19Z"
        fill="#E1000F"
      />
      <path
        d="M45 38C45.5523 38 46 38.4477 46 39C46 39.5128 45.614 39.9355 45.1166 39.9933L45 40H27C26.4477 40 26 39.5523 26 39C26 38.4872 26.386 38.0645 26.8834 38.0067L27 38H45Z"
        fill="#E1000F"
      />
      <path
        d="M42 43C42 42.4477 41.5523 42 41 42H27L26.8834 42.0067C26.386 42.0645 26 42.4872 26 43C26 43.5523 26.4477 44 27 44H41L41.1166 43.9933C41.614 43.9355 42 43.5128 42 43Z"
        fill="#E1000F"
      />
      <path
        d="M21 0C27.8541 0 33.2879 4.05711 35.9279 10.6272C36.1338 11.1396 35.8853 11.722 35.3728 11.9279C34.8604 12.1338 34.278 11.8853 34.0721 11.3728C31.7238 5.52871 26.9977 2 21 2C12.7157 2 6 8.71573 6 17C6 20.2158 7.0133 23.2762 8.86575 25.8201C9.1006 26.1426 9.11914 26.5696 8.92378 26.9082L8.85074 27.0175L5.027 32H11C11.5128 32 11.9355 32.386 11.9933 32.8834L12 33C12 33.5128 11.614 33.9355 11.1166 33.9933L11 34H3C2.20858 34 1.7453 33.1335 2.14378 32.4827L2.20663 32.3913L6.82 26.378L6.76346 26.2944C5.0508 23.6767 4.08615 20.6291 4.0055 17.4363L4 17C4 7.61116 11.6112 0 21 0Z"
        fill="#000091"
      />
      <path
        d="M36 16C47.0457 16 56 24.9543 56 36C56 39.1306 55.2794 42.1604 53.9137 44.9032C53.6676 45.3975 53.0672 45.5988 52.5728 45.3526C52.0784 45.1064 51.8772 44.5061 52.1234 44.0117C53.3519 41.5444 54 38.8195 54 36C54 26.0589 45.9411 18 36 18C26.0589 18 18 26.0589 18 36C18 45.8307 25.8808 53.8207 35.6693 53.997L36 54H53.131L50.1679 49.5547C49.8835 49.128 49.9702 48.5622 50.352 48.2382L50.4453 48.1679C50.872 47.8835 51.4378 47.9702 51.7618 48.352L51.8321 48.4453L55.8321 54.4453C56.254 55.0782 55.842 55.9157 55.1118 55.9941L55 56H36C24.9543 56 16 47.0457 16 36C16 24.9543 24.9543 16 36 16Z"
        fill="#000091"
      />
      <path
        d="M44 7C44 7.5514 44.4486 8 45 8C45.5514 8 46 7.5514 46 7C46 6.44855 45.5514 6 45 6C44.4486 6 44 6.44855 44 7Z"
        fill="#000091"
      />
      <path
        d="M49 8C48.4486 8 48 7.5514 48 7C48 6.44855 48.4486 6 49 6C49.5514 6 50 6.44855 50 7C50 7.5514 49.5514 8 49 8Z"
        fill="#000091"
      />
      <path
        d="M52 7C52 7.5514 52.4486 8 53 8C53.5514 8 54 7.5514 54 7C54 6.44855 53.5514 6 53 6C52.4486 6 52 6.44855 52 7Z"
        fill="#000091"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M57 2H41C40.4477 2 40 2.44772 40 3V11L40.0067 11.1166C40.0645 11.614 40.4872 12 41 12H48.585L52.2929 15.7071L52.3775 15.7832C53.0145 16.2974 54 15.8522 54 15V12H57C57.5523 12 58 11.5523 58 11V3C58 2.44772 57.5523 2 57 2ZM56 4V10H53L52.8834 10.0067C52.386 10.0645 52 10.4872 52 11V12.585L49.7071 10.2929L49.608 10.2061C49.4345 10.0732 49.221 10 49 10H42V4H56Z"
        fill="#000091"
      />
      <path
        d="M5 46C5.55228 46 6 46.4477 6 47C6 47.5128 5.61396 47.9355 5.11662 47.9933L5 48H1C0.447715 48 0 47.5523 0 47C0 46.4872 0.38604 46.0645 0.883379 46.0067L1 46H5Z"
        fill="#000091"
      />
      <path
        d="M8 47C8 47.5514 8.4486 48 9 48C9.5514 48 10 47.5514 10 47C10 46.4486 9.5514 46 9 46C8.4486 46 8 46.4486 8 47Z"
        fill="#000091"
      />
      <path
        d="M13 48C12.4486 48 12 47.5514 12 47C12 46.4486 12.4486 46 13 46C13.5514 46 14 46.4486 14 47C14 47.5514 13.5514 48 13 48Z"
        fill="#000091"
      />
    </svg>
  );
}
export default SurveyModule;
