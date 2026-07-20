// const express = require('express');
import express from "express";
import fs from "fs/promises";
import "dotenv/config";
import path from 'path';
import { fileURLToPath } from "url";
import bcrypt from 'bcrypt';
// const fs = require('fs/promises');
// require('dotenv').config();
// const path = require('path');


const port = process.env.PORT;

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);

const coursePath = path.join(__dirname, '../data/courses.json');
const userPath = path.join(__dirname, '../data/users.json')

// console.log('directory path',__dirname);
// console.log('file path',__filename);

app.get('/',(req, res) => {
    res.json({ message: 'Hello' });
    return;
})

app.post('/signup', async (req, res) => {
    // const data = req.body;
    try {
        const { firstName, lastName, email, password } = req.body;
        // console.log('Data: ', data);

        if (!firstName || !lastName || !email || !password) {
            res.json({ message: "All informations are required for signup"});
            return;
        }

        const users = JSON.parse(await fs.readFile( userPath, 'utf-8'));

        const existingUser = users.find(u => u.email === email);

        if (existingUser) {
            res.json({ message: " User with this email already exists"});
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            id: users.length + 1,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: "student"
        }

        users.push(newUser);

        await fs.writeFile(userPath, JSON.stringify(users, null, 2));
        res.json({
            message: "New User added successfully",
            data: newUser
        });
        return;
    } catch(err) {
        console.log('Error');
        res.json({ message: "Unable to create new user, Please try again!"});
        return;
    }
    
})



app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})