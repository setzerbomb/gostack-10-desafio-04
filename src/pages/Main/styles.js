import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  header {
    background: #ffa200;
    display: flex;
    justify-content: center;
  }

  header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 42px;
    color: #fcf5ff;
    min-width: 100%;
    font-size: 14px;
  }

  nav img {
    height: 24px;
  }

  nav > span {
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  nav > div {
    display: flex;
    align-items: center;
  }

  nav > div i {
    margin-left: 8px;
  }

  .postlist {
    width: 90%;
    max-width: 900px;
    margin: 0 auto 20px;
  }

  .post {
    margin-top: 20px;
    border-radius: 8px;
    background: #ffd493;
    padding: 20px;
    color: #3e3e3e;
    line-height: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .post-header {
    display: flex;
    align-items: center;
  }

  .post-header .details {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    color: #9a9a9a;
    line-height: 14px;
  }

  .post-header .details span:first-child {
    font-size: 14px;
    color: #4a4a4a;
    font-weight: bold;
    margin-bottom: 3px;
  }

  .avatar {
    min-height: 32px;
    min-width: 32px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  .post-content {
    margin-top: 15px;
    font-size: 14px;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: #d4d4d4;
  }

  .post-comments {
    margin-top: 20px;
  }

  .comment {
    margin-top: 20px;
    display: flex;
  }

  .comment p {
    border-radius: 20px;
    background: #dbff7a;
    margin-left: 10px;
    padding: 15px;
    font-size: 13px;
  }

  .comment span {
    font-weight: bold;
    margin-right: 6px;
  }
`;
