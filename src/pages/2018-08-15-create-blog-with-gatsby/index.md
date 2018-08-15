---
title: "Gatsby로 블로그 만들기"
date: "2018-08-15T03:39:28.000Z"
path: "/create-blog-with-gatsby/"
tags: ["javascript", "react", "gatsby", "blog", "static site generator", "github page"]
summary: "Gatsby는 React를 기반으로 한 정적 사이트 생성기(Jekyll(Ruby), Hexo(Node.js), Hugo(Go) 등이 있다.)이며, PWA, Hot reloading, SSR 등 다양한 기능을 제공한다."
category: "JavaScript"
images: ["images/reactjs.jpg"]
components: [{
	rootId: 'post-detail',
	fileName: 'render-images/gatsby-blog/post',
}]
---

[Gatsby](https://www.gatsbyjs.org/)는 React를 기반으로 한 정적 사이트 생성기(Jekyll(Ruby), Hexo(Node.js), Hugo(Go) 등이 있다.)이며, PWA, Hot reloading, SSR 등 다양한 기능을 제공한다. 더 자세한 내용은 이 [링크](https://www.gatsbyjs.org/features/)에서 참고할 수 있다.

## Gatsby CLI와 Gatsby 스타터 다운받기

```
$ npm i -g gatsby-cli
$ gatsby new <<BLOG_NAME>> https://github.com/wonism/gatsby-advanced-blog
$ cd <<BLOG_NAME>>
$ npm run dev
```

## 기본 구조 살펴보기

프로젝트는 다음과 같은 구조로 이루어져있다.

```
src/
├── components
│   ├── ... # Many of shared sections
│   └── layout.jsx # general layout for page
├── constants
├── containers # to connect states to react component
├── html.jsx # page template for page
├── pages # pages of your web site
│   ├── 404.jsx
│   └── index.js
├── postComponents # react application that will be added in page
│   └── ...
├── resources # asset files
│   └── images
├── store # to use redux
│   ├── ...
│   └── index.js
├── templates # template for creating page with file system
│   └── ...
└── utils # utilities
    └── ...
```

## Post 작성하기

```
$ mkdir src/pages/<<DIRECTORY_NAME>>
$ touch src/pages/<<DIRECTORY_NAME>>/index.md
```

이 마크다운 파일들은 `gatsby-source-filesystem`에 의해 불려지게 되며, `gatsby-transformer-remark` 에 의해 HTML 파일로 변환된다.<br />
이들은 빌드 타임에 호출되며, `gatsby-node.js`의 `createPages`를 참고하면 된다.

### 주의 사항

`<<PROJECT_ROOT>>/src/pages` 경로에 `.sample.md` 파일이 있는데, 이 파일을 지우면 GraphQL 쿼리의 `frontmatter` 프로퍼티의 `category`, `images` 등을 가져올 수 없다는 에러가 발생한다.<br />
`.sample.md` 파일은 더미 데이터의 역할을 하여 `frontmatter`의 필드를 생성한다고 보면 된다.

### 마크다운 파일의 기본 구성 요소

```md
---
path: "/hello-world/"
category: "Sample"
tags: ["tag", "should", "be", "array"]
title: "Hello, World!"
date: "2018-08-15T00:00:00.000Z"
summary: "You can create your own blog with Gatsby!"
---

Content of this page
```

- `path`는 페이지를 생성하기 위해 **반드시** 필요한 속성으로 값은 유일한 값을 가져야 한다.
- `category`는 카테고리 페이지를 생성하게 해주며, `/categories/<<CATEGORY_NAME>>/<<PAGE_NUMBER>>`와 같은 페이지에 접근할 수 있게 된다.
- `tags`는 태그 페이지를 생성하게 해주며, `/tags/<<TAG_NAME>>/<<PAGE_NUMBER>>`와 같은 페이지에 접근할 수 있게 된다.
- `title`는 페이지의 제목, `summary`는 페이지의 요약된 내용이다. 아래 이미지에서 각각 빨간 줄과 파란 줄에 해당된다.
- `date`는 글이 작성된 날짜로 포스트들은 이 값을 기반으로 정렬된다.

(이는 [gray-matter](https://github.com/jonschlinkert/gray-matter)를 참고하면 더 자세한 작동 원리를 알 수 있다.)

<div class="render-image" id="post-detail"></div>

이 값들은 `src/templates/Post.jsx`의 `query`에 의해 불려지게 되며, http://localhost:8000/___graphql 에서 쿼리를 직접 실행해볼 수 있다.

### 포스트에 이미지 추가하기

```md
images: ["(<<src/resources/>>)PATH_TO/IMAGE"]
```

`http://`혹은 `https://`를 포함한 절대경로를 사용하거나, `src/resources`를 기준으로 한 상대경로를 할당해준다.

(`components/Post/index.jsx`의 145번째 줄을 보면, `IF CONDITION ? <<image>> : '<<src/resources/${image}>>'`와 같이 이미지를 불러온다.)

### 포스트에 리액트 애플리케이션 추가하기

```md
---
path: "/inject-app/"
category: "Sample"
tags: ["tag", "must", "be", "array"]
title: "Injecting React application"
date: "2018-08-15T00:00:00.000Z"
summary: "You can inject react application into post"
components: [{
  rootId: 'sample-component', # <div id="sample-component"></div> must be in contents
  fileName: 'sample', # this will render src/postComponents/sample/index.jsx
}]
---

1. ...

<div id="sample-component"></div>

2. ...
```

추가할 리액트 애플리케이션의 파일의 경로와, 렌더될 태그의 ID 값을 포함한 객체를 배열 안에 넣어준다.<br />
그리고 글 중간에 리액트 애플리케이션을 삽입하고 싶은 곳에 이 ID를 가진 태그를 추가해준다.

### 포스트에 트윗 추가하기

```md
---
path: "/inject-tweet/"
category: "Sample"
tags: ["tag", "must", "be", "array"]
title: "Injecting Tweet"
date: "2018-08-15T00:00:00.000Z"
summary: "You can inject tweet into post"
tweets: [{
  rootId: 'sample-tweet', # <div id="sample-tweet"></div> must be in contents
  userId: 'twitter', # twitter user id
  tweetId: '977557540199456775', # tweet id
}]
---

1. ...

<div id="sample-tweet"></div>

2. ...
```

추가할 트윗을 작성한 사람과 해당 트윗의 ID, 그리고 렌더될 태그의 ID 값을 포함한 객체를 배열 안에 넣어준다.<br />
그리고 리액트 애플리케이션을 삽입했던 것처럼 사용하면 된다.

### 포스트에 코드 추가하기

하이라이팅을 하고자 하는 코드의 앞 뒤로 \`를 연달아 3개를 붙여넣어주면, `gatsby-remark-prismjs`에 의해 하이라이팅이 된다.

## 포트폴리오 추가하기

```
$ mkdir src/resources/<<DIRECTORY_NAME>>
$ touch src/resources/<<DIRECTORY_NAME>>/index.md
```

```md
---
type: "portfolio"
title: "Gatsby Advanced Blog"
date: "2018-08-15T00:00:00.000Z"
path: "/portfolios/portfolio-1/"
images: [
  "test-1/1.png",
  "test-1/2.png",
]
---

# Gatsby Advanced Blog

## What I did
- Develop Gatsby Advanced Blog

## Libraries / Tools
- ReactJS
- Redux
- Redux saga
- ...

[Go to Web Site →](https://github.com/wonism/gatsby-advanced-blog)
```

- `path`는 페이지를 생성하기 위해 **반드시** 필요한 속성으로 값은 유일한 값을 가져야 한다.
- `type`은 페이지의 형식을 지정할 수 있는 값으로 여기에서는 `portfolio`라고 할당한다.
- `title`는 포트폴리오의 제목이다.
- `images`는 포트폴리오에 첨부하고자 하는 이미지들로, 포스트와 같은 형태의 값을 가진다. 이미지는 배열에 추가된 순서로 렌더링이 된다.
- 포트폴리오들은 `data` 값을 기반으로 정렬된다. 우선적으로 보여줄 포트폴리오에 큰 값을 준다.

포트폴리오는 포트폴레오 페이지에서 보여지게 되며, 포트폴리오가 4개 이상일 경우 홈페이지 메인에서도 보여지게 된다.<br />
(`src/components/Home`에서 확인할 수 있으며, 어떻게 렌더링할 지는 수정하면 된다.)

## Resume 추가하기

```md
---
type: "resume"
title: "Resume"
date: "2000-01-01T00:00:00.000Z"
path: "/resume/"
---

## Experience
- Engineer at OOO ∙ 2000. 01 ~ Present
  - Develop something
  - Maintain something

## Education
- B.S. in Computer Science Engineering at OOO
  - 2000. 01 ~ 2000. 01

## Projects
- Gatsby Advanced Blog (https://github.com/wonism/gatsby-advanced-blog) ∙ 2000. 01 ~ Present
  - Integrate Redux
    - Use Redux, Redux Saga, Reselect...

## Skills
- JavaScript
  - ES2015+
  - ReactJS
  - Lodash
- CSS
  - SASS
  - Less
```

- `path`는 페이지를 생성하기 위해 **반드시** 필요한 속성으로 값은 유일한 값을 가져야 한다.
- `type`은 페이지의 형식을 지정할 수 있는 값으로 여기에서는 `resume`라고 할당한다.

## 기타 기능

- GNB의 오른쪽에선 포스트의 제목, 요약된 내용, 태그, 카테고리 등으로 검색을 할 수 있다.
- 코드를 추가하면, 코드를 복사할 수 있는 버튼이 자동으로 생성된다.

## 배포

`npm run build`를 통해 애플리케이션을 빌드하고,
[Github Page](https://pages.github.com/) 또는 [AWS S3](https://aws.amazon.com/s3), [Netlify](https://www.netlify.com/) 등 자신이 원하는 곳에 배포하면 된다.
