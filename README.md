# Svelte Playground

## Overview

Svelte Playground is a ready-to-use environment for quick Svelte prototyping and testing.

## Technologies Used

- Typescript
- Sveltekit
- NodeJS
- Docker
- MySQL

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

```sh
git clone git@github.com:margusliinev/svelte-playground.git
cd svelte-playground
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory with the following contents.

```
DATABASE_URL='mysql://user:password@localhost:3306/db'
```

### 3. Install Dependencies

Install dependencies for both API and the UI:

```sh
npm install
```

### 4. Start the Project

Start the required services and the development server:

```sh
docker compose up -d
npm run dev
```

### 5. Deploy to Production

Build and start the project for production:

```sh
npm run build
npm run start
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## Support

For questions or support, open an issue in this repository.

## License

This project is licensed under the [MIT License](LICENSE).
