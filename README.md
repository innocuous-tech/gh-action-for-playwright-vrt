This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Updating Snapshots in CI

With _Visual Regression Diff Testing_, there must be a snapshot that represents the _baseline_ (the source of truth).
This is the snapshot that is used to compare against future snapshots. In CI, we will run our Playwright E2E tests with
one key difference at play than when we run them locally: CI will take snapshots and compare to the baseline. It is
possible that you have developed a feature which has changed the UI in a way that is expected. In this case, you will
need to update the baseline snapshot. To do this, on your PR you will comment `/update-snapshots` and GitBot will
make a commit with updated snapshots. The diff will show in the PR for you to compare against! This is also a necessary
comment to make if you have created a new visual regression diff test.

### Why can't I commit snapshots locally?

We don't have a system of developing on Docker or on a remote machine. We develop locally and commit to GitHub. This
means that the snapshots our take may end up with slight differences. For example, the font rendering may be slightly
between MacOS and Windows. This is why we have a system of updating snapshots in CI. The Ubuntu Linux machine is always
the same and so are its snapshots.

## Getting Started

Note that `pnpm` isn't actually a relevant point of this repo. I just picked it because it's the fastest.

### Install Dependencies

```bash
npm i -g pnpm

pnpm i
```

### Development Server

```bash
pnpm dev

# Once prompted by the shell output, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
```

### Run Playwright Locally

```bash
pnpm test:e2e
```
