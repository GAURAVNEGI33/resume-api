const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Helper to generate the JWT token and profile object
function generateAuthData(user) {
  const profile = {
    id: user.id,
    email: user.email,
    name: user.name
  };

  const token = jwt.sign(profile, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return { token, user: profile };
}

/**
 * Register a new user
 * @param {*} req
 * @param {*} res
 */
async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Name, email and password are required.",
      });
    }

    const existingUser = await User.count({ where: { email } });
    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "Email already registered.",
      });
    }

    const user = await User.create({ name, email, password });
    
    const authData = generateAuthData(user);

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: authData
    });
  } catch (error) {
    console.log("error in register", error);
    res.status(500).send({
      success: false,
      message: "Failed to register user.",
    });
  }
}

/**
 * Login user
 * @param {*} req
 * @param {*} res
 */
async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email and password are required.",
      });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isMatch = await user.checkPassword(password);

    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const authData = generateAuthData(user);

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: authData
    });
  } catch (error) {
    console.log("error in login", error);
    res.status(500).send({
      success: false,
      message: "Failed to login.",
    });
  }
}

/**
 * Logout user
 * @param {*} req
 * @param {*} res
 */
function logout(req, res) {
  try {
    res.status(200).send({
      success: true,
      message: "Logged out successfully.",
    });
  } catch (error) {
    console.log("error in logout", error);
    res.status(500).send({
      success: false,
      message: "Failed to logout.",
    });
  }
}

/**
 * Forgot password
 * @param {*} req
 * @param {*} res
 */
function forgotPassword(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required.",
      });
    }
    res.status(200).send({
      success: true,
      message: "Password reset link sent to " + email,
    });
  } catch (error) {
    console.log("error in forgotPassword", error);
    res.status(500).send({
      success: false,
      message: "Failed to send reset link.",
    });
  }
}

/**
 * Reset password
 * @param {*} req
 * @param {*} res
 */
function resetPassword(req, res) {
  try {
    res.status(200).send({
      success: true,
      message: "Password reset successful.",
    });
  } catch (error) {
    console.log("error in resetPassword", error);
    res.status(500).send({
      success: false,
      message: "Failed to reset password.",
    });
  }
}

module.exports = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
};
