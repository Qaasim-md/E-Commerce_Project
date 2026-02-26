# E-Commerce Project Testing Instructions

## Repositories

- Frontend: `https://github.com/Qaasim-md/E-Commerce_Project.git` (branch: `Onkie`)
- Backend: `https://github.com/OnkeMbingeleli/FaceIT_Project-3_E-Commerce_Back-Front_end.git`

## Prerequisites

- Node.js `20+`
- npm

## 1. Run Backend

```bash
git clone https://github.com/OnkeMbingeleli/FaceIT_Project-3_E-Commerce_Back-Front_end.git
cd FaceIT_Project-3_E-Commerce_Back-Front_end
npm install
npm run dev
```

Backend expected base URL:

- `http://localhost:5000`
- API base: `http://localhost:5000/api`

## 2. Run Frontend

```bash
git clone https://github.com/Qaasim-md/E-Commerce_Project.git
cd E-Commerce_Project
git checkout Onkie
cd Frontend
npm install
```

Create `.env` in `Frontend`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

Open the Vite URL shown in terminal (usually `http://localhost:5173`).

## 3. Functional Test Flow

1. Open `/login`
2. Register a new user
3. Sign in
4. Navigate to products/brands pages
5. Add item(s) to cart
6. Open `/cart` and confirm quantity update/remove works
7. Open `/checkout` and place an order

## 4. Notes for Marking

- Backend must be running before testing login/cart/checkout.
- Frontend uses `VITE_API_BASE_URL` and is currently configured for local backend.
- If ports differ, update `.env` accordingly.

