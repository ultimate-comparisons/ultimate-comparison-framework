## Update your own comparison with the update branch

1. Add ultimate-comparison-base as a remote origin:

  ```bash
  git remote add base https://github.com/ultimate-comparisons/ultimate-comparison-BASE.git
  ```

2. Pull from base update and automatically merge:

  ```bash
  git pull -Xtheirs base update
  ```