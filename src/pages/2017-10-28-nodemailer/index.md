---
title: "nodemailer로 이메일 전송하기"
date: "2017-10-28T00:25:05.000Z"
path: "/nodemailer/"
tags: ["javascript", "nodejs", "nodemailer"]
summary: "nodemailer는 Node.js에서 e-mail을 쉽게 보낼 수 있게 도와주는 모듈이다. Gmail뿐만 아니라, Naver, Yahoo 등의 서비스도 지원한다."
category: "JavaScript"
---

## Node Mailer
`nodemailer`는 `Node.js`에서 `e-mail`을 쉽게 보낼 수 있게 도와주는 모듈이다.<br />
`Gmail`뿐만 아니라, `Naver`, `Yahoo` 등의 서비스도 지원한다.

지원 리스트는 이 [링크](https://nodemailer.com/smtp/well-known/#supported-services)에서 볼 수 있다.

## 사용방법
`0.x` 버전과 `>=1.0` 버전은 사용 방법이 다르다.<br />
이 예제에서는 `4.3.0` 버전을 사용한다.

### 모듈 설치
```
$ npm i -S nodemailer nodemailer-smtp-pool
```

### 구현하기
```js
const nodemailer = require('nodemailer');
const smtpPool = require('nodemailer-smtp-pool');
// smtpPool는 smtp서버를 사용하기 위한 모듈로
// transporter객체를 만드는 nodemailer의 createTransport메소드의 인자로 사용된다.

const config = {
  mailer: {
    service: 'Gmail',
    host: 'localhost',
    port: '465',
    user: 'user@email.com',
    password: 'PA%%W0RD',
  },
};

const from = 'FROM < from@email.com >';
const to = 'to@email.com';
const subject = 'This is title';
const html = '<p>This is paragraph.</p>';
// const text = 'This is just text.';

const mailOptions = {
  from,
  to,
  subject,
  html,
  // text,
};
// 본문에 html이나 text를 사용할 수 있다.

const transporter = nodemailer.createTransport(smtpPool({
  service: config.mailer.service,
  host: config.mailer.host,
  port: config.mailer.port,
  auth: {
    user: config.mailer.user,
    pass: config.mailer.password,
  },
  tls: {
    rejectUnauthorize: false,
  },
  maxConnections: 5,
  maxMessages: 10,
}));

// 메일을 전송하는 부분
transporter.sendMail(mailOptions, (err, res) => {
  if (err) {
    console.log('failed... => ', err);
  } else {
    console.log('succeed... => ', res);
  }

  transporter.close();
});
```

### 메일이 전송되지 않는 경우
메일이 전송되지 않는 경우는 대부분 보안 문제때문 일 것이다.<br />
메일을 다른 앱을 통해 사용할 수 있도록 설정을 바꾸면 된다.

`Gmail`의 경우 https://myaccount.google.com/lesssecureapps에서 설정을 변경하면 될 것이다.
