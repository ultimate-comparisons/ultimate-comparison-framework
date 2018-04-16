#! /bin/bash

# build index.md
buildIndexMd() {
  echo "Create index.md"
  echo '<a href="https://github.com/ultimate-comparisons/ultimate-comparison-BASE" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>' > index.md
    tail -n +2 README.md >> index.md

  # add docs to index.md
  echo "Create Docs Section"
  echo "# Docs" >> index.md
  echo "- [ADR Index](docs/adr)" >> index.md

  # insert linebreak in index.md
  echo "" >> index.md

  # add PRs to index.md
  echo "Create PRs Section"
  git checkout -f gh-pages prs
  echo "# PRs" >> index.md
  find prs -mindepth 1 -maxdepth 1 -type d -exec bash -c 'f=$(basename $1 .ts);d=$(dirname $1);echo "- [${f}](${d}/${f})"' bash {} >> index.md \;

  # add link to current demo to index.md
  echo "Create link to demo"
  echo "" >> index.md
  echo "# Current Master" >> index.md
  echo "- [Demo](https://ultimate-comparisons.github.io/ultimate-comparison-BASE/demo/)" >> index.md
}

# build a branch different from master
build_branch () {
  BRANCH=$1

  if [[ ! -d prs ]]; then
    mkdir prs
  fi

  mkdir prs/${BRANCH}

  # copy build result to final directory
  cp -r dist/* prs/${BRANCH}
  git add prs

  # add prs/${BRANCH} to gh-pages
  git commit -m "Travis commit for ${BRANCH}"
  git checkout -b "${BRANCH}_2"
  git checkout -f gh-pages

  if [[ -d prs/${BRANCH} ]]; then
    rm -rf prs/${BRANCH}
  fi
  mkdir prs/${BRANCH}

  git checkout -f "${BRANCH}_2" prs/${BRANCH}
  git add prs

  buildIndexMd

  # add index.md to gh-pages
  echo "Push index.md"
  git add index.md
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

  if [[ -d demo ]]; then
    rm -rf demo
  fi
  mkdir demo

  cp -r dist/* demo

  # add demo to gh-pages
  git add demo
  git commit -m "Travis commit for master"
  git checkout -f gh-pages
  git pull SSH

  if [[ -d demo ]]; then
    rm -rf demo
  fi
  mkdir demo

  git checkout -f master demo
  git add demo
  git commit -m "Travis commit for demo on master"
  git push SSH gh-pages
  git pull

  git checkout -f master README.md

  # remove closed prs
  RESULT="`curl -s https://api.github.com/repos/ultimate-comparisons/ultimate-comparison-BASE/pulls?state=open`"
  LIST="`echo $RESULT | grep -Po '\"ref\": \"([^\"]*)\"' | awk -F':' '{if(match($2, /\"master\"/)){}else{print $2}}'`"
  cd prs
  for folder in *; do
    if [ $(echo "$LIST" | grep -c -E "\"$folder\"") -ne 1 ]; then
      rm -Rf "$folder"
    fi
  done
  cd ..

  git add prs
  git commit -m "Travis commit for prs on master"

  buildIndexMd

  # add index.md to gh-pages
  echo "Push index.md"
  git add index.md
  git commit -m "Travis commit for prs"
  git push SSH gh-pages
}

git remote add SSH git@github.com:ultimate-comparisons/ultimate-comparison-BASE.git
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
