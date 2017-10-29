---
title: "SNS를 위한 meta태그"
date: "2017-10-29T14:58:32.000Z"
path: "/meta-for-social/"
tags: ["html", "meta", "open graph", "SEO", "검색 엔진 최적화"]
summary: "Facebook이나 Twitter에 URL을 공유하면 대표이미지와 제목, 내용 등이 보이게 된다. 이와 같은 속성을 설정하기 위해 <meta>태그를 사용한다."
category: "HTML"
---

`Facebook`이나 `Twitter`에 URL을 공유하면 대표이미지와 제목, 내용 등이 보이게 된다.<br />
이와 같은 속성을 설정하기 위해 `<meta>`태그를 사용한다.<br />
페이스북은 Open Graph protocol 을 사용하는데, 자세한 정보는 [Open Graph 공식 홈페이지](http://ogp.me/)에서 볼 수 있다.<br />
많은 속성들이 보이는데, 자주 쓰이게 되는 속성은 다음과 같다.

```html
<meta property="og:title" content="제목" />
<meta property="og:description" content="설명" />
<meta property="og:image" content="대표 이미지" />
<meta property="og:url" content="표준 링크(같은 콘텐츠를 가리키는 여러 개의 URL 중 대표 URL)" />
```

`트위터`는 `Open Graph protocal`과 유사한 `<meta>`태그를 사용하며, 다음과 같은 속성을 사용하면 된다.

```html
<meta name="twitter:title" content="제목" />
<meta name="twitter:description" content="설명" />
<meta name="twitter:image" content="대표 이미지" />
<meta name="twitter:card" content="트위터 카드 타입" />
<!-- 트위터 카드 타입은 summary_large_image, summary, photo 중 하나를 선택할 수 있다. -->
```

이 때, title, description, image 는 prefix 만 다르고, 모두 같은데, 두 번씩 써줘야 하나? 라는 의문이 생길 수 있다.<br />
`트위터`는 트위터용 메타태그를 `Open Graph`로 대체할 수 있도록 허용하기 때문에 다음과 같이 설정하면 된다.

```html
<meta property="og:title" content="제목" />
<meta property="og:description" content="설명" />
<meta property="og:image" content="대표 이미지" />
<meta property="og:url" content="표준 링크(같은 콘텐츠를 가리키는 여러 개의 URL 중 대표 URL)" />
<meta name="twitter:card" content="트위터 카드 타입" />
```
이미지에 대한 가이드라인이 있는데 각각 다음과 같다.<br />
페이스북은 이미지의 사이즈가 최소 1200x630 픽셀보다 크기를 권장하며, 1.91:1 의 비율인 이미지가 오길 권장한다.<br />
트위터는 파일 사이즈가 1MB 보다 크기를 권장한다.

__메타 태그 검증하기__
- 페이스북 : https://developers.facebook.com/tools/debug/sharing
- 트위터 : https://cards-dev.twitter.com/validator

이 외에도 다양한 meta 태그들이 있으며, https://github.com/joshbuchea/HEAD 에서 더 많은 정보를 알아볼 수 있다.
