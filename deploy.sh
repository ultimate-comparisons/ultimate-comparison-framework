#! /bin/bash

# build a branch different from master
build_branch () {
  BRANCH=$1

  if [[ ! -d prs ]]; then
    mkdir prs
  fi

  mkdir prs/${BRANCH}

# copy build result to final directory
  cp -r www/* prs/${BRANCH}
  git add prs

# add prs/${BRANCH} to gh-pages
  git commit -m "Travis commit for ${BRANCH}"
  git checkout -b ${BRANCH}
  git checkout -f gh-pages
  git checkout -f ${BRANCH} prs/${BRANCH}
  git add prs

# update index.md
  cp README.md index.md
  echo "# Docs" >> index.md
  find docs -type f -exec sh -c 'f=$(basename $1 .ts);d=$(dirname $1);echo "- [$f]($d/$f)"' sh {} >> index.md \;

# insert linebreak in index.md
  echo "" >> index.md

# add PRs to index.md
  git checkout -f gh-pages prs
  echo "# PRs" >> index.md
  find prs -mindepth 1 -maxdepth 1 -type d -exec sh -c 'f=$(basename $1 .ts);d=$(dirname $1);echo "- [$f]($d/$f)"' sh {} >> index.md \;

# add index.md to gh-pages
  git add index.md
  git commit -m "Travis commit for prs"
  git push SSH gh-pages
  git commit -m "Travis commit for ${BRANCH}"
  git push SSH gh-pages
}

# build master
build_master () {  
# add docs to gh-pages
  git checkout -f gh-pages
  git checkout -f master docs
  git add docs
  git commit -m "Travis commit for docs on master"
  git checkout -f master

  if [[ ! -d demo ]]; then
    mkdir demo
  fi

  cp -r www/* demo

# add demo to gh-pages
  git add demo
  git commit -m "Travis commit for master"
  git checkout -f gh-pages
  git pull SSH
  git checkout -f master demo
  git add demo
  git commit -m "Travis commit for demo on master"
  git push SSH gh-pages
  git pull

  git checkout -f master README.md

# add index.md
  cp README.md index.md

# add docs to index.md
  echo "# Docs" >> index.md
  find docs -type f -exec sh -c 'f=$(basename $1 .ts);d=$(dirname $1);echo "- [$f]($d/$f)"' sh {} >> index.md \;

# insert linebreak in index.md
  echo "" >> index.md

# add PRs to index.md
  git checkout -f gh-pages prs
  echo "# PRs" >> index.md
  find prs -mindepth 1 -maxdepth 1 -type d -exec sh -c 'f=$(basename $1 .ts);d=$(dirname $1);echo "- [$f]($d/$f)"' sh {} >> index.md \;

# add index.md to gh-pages
  git add index.md
  git commit -m "Travis commit for prs"
  git push SSH gh-pages
}

git remote add SSH git@github.com:hueneburg/ultimate-comparison-BASE.git
git fetch --all
# decide which functions should be called
if [[ ${TRAVIS_PULL_REQUEST} != false ]]; then
  CURRENT_BRANCH=${TRAVIS_PULL_REQUEST_BRANCH}
  build_branch ${TRAVIS_PULL_REQUEST_BRANCH}
else
  if [[ ${TRAVIS_BRANCH} != "master" ]]; then
    echo "or not..."
    exit 0;
  fi
  CURRENT_BRANCH="master"
  build_master
fi
