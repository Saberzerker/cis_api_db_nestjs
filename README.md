# GRC Compliance Backend (NestJS + MongoDB)

## Quickstart

```bash
# 1. Clone and install
git clone <YOUR_BACKEND_REPO_URL>
cd grc-compliance-backend
npm install

# 2. Configure environment
cp .env.example .env
# Edit .env for secrets and MongoDB connection

# 3. Start MongoDB
docker run --name grc-mongodb -p 27017:27017 -d mongo:latest

# 4. Run backend
npm run start:dev
```

## API

- Auth: `/api/auth/login`, `/api/auth/register`
- Users: `/api/users`
- Devices: `/api/devices`
- Benchmarks: `/api/benchmarks`
- Compliance: `/api/compliance`
- Reports: `/api/reports`

## Frontend Integration

- Set your frontend `.env`:
  ```
  REACT_APP_API_BASE=http://<BACKEND_MACHINE_IP>:3001/api
  ```

- All CORS and JWT flows are supported.

---

## Contributing

- Add more modules as needed (see code structure).
- Use `npm run build` for production, or Docker.
