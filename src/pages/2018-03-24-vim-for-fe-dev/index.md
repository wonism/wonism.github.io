---
title: "프론트엔드 개발자를 위한 VIM 설정"
date: "2018-03-24T13:40:32.000Z"
path: "/vim-for-fe-dev/"
tags: ["vim", "vi", "text editor"]
summary: "플러그인 매니저인 Vundle과 플로그인 & 매퍼인 Janus을 설치해야한다. 이들은 다음 명령어를 통해 설치할 수 있다."
category: "IDE"
---

## Vundle & Janus 설치
플러그인 매니저인 [Vundle](https://github.com/VundleVim/Vundle.vim)과
플로그인 & 매퍼인 [Janus](https://github.com/carlhuda/janus)을 설치해야한다.<br />
이들은 다음 명령어를 통해 설치할 수 있다.

```
# Vundle
$ git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim

# Janus
$ curl -L https://bit.ly/janus-bootstrap | bash
```

## Vundle 설정
`.vimrc`파일의 가장 상단에 다음 설정을 붙여넣는다.<br />
(`"`는 주석이다.)

```
set nocompatible              " be iMproved, required
filetype off                  " required

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" 플러그인들은 vundle#begin과 vundle#end 사이에 있어야한다.
" 이 플러그인은 반드시 필요한 플러그인이다.
Plugin 'VundleVim/Vundle.vim'

call vundle#end()            " required
filetype plugin indent on    " required
```

## Vundle 명령어
`vim` 실행 중일 때, `:PluginList` 등의 명령어를 입력할 수 있다.
|명령어|하는 일|
|------|-------|
|:PluginList|설정된 플러그인 리스트|
|:PluginInstall|플러그인 설치 (`!`와 함께 사용하면 업데이트이며, :PluginUpdae도 가능)|
|:PluginSearch foo|`foo`를 검색한다.|
|:PluginClean|사용되지 않는 플러그인을 삭제한다.|

## Vundle 플러그인 설치
다음과 같은 플러그인을 `.vimrc`에 넣고, `:PluginInstall`을 실행한다.
```
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'
Plugin 'vim-airline/vim-airline'
Plugin 'tpope/vim-fugitive'
Plugin 'isRuslan/vim-es6'
Plugin 'pangloss/vim-javascript'
Plugin 'mxw/vim-jsx'
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}

call vundle#end()            " required
```

## Janus 설정
```
""
"" Janus setup
""

if has('win32') || has('win64') || has('win32unix')
  let g:janus_path = escape(expand("~/.vim/janus/vim"), ' ')
  let g:janus_vim_path = escape(expand("~/.vim/janus/vim"), ' ')
else
  let g:janus_path = escape(fnamemodify(resolve(expand("<sfile>:p")), ":h"), ' ')
  let g:janus_vim_path = escape(fnamemodify(resolve(expand("<sfile>:p" . "vim")), ":h"), ' ')
endif
let g:janus_custom_path = expand("~/.janus")

exe 'source ' . g:janus_vim_path . '/core/before/plugin/janus.vim'

call janus#add_group("tools")
call janus#add_group("langs")
call janus#add_group("colors")

if filereadable(expand("~/.vimrc.before"))
  source ~/.vimrc.before
endif


exe 'source ' . g:janus_vim_path . '/core/plugins.vim'

call janus#load_pathogen()
```
