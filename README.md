# Full Stack Portfolio Website

## 🔷 PROJECT OVERVIEW
A full-stack portfolio website built exactly to spec:
* **Frontend**: Vanilla HTML, CSS, JavaScript using the Fetch API.
* **Backend**: Node.js with Express.
* **Database**: MySQL.

## 🔷 SETUP INSTRUCTIONS

### 1. Database Setup
1. Open your terminal or MySQL Workbench.
2. Login to MySQL:
   ```bash
   mysql -u root -p
   ```
3. Run the SQL setup script provided in `database.sql`:
   ```sql
   source "c:/Users/Nithin/OneDrive/Desktop/full stack/portfolio-project/database.sql";
   ```

### 2. Backend Setup
1. **Critical:** Edit `portfolio-project/backend/db.js` and change `'YOUR_PASSWORD'` to your actual MySQL root password.
2. Open your terminal and navigate to the backend folder:
   ```bash
   cd "backend"
   ```
3. The dependencies (`express`, `mysql2`, `cors`, `body-parser`) are already installed. Start the server:
   ```bash
   node server.js
   ```
   *You should see the message: `Backend Server running locally on http://localhost:5000`*

### 3. Frontend Setup
1. Simply go to the `frontend/` folder and double-click `index.html` to open it in your browser. 
2. Test the connection by submitting a contact form.
3. Watch the Node terminal for logs, and then check MySQL to see your message in the `contacts` table!
