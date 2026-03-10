This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Testing

This project uses [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

Run tests once:
```bash
npm run test
```

Run tests in watch mode:
```bash
npm run test:ui
```

## CI/CD Pipeline

A `Jenkinsfile` is included for automation. The pipeline includes the following stages:
1. **Install**: Installs dependencies using `npm ci`.
2. **Lint**: Checks for code quality issues.
3. **Test**: Runs the unit test suite.
4. **Build**: Creates a production-ready build.
5. **Post-Build**: Clean-up and final checks.

### Docker Support

A multi-stage `Dockerfile` is provided for containerization, optimizing the build for production.

To build the image locally:
```bash
docker build -t jenkins-tuto .
```

## Learn More
...
