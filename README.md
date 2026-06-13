# Personal Inventory API

A RESTful API built with Node.js, Express.js, and MongoDB to manage a personal collection of items — games, books, or anything else you want to track.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Tools:** Postman, MongoDB Compass, Nodemon

## Project Structure

```
inventory-api/
├── server.js
├── .env
├── models/
│   └── Item.js
└── routes/
    └── items.js
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas account
- Postman (for testing)

### Installation

```bash
git clone https://github.com/yourusername/inventory-api.git
cd inventory-api
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/inventorydb?retryWrites=true&w=majority
```

### Run the Server

```bash
npm run dev
```

Server runs on `http://localhost:3000`

---

## API Endpoints

### Create an Item
```
POST /items
```
**Request Body:**
```json
{
  "title": "FIFA 25",
  "category": "games",
  "quantity": 2
}
```
**Response:** `201 Created`
```json
{
  "_id": "6650a1b2c3d4e5f6a7b8c9d0",
  "title": "FIFA 25",
  "category": "games",
  "quantity": 2,
  "createdAt": "2026-06-13T10:00:00.000Z",
  "updatedAt": "2026-06-13T10:00:00.000Z"
}
```

---

### Get All Items
```
GET /items
```
**Response:** `200 OK` — returns array of all items

---

### Get Items by Category
```
GET /items?category=games
```
**Response:** `200 OK` — returns only items matching the category

---

### Update Item Quantity
```
PATCH /items/:id
```
**Request Body:**
```json
{
  "quantity": 10
}
```
**Response:** `200 OK` — returns updated item

---

### Delete an Item
```
DELETE /items/:id
```
**Response:** `200 OK`
```json
{
  "message": "Item deleted"
}
```

---

## What I Learned

- Core CRUD operations with Express.js and Mongoose
- REST API design conventions and HTTP status codes
- MongoDB Atlas setup and cloud database connection
- Query parameters for dynamic filtering
- Environment variable management with dotenv
- Testing APIs with Postman
