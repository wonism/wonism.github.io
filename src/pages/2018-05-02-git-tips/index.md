---
title: "Git 관련 팁"
date: "2018-05-02T23:42:22.000Z"
path: "/git-tips/"
tags: ["git", "github", "vcs", "submodule", "alias"]
summary: "깃 커맨드 별칭(alias) 커맨드로 alias 설정하기 .gitconfig로 alias 설정하기 특정 브랜치 클로닝하기 깃 커맨드 자동완성 터미널에서 git 을 타이핑한 뒤 tab 키를 누르면, 사용할 수 있는 명령어들이 나온다.  또, git l 까지 타이핑한 뒤 tab 키를 누르면, git log가 자동완성된다."
category: "Git"
images: ["images/git.jpg"]
---

## 깃 커맨드 별칭(alias)

#### 커맨드로 alias 설정하기
```
# git command without parameters
$ git config --global alias.s status
# same as git status
$ git s

# git command with parameters
$ git config --global alias.nb "!f(){ git checkout -b \"$1\"; };f"
# same as git checkout -b "BRANCH_NAME"
```

#### .gitconfig로 alias 설정하기
```
[color]
  ...
[user]
  ...
[core]
  ...
[merge]
  ...
[push]
  ...
[filter "lfs"]
  ...
[alias]
  # add alias here
  a = add
  c = commit
  s = status
  d = diff
  b = branch
  l = log
  p = push
  pu = pull
  co = checkout
  nb = "!f(){ git checkout -b \"$1\"; git push origin \"$1\" --set-upstream; };f"
```

## 특정 브랜치 클로닝하기
```
$ git clone -b <BRANCH_NAME> git@github.com:<USER_NAME>/<REPOSITORY_NAME>.git
```

## 깃 커맨드 자동완성
```
$ cd ~/github
$ git clone git://git.kernel.org/pub/scm/git/git.git
$ mkdir -p /usr/local/etc/bash_completion.d
$ cp git/contrib/completion/git-completion.bash /usr/local/etc/bash_completion.d/
$ echo -e '# Git command completion\nsource /usr/local/etc/bash_completion.d/git-completion.bash' >> ~/.bash_profile
$ source ~/.bash_profile
```

터미널에서 `git` 을 타이핑한 뒤 `tab` 키를 누르면, 사용할 수 있는 명령어들이 나온다.
또, `git l` 까지 타이핑한 뒤 `tab` 키를 누르면, `git log`가 자동완성된다.

## 풀 리퀘스트와 이슈 템플릿 만들기
프로젝트 루트 아래 `.github` 디렉토리를 만들고, `ISSUE_TEMPLATE.md`(이슈 템플릿), `PULL_REQUEST_TEMPLATE.md`(풀 리퀘스트 템플릿)을 생성한다.<br />
사용 예는 아래 링크에서 확인할 수 있다.

https://github.com/aframevr/aframe/tree/master/.github

## Something went wrong. 에러
`Github`에서 새로운 저장소를 만들기 위해 (https://github.com/new 페이지에서) 저장소 이름의 유효성 검사를 하던 도중,
`Something went wrong.` 이라는 메시지가 출력되었다.

구글에 검색을 해보니, 같은 문제를 겪은 사람이 또 있었다.

해결 방법은 `Allow-Control-Allow-Origin` 이라는 크롬 확장프로그램을 중지시키는 것이었다.<br />
(`Allow-Control-Allow-Origin` 은 `CORS (Cross-Origin Resource Sharing)` 관련 디버깅을 위해 설치했던 확장프로그램이다.)

__참고__
http://stackoverflow.com/questions/32851144/cannot-create-repository-on-github

## 서브모듈 관련 명렁어

#### 모든 서브모듈 리셋하기
```
$ git submodule foreach git reset --hard
# or
$ git submodule foreach --recursive git reset --hard
```

#### 서브모듈이 특정 브랜치를 바라보도록 하기
```
$ cd <PATH_TO_SUBMODULE>
$ git fetch --all # if needed
$ git checkout <SPECIFIC_BRANCH>
```

## 포크된 저장소를 원래 저장소와 동기화하기
```
# 1. remote 설정하기
$ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git

# 2. upstream 으로부터 변경된 파일 가져오기
$ git fetch upstream

# 3. master 브랜치로 이동
$ git checkout master

# 4. 병합하기
$ $ git merge upstream/master

# more> 만약, conflict 가 발생했다면, 필요한 부분을 편집한다.
```

## 깃허브 페이지에 SPA 호스팅하기
https://github.com/rafrex/spa-github-pages
