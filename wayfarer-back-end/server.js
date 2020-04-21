const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require("./routes"); // Routes Module
const cors = require("cors");

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: "GET, POST, PUT, DELETE", // only these methods are allowed
    credentials: true, // allows session cookies to be sent back and forth between client and server
    optionsSuccessStatus: 200 // only for legacy browsers as they fail if you send 204 back  
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -----------------------------------------------------------------
// This will print to server console method that was used ("GET/POST/PUT/DELETE") where and when.
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleTimeString();
    const result = `${method} ${url} ${requestedAt}`;
    console.log(result);
  
    next();
});

app.use(session({
    store: new MongoStore({
        url: process.env.MONGODB_URI || "mongodb://localhost:27017/wayfarer",
    }),
    secret: "zsewsxcftrfvbhuyhnmkoik",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1209600000, //1000 * 60 * 60 * 24 * 7 * 2 => 2 weeks
    },
}));

// ROUTES-----------------------------------------------------------------

app.use("/api/v1", routes.api);

// Handle wrong api route
app.use("/api/*", (req, res) => {
    res.status(404).json({ status: 404, error: "Source not found. Ask the backend team ;)" })
});

// -----------------------------------------------------------------
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));

