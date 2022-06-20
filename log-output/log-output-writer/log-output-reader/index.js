const crypto = require('crypto');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
const file = 'data/timestamp.txt';

const uuid = crypto.randomUUID();

