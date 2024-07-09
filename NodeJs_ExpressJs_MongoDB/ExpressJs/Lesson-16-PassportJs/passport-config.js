const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const connection = require("./db");

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
        try {
            connection.query(
                "SELECT * FROM customers WHERE email = ?",
                [email],
                async (err, results) => {
                    if (err) {
                        return done(err);
                    }

                    if (results.length === 0) {
                        return done(null, false, {
                            message: "No user with that email",
                        });
                    }

                    const user = results[0];

                    try {
                        if (await bcrypt.compare(password, user.password)) {
                            return done(null, user);
                        } else {
                            return done(null, false, {
                                message: "Password incorrect",
                            });
                        }
                    } catch (e) {
                        return done(e);
                    }
                }
            );
        } catch (error) {
            return done(error);
        }
    };

    passport.use(
        new LocalStrategy({ usernameField: "email" }, authenticateUser)
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        connection.query(
            "SELECT * FROM customers WHERE id = ?",
            [id],
            (err, results) => {
                if (err) {
                    return done(err);
                }
                if (results.length === 0) {
                    return done(null, false); // User not found
                }
                const user = results[0];
                return done(null, user); // Found user
            }
        );
    });
}

module.exports = initialize;
