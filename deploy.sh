#! /bin/bash

# global preparements for committing into gh-pages
prepare () {
  git remote add SSH git@github.com:ultimate-comparisons/ultimate-comparison-BASE.git
  touch ~/.ssh/github_deployment
# decrypt ssh key
  npm install @alrra/travis-scripts
  $(npm bin)/set-up.ssh --key "$encrypted_08460152d0a3_key" \
                        --iv "$encrypted_08460152d0a3_iv" \
                        --path-encrypted-key "id_rsa.enc"
}

# commit given directory from given branch to gh-pages
git_stuff () {
  TR_BUILD_BRANCH="travis_build_branch_that_should_not_be_created_by_anybody_else"
  git fetch --all
  git checkout package.json
  git checkout package-lock.json
  git checkout -b ${TR_BUILD_BRANCH}
  git add "$1"
  git commit -m "Travis commit for $2"
  git checkout gh-pages
  git checkout ${TR_BUILD_BRANCH} "$1"
  git commit -m "Travis commit"
  git push -f SSH gh-pages
}

# build a branch different from master
build_branch () {
  BRANCH=$1
  prepare

  if [[ ! -d prs ]]; then
    mkdir prs
  fi

  mkdir prs/${BRANCH}

# copy build result to final directory
  cp -r www/* prs/${BRANCH}

# add prs/${BRANCH} to gh-pages
  git_stuff "prs/${BRANCH}" "${BRANCH}"
}

# build master
build_master () {
  prepare
  
# add docs to gh-pages
  git_stuff docs master

  if [[ ! -d demo ]]; then
    mkdir demo
  fi

  cp -r www/* demo

# add demo to gh-pages
  git_stuff demo master

  git checkout master README.md

# add index.md
  cp README.md index.md

# add docs to index.md
  echo "# Docs" >> index.md
  find docs -type f -exec sh -c 'f=$(basename $1 .ts);d=$(dirname $1);echo "- [$f]($d/$f)"' sh {} >> index.md \;

# insert linebreak in index.md
  echo "" >> index.md

  ls prs
# add PRs to index.md
  echo "# PRs" >> index.md
  find prs -mindepth 1 -maxdepth 1 -type d -exec sh -c 'f=$(basename $1 .ts);d=$(dirname $1);echo "- [$f]($d/$f)"' sh {} >> index.md \;

# add index.md to gh-pages
  git_stuff "index.md" master
}

# decide which functions should be called
if [[ ${TRAVIS_PULL_REQUEST} != false ]]; then
  build_branch ${TRAVIS_PULL_REQUEST_BRANCH}
else
  if [[ ${TRAVIS_BRANCH} != "master" ]]; then
    echo "or not..."
    exit 0;
  fi
  build_master
fi
