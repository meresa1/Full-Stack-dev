import prisma from "../helper/prisma.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { first_name, last_name, password, username } = req.body;

  // CREATE USER ADDRESS
  // const addressData = address
  //     ? address.map((address) => {
  //         return { title: address.phone_no, content: address.email || undefined };
  //     })
  //     : [];

  //HASH THE PASSWORD
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const result = await prisma.user.create({
    data: {
      firstName: first_name,
      lastName: last_name,
      password: hashedPassword,
      username: username,
      // userAddress: {
      //     create: addressData,
      // },
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
  if (result) {
    const { phoneNo, phoneNo2, email } = req.body;
    const userAddress = await prisma.userAddress.create({
      data: {
        userId: Number(result.id),
        phoneNo: Number(phoneNo),
        phoneNo2: Number(phoneNo2),
        email
      },
    });
    /* if(result){} */
  }
  const token = jwt.sign({ id: result.id }, process.env.JWT_KEY);
  //const { password, ...other } = user;

  //return res.status(200).json(token);
  return res
    .cookie("token", token, {
      httpOnly: true,
    })
    .status(200)
    .json({ msg: result, token: token });
  //   const { password, ...user } = result;
  //res.json(result)
};

export const login = async (req, res) => {
  //CHECK USER
  // const { username, password } = req.body;

  const user = await prisma.user.findFirst({
    where: { firstName: req.body.first_name },
  });

  if (user === null) return res.status(500).json("User not found!");

  //CHECK PASSWORD
  const isPasswordCorrect = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect)
    return res.status(400).json("Wrong username or password!");

  //const token = jwt.sign({ id: user.id }, process.env.JWT_KEY)
  const { password, ...other } = user;

  return res.status(200).json(other);
  return res
    .cookie("token", token, {
      httpOnly: true,
    })
    .status(200)
    .json({ msg: user, token: token });
  //.json(token)
};

export const customerLogin = async (req, res) => {
  //CHECK COMPANY
  const company = await prisma.customer.findFirst({
    where: { companyName: req.body.company_name },
  });

  if (company === null) return res.status(500).json("Company not found!");

  //CHECK PASSWORD
  const isPasswordCorrect = bcrypt.compareSync(
    req.body.password,
    company.password
  );

  if (!isPasswordCorrect)
    return res.status(400).json("Wrong Company Name or password!");
  /* 
  const access_token = createAccessToken({ id: company._id });
  const refresh_token = createRefreshToken({ id: company._id });
  res.cookie("refreshtoken", refresh_token, {
    httpOnly: true,
    path: "/api/refresh_token",
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000, //validity of 30 days
  });

  res.json({
    msg: "Logged in  Successfully!",
    access_token,
    company: {
      ...company._doc,
      password: "",
    },
  }); */

  // const token = jwt.sign({ id: data[0].id }, "jwtkey");
  /*   const token = jwt.sign({ id: company.id }, process.env.JWT_KEY)
  //const { password, ...other } = user;

  //return res.status(200).json(token);
  return res
    .cookie('token', token, {
      httpOnly: true,
    })
    .status(200)
    .json({ msg: company, token: token }) */
  const { password, ...other } = company;

  return res.status(200).json(other);
  // return res
  //   .cookie("access_token", "string", {
  //     httpOnly: true,
  //   })
  //   .status(200)
  //   .json(user);
};
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

export const changePassword = (req, res) => async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    //const user = await Users.findOne({ _id: req.user._id });
    const user = await prisma.customer.findFirst({
      where: {},
    });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Your password is wrong." });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 6 characters long." });
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 12);

    await Users.findOneAndUpdate(
      { _id: req.user._id },
      { password: newPasswordHash }
    );

    res.json({ msg: "Password updated successfully." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
