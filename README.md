## Groupigy App

_I'm setting this simple app to try out some of the changes in next.js 14 as well as create a repo that friends can learn from. This will have too much information and way too many comments. If you're looking to learn Next.js, you'll like this app._



Main Tech stack:
- [Next.js 14.1](https://nextjs.org/)
- [Prisma ORM](https://www.prisma.io/)
- MySQL
- [ShadCN UI](https://ui.shadcn.com) (Tailwind CSS)



### Key Choices
- I didn't use the src folder structure because I wanted to keep the project as simple as possible. This isn't designed to be production ready.
- I'm using prisma as an ORM, but you can either just use raw queries or use drizzle. This isn't a huge deal because we're using clerk for an authorization provider.
- For production use, I'd recommend using next-auth or rolling your own auth.
- Clerk makes auth easy, It could get pricey on a large production app with lots of users, and you lose a little bit of control, but you'll save a ton of time. 
- Unsplash makes board art easy, I'd use something more formal for production.
- I'm using the airbnb eslint config, which takes some setup but makes for reliable code style.
- 

Prerequisites:
- Sign up for an account at clerk.dev and create a new project.
- You'll need an account at stripe.com and create a new project.
- You'll need an account at unsplash.com and get an API key.
If you want to run this locally, you've got a few steps to complete:
1. Clone the repo
2. Run ```pnpm install``` (or npm/yarn)
3. Copy the .env.example file to .env.local and fill in the values ```cp .env.example .env.local```


### Some notes on the code
- (example) denotes a directory that is a route so in the (example) the route would load at localhost:3000/example.
- 