# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_
series [How to Contribute to an Open Source Project on GitHub][egghead]

## Project setup

1. Fork and clone the repo
2. Run `npm install` to install dependencies
3. Create a branch for your PR with `git checkout -b pr/your-branch-name`

> Tip: Keep your `master` branch pointing at the original repository and make pull
> requests from branches on your fork. To do this, run:
>
> ```bash
> git remote add upstream https://github.com/healthwise/healthwise-ui
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `master` branch
> to use the upstream master branch whenever you run `git pull`. Then you can make
> all of your pull request branches based on this `master` branch. Whenever you
> want to update your version of `master`, do a regular `git pull`.

## Committing and Pushing changes

Please make sure to run the tests before you commit your changes.
You can run `npm run test` to make sure your changes pass before committing.
This project also uses Husky to run tests on pre-commit.

## Help needed

Please checkout the [open issues][issues]

<!-- prettier-ignore-start -->
[egghead]: https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github
[issues]: https://github.com/healthwise/healthwise-ui/issues
<!-- prettier-ignore-end -->